import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import stylesContainer from '../../../CSS/container.module.css'
import { DATE_PICKER, MULTIPLE, NONE, SELECT, SUCCESS, TEXT_FIELD } from "../../../Util/constants";
import axios from "axios";
import { useEffect } from "react";
import ImageHeaderAdmin from "../header_add_edit";
import FieldsAdmin from "../../../ReusableComponents/Fields/fields_admin";
import GenericRoundButton from "../../../ReusableComponents/Buttons/generic_button";
import { Alert, Snackbar } from "@mui/material";

export default function AddEditRoute({isNew, type, id}){
    const title = isNew ? "Agregar un nueva Ruta" : "Editar Ruta";
    const [image, setImage] = useState()
    const [placesRoute, setPlacesRoutes] = useState([])
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("success");
    const [routeData, setRouteData] = useState({
        id: '',
        name: '',
        editionId: '',
        placeId: '',
        placeIds: []
    })
    useEffect(() =>{
        getImage()
        if(!isNew)
            getCurrent()
    },[])

    async function getImage(){
        await axios.get('http://localhost:8080/images/getAdminPH', {params:{sectionPH: type}}).then(response => {
            setImage(response.data);
        })
    }

    const handleFieldChange = () => (event) => {
        const value = event.target.value;
        setRouteData({
            ...routeData,
            [event.target.id]: value
        });
    }

    const onAddRoute = () => () =>{
        placesRoute.push(routeData.placeId);
        setRouteData({
            ...routeData, 
            placeId: ''
        })
    }

    async function getCurrent(){
        await axios.get('http://localhost:8080/routes/getById',  {params:{id: id}}).then(
            response => {
                setRouteData({
                    id: response.data.id, 
                    editionId: response.data.editionId,
                    name: response.data.name,
                    placeId: response.data.placeId,
                    startHour: response.data.startHour,
                    endHour: response.data.endHour
                })
            }
        )
    }

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };


    const save = () => () =>{ 
        if(isNew){
            routeData.placeIds = placesRoute
            axios.post('http://localhost:8080/routes/create', routeData).then(response => {
                setMessage("Ruta creada exitosamente")
            })
        }else{ 
            axios.post('http://localhost:8080/routes/update', routeData).then(response => {
                setMessage("Ruta actualizada exitosamente")
            })
        }
        setOpen(true)
        setSeverity(SUCCESS)    
    }

    const info = isNew ? 'En esta sección puede agregar un nueva ruta' : 'En esta sección puede editar y eliminar un luegar existente';
    const headerTitle = title;
    const nombre = [{id:'name', name:'Nombre', value: routeData.name, type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()}]
    const secondCol = [
        {id:'editionId', name:'Edición', value: routeData.editionId, type: TEXT_FIELD, isRequired:true, helperText:'Indique el ID de la edición con la que quiere asociar esta ruta, revise el ID en la tabla correspondiente', onChange: () => handleFieldChange()}    ]
    const secondColNew = [
        {id:'editionId', name:'Edición', value: routeData.editionId, type: TEXT_FIELD, isRequired:true, helperText:'Indique el ID de la edición con la que quiere asociar esta ruta, revise el ID en la tabla correspondiente', onChange: () => handleFieldChange()},
        {id: 'placeId', name:'Lugares', value: routeData.placeId, type: MULTIPLE, content:'lugares', isRequired:true, helperText:'Indique el ID del lugar que quiere asociar con esta ruta, revise el ID en la tabla correspondiente, presione el signo de + para agregar otro', onChange: () => handleFieldChange(), onAdd: () => onAddRoute(), saved: placesRoute}
    ]
    return(
        <Box className={stylesContainer.displayColumn}>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert severity={severity}>{message}</Alert>
            </Snackbar>
            <ImageHeaderAdmin title='Rutas' info={info} image={image} headerTitle={headerTitle}/>
            <Box className={stylesContainer.displayRow} style={{borderLeft:'2vh', margin:'auto'}}>
                <Box className={stylesContainer.displayColumn}>
                    <div className={ stylesContainer.spaceBetween } style={{ marginTop:'5vh' }}>
                        <FieldsAdmin fields={nombre}/>
                    </div>
                </Box>
                <Box className={stylesContainer.displayColumn}>
                    <FieldsAdmin fields={isNew ? secondColNew : secondCol}/>
                </Box>
            </Box>
            <GenericRoundButton Icon={<></>} backgroundColor='#2a1463' text='guardar' iconPosition={NONE} onClick={()=>save()}/>
        </Box>
    ) 
}