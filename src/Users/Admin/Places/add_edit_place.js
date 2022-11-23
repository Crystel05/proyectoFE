import React from "react";
import Box from '@mui/material/Box';
import stylesContainer from '../../../CSS/container.module.css'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ImageHeaderAdmin from "../header_add_edit";
import { TEXT_AREA, TEXT_FIELD, NONE } from "../../../Util/constants";
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
    const [placeData, setPlaceData] = useState({
        id: '',
        name: '',
        imageLink:'',
        details: '',
        latitude: '',
        longitude: '',
        imageId: '',
        image:{name:'', drivePath:''}
    })
    useEffect(() =>{
        getImage()
        if(!isNew){
            getCurrentPlace()
        }
    },[])

    async function getImage(){
        await axios.get('http://localhost:8080/images/getAdminPH', {params:{sectionPH: type}}).then(response => {
            setImage(response.data);
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
                    imageLink: response.data.image?.drivePath,
                    details: response.data.details,
                    latitude: response.data.latitude,
                    longitude: response.data.longitud,
                    imageId: response.data.image.imageId,
                    image:{imageId: response.data.image.imageId, name:response.data.image.name, drivePath: response.data.image.drivePath}
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
    }

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    const save = () => () =>{
        if(placeData.name === '' || placeData.imageLink === '' || placeData.details === '' || placeData.latitude === '' || placeData.longitude === '' ){

        }else{
            if(isNew){
                //llamar al save de uno nuevo
            }else{
                
                axios.post('http://localhost:8080/places/update', placeData).then(response => {
                    console.log(response.data)
                })
            }
        }
        
    }

    const info = isNew ? 'En esta sección puede agregar un nuevo lugar' : 'En esta sección puede editar y eliminar un luegar existente';
    const headerTitle = title;
    const nombre = [{id:'name', name:'Nombre', value:placeData.name, type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()}, 
    {id:'imageLink', name:'Imagen', value:placeData.imageLink, type: TEXT_FIELD, isRequired:true, helperText:'Link de google drive', onChange: () => handleFieldChange()}]
    const secondCol = [{id:'details', value:placeData.details, name:'Detalles', type: TEXT_AREA, isRequired:true, onChange: () => handleFieldChange()},
                        {id:'latitude', value: placeData.latitude, name:'Latitud', type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()},
                        {id: 'longitude', value:placeData.longitude, name:'Longitud', type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()}
                    ]
    return(
        <Box className={stylesContainer.displayColumn}>
            {console.log(place)}
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
                    <Box clasName={stylesContainer.displayRow} sx={{ margin:'auto', p: 1, border:2, borderColor:'#f4f3f7', borderRadius:'10px', boxShadow:'1px 3px 18px #a19999', width:'150px', height:'150px' }}>
                        <img src={imageForPlace} style={{ margin:'auto', width:'150px', height:'150px' }}/>
                    </Box>
                </Box>
                <Box className={stylesContainer.displayColumn}>
                    <FieldsAdmin fields={secondCol}/>
                </Box>
            </Box>
            <GenericRoundButton Icon={<></>} backgroundColor='#2a1463' text='guardar' iconPosition={NONE} onClick={()=>save()}/>
        </Box>
    )
}