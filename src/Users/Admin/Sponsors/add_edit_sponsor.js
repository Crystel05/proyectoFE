import React from "react";
import Box from '@mui/material/Box';
import stylesContainer from '../../../CSS/container.module.css'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ImageHeaderAdmin from "../header_add_edit";
import { TEXT_FIELD, NONE, ERROR, SUCCESS } from "../../../Util/constants";
import FieldsAdmin from "../../../ReusableComponents/Fields/fields_admin";
import GenericRoundButton from "../../../ReusableComponents/Buttons/generic_button";
import { Alert, Snackbar } from "@mui/material";

export default function AddEditSponsor({isNew, type, id}){

    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");
    const [image, setImage] = useState()
    const [imageForSponsor, setImageForSponsor] = useState()
    const [sponsorData, setSponsorData] = useState({
        id: '',
        name: '',
        imageLink:'',
        image:{imageId:'', name:'', drivePath:''}
    })
    useEffect(() =>{
        getImage()
        if(!isNew)
            getCurrentSponsor()
    },[])


    async function getImage(){
        await axios.get('http://localhost:8080/images/getAdminPH', {params:{sectionPH: type}}).then(response => {
            setImage(response.data);
        })
    }

    async function getCurrentSponsor(){
        await axios.get('http://localhost:8080/sponsor/getById',  {params:{id: id}}).then(
            response => {
                setImageForSponsor(response.data.image.drivePath)
                setSponsorData({
                    id: response.data.id, 
                    name: response.data.name,
                    image:{imageId: response.data.image.imageId, name:response.data.image.name, drivePath: response.data.image.drivePath}
                })
            }
        )
    }

    
    const handleFieldChange = () => (event) => {
        const value = event.target.value;
        console.log(event.target.id)
        setSponsorData({
            ...sponsorData,
            [event.target.id]: value
        });
        if(event.target.id === 'imageLink'){
            setSponsorData({
                ...sponsorData,
                image:{imageId: sponsorData.image.imageId, name:sponsorData.name, drivePath:value}
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
            axios.post('http://localhost:8080/sponsor/create', sponsorData).then(response => {
                setMessage("Patrocinador creado exitosamente")
            })
        }else{ 
            axios.post('http://localhost:8080/sponsor/update', sponsorData).then(response => {
                setMessage("Patrocinador actualizado exitosamente")
            })
        }
        setOpen(true)
        setSeverity(SUCCESS)
    }

    const info = isNew ? 'En esta sección puede agregar un nuevo patrocinador' : 'En esta sección puede editar y eliminar un patrocinador existente';
    const headerTitle = isNew ? 'Agregar Patrocinador' : 'Editar Patrocinador';
    const nombre = [{id:'name', name:'Nombre', value:sponsorData.name, type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => handleFieldChange()},
    {id:'imageLink', name:'Imagen', value:sponsorData.image.drivePath, type: TEXT_FIELD, isRequired:true, helperText:'Link de google drive', onChange: () => handleFieldChange()}]

    return(
        <Box className={stylesContainer.displayColumn}>
             <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert severity={severity}>{message}</Alert>
            </Snackbar>
            <ImageHeaderAdmin title='Patrocinadores' info={info} image={image} headerTitle={headerTitle}/>
            <Box className={stylesContainer.displayRow} style={{borderLeft:'2vh', margin:'auto'}}>
                <Box className={stylesContainer.displayColumn}>
                    <div className={ stylesContainer.spaceBetween } >
                        <FieldsAdmin fields={nombre}/>
                    </div>
                    
                </Box>
                <Box className={stylesContainer.displayColumn}>
                    <Box clasName={stylesContainer.displayRow}>
                    {!isNew && <Box clasName={stylesContainer.displayRow} sx={{ margin:'auto', marginTop:'1vh', marginLeft:'2vh', p: 1, border:2, borderColor:'#f4f3f7', borderRadius:'10px', boxShadow:'1px 3px 18px #a19999', width:'150px', height:'150px' }}>
                        <img src={imageForSponsor} style={{ margin:'auto', width:'150px', height:'150px' }}/>
                    </Box>}
                    </Box>
                </Box>
            </Box>
            <GenericRoundButton Icon={<></>} backgroundColor='#2a1463' text='guardar' iconPosition={NONE} onClick={()=>save()}/>
        </Box>
    )
}