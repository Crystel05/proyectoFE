import React from "react";
import Box from '@mui/material/Box';
import stylesContainer from '../../../CSS/container.module.css'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ImageHeaderAdmin from "../header_add_edit";
import { TEXT_AREA, TEXT_FIELD, NONE, CHECKBOX, MULTIPLE, SUCCESS, ERROR } from "../../../Util/constants";
import FieldsAdmin from "../../../ReusableComponents/Fields/fields_admin";
import { Alert, Snackbar } from "@mui/material";
import GenericRoundButton from "../../../ReusableComponents/Buttons/generic_button";


export default function AddEditEdition({type}){

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("success");

    const [image, setImage] = useState()
    const [imagesEdition, setImagesEdition] = useState([])
    const [routes, setRoutes] = useState([])
    const [sponsors, setSponsors] = useState([])

    const [routesList, setRoutesList] = useState([])
    const [sponsorsList, setSponsorsList] = useState([])
    const [editionData, setEditionData] = useState({
        id: '',
        name: '',
        eventId: '',
        details:'',
        sponsorId: '',
        routeId:'',
        imageLink: '',
        images: [],
        current: false
    })

    useEffect(() =>{
        getImage()
        getSelects()
    },[])

    const save = () => () =>{ 
        axios.post('http://localhost:8080/edition/create', editionData).then(response => {
            setMessage("Edición creada exitosamente")
            setOpen(true)
            setSeverity(SUCCESS)   
        }).catch(error =>{
            setMessage("Hubo un error creando la edición")
            setOpen(true)
            setSeverity(ERROR)  
        })
         
    }

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    async function getImage(){
        await axios.get('http://localhost:8080/images/getAdminPH', {params:{sectionPH: type}}).then(response => {
            setImage(response.data);
        })
    }

    async function getSelects(){
        await axios.get('http://localhost:8080/routes/getAll').then(response => {
            setRoutesList(response.data)
        })
        await axios.get('http://localhost:8080/sponsor/getAll').then(response => {
            setSponsorsList(response.data)
        })
    }

    const handleFieldChange = () => (event) => {
        const value = event.target.value;
        setEditionData({
            ...editionData,
            [event.target.id]: value
        });
        console.log(editionData)
    }

    const onAddImage = () => () =>{
        imagesEdition.push(editionData.imageLink);
        setEditionData({
            ...editionData, 
            imageLink: ''
        })
    }

    const onAddSponsor = () => (event) =>{
        setEditionData({
            ...editionData, 
            sponsorId: ''
        })
        sponsors.push(editionData.sponsorId);
    }

    const onAddRoute = () => () =>{
        setEditionData({
            ...editionData, 
            routeId: ''
        })
        routes.push(editionData.routeId);
    }

    const info = 'En esta sección puede agregar una nueva edición'
    const headerTitle = 'Agregar Edición'
    const col1 = [{id:'name', name:'Nombre', type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => handleFieldChange()},
                    {id:'details', name:'Detalles', type: TEXT_AREA, isRequired:true, helperText:'', onChange: () => handleFieldChange()}
                ]
        const secondCol = [ 
            {id:'sponsorId', value:editionData.sponsorId, name:'Patrocinadores', type: MULTIPLE, content: 'patrocinadores', helperText:'Indique el ID del patrocinador que quiere agregar a esta edición, revise el ID en la tabla correspondiente', isRequired:true, values:sponsorsList, onChange: () => handleFieldChange(), onAdd: () => onAddSponsor(), saved: sponsors},
            {id:'routeId', value:editionData.routeId, name:'Rutas', type: MULTIPLE, content: 'rutas', helperText: 'Indique el ID de la ruta que quiere agregar a esta edición, revise el ID en la tabla correspondiente', isRequired:true, values:routesList, onChange: () => handleFieldChange(),  onAdd: () => onAddRoute(), saved: routes },           
            {id:'imageLink', value:editionData.imageLink, name:'Foto', type: MULTIPLE, content: 'imágenes', helperText:'Agregue un link de compartir imagen de google drive', isRequired:true, onChange: () => handleFieldChange(), onAdd: () => onAddImage(), saved: imagesEdition},
            {id:'current', name:'Edicion Actual', type: CHECKBOX, isRequired:true, helperText:'', onChange: () => handleFieldChange()},
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
            <ImageHeaderAdmin title='Ediciones' info={info} image={image} headerTitle={headerTitle}/>
            <Box className={stylesContainer.displayRow} style={{borderLeft:'2vh', margin:'auto'}}>
                <Box className={stylesContainer.displayColumn}>
                    <div className={ stylesContainer.spaceBetween } >
                        <FieldsAdmin fields={col1}/>
                    </div>
                </Box>
                <Box className={stylesContainer.displayColumn}>
                    <FieldsAdmin fields={secondCol}/>
                </Box>
            </Box>
            <GenericRoundButton Icon={<></>} backgroundColor='#2a1463' text='guardar' iconPosition={NONE} onClick={()=>save()}/>
        </Box>
    )
}