import React from "react";
import Box from '@mui/material/Box';
import stylesContainer from '../../../CSS/container.module.css'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ImageHeaderAdmin from "../header_add_edit";
import { TEXT_AREA, TEXT_FIELD, NONE, SELECT, ERROR, SUCCESS, PLACES } from "../../../Util/constants";
import FieldsAdmin from "../../../ReusableComponents/Fields/fields_admin";
import GenericRoundButton from "../../../ReusableComponents/Buttons/generic_button";
import { Alert, Snackbar } from "@mui/material";

export default function AddEditPlace({isNew, type, id}){

    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");
    const title = isNew ? "Agregar un nuevo lugar" : "Editar lugar";
    const [image, setImage] = useState()
    const [imageForPlace, setImageForPlace] = useState()
    const [place, setPlace] = useState({})
    const [values, setValues] = useState([])
    const [placeData, setPlaceData] = useState({
        id: '',
        name: '',
        imageLink:'',
        details: '',
        latitude: '',
        longitude: '',
        imageId: '',
        category: '',
        image:{name:'', drivePath:''},
        link: '',
        priceRange: '',
        score: ''
    })
    useEffect(() =>{
        getImage()
        getCategories()
        if(!isNew){
            getCurrentPlace()
        }
    },[])

    async function getImage(){
        await axios.get('http://localhost:8080/images/getAdminPH', {params:{sectionPH: type}}).then(response => {
            setImage(response.data);
        })
    }

    async function getCategories(){
        await axios.get('http://localhost:8080/places/getCategories', {params:{sectionPH: type}}).then(response => {
            setValues(response.data);
        })
    }

    async function getCurrentPlace(){
        await axios.get('http://localhost:8080/places/getById',  {params:{id: id}}).then(
            response => {
                setPlace(response.data)
                setImageForPlace(response.data.image.drivePath)
                setPlaceData({
                    id: response.data.id, 
                    name: response.data.name,
                    details: response.data.details,
                    latitude: response.data.latitude,
                    longitude: response.data.longitude,
                    imageId: response.data.image.imageId,
                    category: response.data.category,
                    image:{imageId: response.data.image.imageId, name:response.data.image.name, drivePath: response.data.image.drivePath},
                    link: response.data.link
                })
            }
        )
    }

    const handleFieldChange = () => (event) => {
        const value = event.target.value;
        setPlaceData({
            ...placeData,
            [event.target.id]: value
        });
        if(event.target.id === 'imageLink'){
            setPlaceData({
                ...placeData,
                image:{imageId: placeData.image.imageId, name:placeData.name, drivePath:value}
            })
        }
    }

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    const save = () => () =>{ 
        if(isNew){
            axios.post('http://localhost:8080/places/create', placeData).then(response => {
                setMessage("Lugar creado exitosamente")
            })
        }else{ 
            axios.post('http://localhost:8080/places/update', placeData).then(response => {
                setMessage("Lugar actualizado exitosamente")
            })
        }
        setOpen(true)
        setSeverity(SUCCESS)    
    }

    const info = isNew ? 'En esta sección puede agregar un nuevo lugar' : 'En esta sección puede editar y eliminar un luegar existente';
    const headerTitle = title;
    const nombre = [{id:'name', name:'Nombre', value:placeData.name, type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()}, 
                    {id:'link', value:placeData.link, name:'Enlace', type: TEXT_FIELD, helperText: 'Enlace de la página del lugar',isRequired:false, onChange: () => handleFieldChange()},
                    {id:'priceRange', value: placeData.priceRange, name:'Rango de precios', type: TEXT_FIELD, helperText: 'Rango de precios de 1 a 3, si aplica', isRequired:false, onChange: () => handleFieldChange()},
                    {id:'imageLink', name:'Imagen', value:placeData.image.drivePath, type: TEXT_FIELD, isRequired:true, helperText:'Link de compartir de google drive', onChange: () => handleFieldChange()},
                ]
    const secondCol = [
                        {id:'latitude', value: placeData.latitude, name:'Latitud', type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()},
                        {id:'longitude', value:placeData.longitude, name:'Longitud', type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()},
                        {id:'category', value:placeData.category, name:'Categoría', type: TEXT_FIELD, helperText:'Categorías: Bar-Entretenimiento-Restaurante', isRequired:true, onChange: () => handleFieldChange()},
                        {id:'score', value: placeData.score, name:'Calificación', helperText:'Califique el lugar de 1 a 5', type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()},
                        {id:'details', value:placeData.details, name:'Detalles', type: TEXT_AREA, isRequired:false, onChange: () => handleFieldChange()},
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
            <ImageHeaderAdmin title='Lugares' info={info} image={image} headerTitle={headerTitle}/>
            <Box className={stylesContainer.displayRow} style={{borderLeft:'2vh', margin:'auto'}}>
                <Box className={stylesContainer.displayColumn}>
                    <div className={ stylesContainer.spaceBetween } >
                        <FieldsAdmin fields={nombre}/>
                    </div>
                    {!isNew && <Box clasName={stylesContainer.displayRow} sx={{ margin:'auto', marginTop:'1vh', p: 1, border:2, borderColor:'#f4f3f7', borderRadius:'10px', boxShadow:'1px 3px 18px #a19999', width:'150px', height:'150px' }}>
                        <img src={imageForPlace} style={{ margin:'auto', width:'150px', height:'150px' }}/>
                    </Box>}
                </Box>
                <Box className={stylesContainer.displayColumn } >
                    <FieldsAdmin fields={secondCol}/>
                </Box>
            </Box>
            <GenericRoundButton Icon={<></>} backgroundColor='#2a1463' text='guardar' iconPosition={NONE} onClick={()=>save()}/>
        </Box>
    )
}