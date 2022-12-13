import React from "react";
import Box from '@mui/material/Box';
import stylesContainer from '../../../CSS/container.module.css'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ImageHeaderAdmin from "../header_add_edit";
import { TEXT_AREA, TEXT_FIELD, NONE, SUCCESS } from "../../../Util/constants";
import FieldsAdmin from "../../../ReusableComponents/Fields/fields_admin";
import GenericRoundButton from "../../../ReusableComponents/Buttons/generic_button";
import { Alert, Snackbar } from "@mui/material";

export default function AddEditNews({isNew, type, id}){
    const [image, setImage] = useState()
    const [currentNewImage, setCurrentNewImage] = useState()
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");
    const [newData, setNewData] = useState({
        id: '',
        title: '', 
        description: '',
        photo: '',
        date: '',
        link: '',
        image: {imageId: '', name: '', drivePath: ''}
    })
    useEffect(() =>{
        getImage()
        if(!isNew)
            getCurrent()
    },[])

    async function getCurrent(){
        await axios.get('http://localhost:8080/news/getById',  {params:{id: id}}).then(
            response => {
                setCurrentNewImage(response.data.image.drivePath)
                setNewData({
                    id: response.data.id, 
                    title: response.data.title,
                    description: response.data.description,
                    date: response.data.date,
                    link: response.data.link,
                    photo: response.data.image.drivePath,
                    image:{imageId: response.data.image.imageId, name:response.data.image.name, drivePath: response.data.image.drivePath}
                })
            }
        )
    }

    async function getImage(){
        await axios.get('http://localhost:8080/images/getAdminPH', {params:{sectionPH: type}}).then(response => {
            setImage(response.data);
        })
    }

    const handleFieldChange = () => (event) => {
        const value = event.target.value;
        setNewData({
            ...newData,
            [event.target.id]: value
        });
        if(event.target.id === 'photo'){
            setNewData({
                ...newData,
                image:{imageId: newData.image.imageId, name:newData.name, drivePath:value}
            })
        }
    }

    const save = () => () =>{
        if(isNew){
            axios.post('http://localhost:8080/news/create', newData).then(response => {
                setMessage("Noticia creada exitosamente")
            })
        }else{ 
            axios.post('http://localhost:8080/news/update', newData).then(response => {
                setMessage("Noticia actualizada exitosamente")
            })
        }
        setOpen(true)
        setSeverity(SUCCESS)
    }

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    const info = isNew ? 'En esta sección puede agregar una nueva noticia' : 'En esta sección puede editar y eliminar una noticia existente';
    const headerTitle = isNew ? 'Agregar Noticia' : 'Editar Noticia';
    const col1 = [{id:'title', value: newData.title, name:'Título', type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => handleFieldChange()},
                  {id:'photo', name:'Imagen', value: newData.image.drivePath, type: TEXT_FIELD, isRequired:true, helperText:'Link de google drive', onChange: () => handleFieldChange()}]
    const secondCol = [{id:'description', value:
     newData.description, name:'Detalles', type: TEXT_AREA, isRequired:true, helperText:'', onChange: () => handleFieldChange()},
                        {id:'link', value:newData.link, name:'Link Noticia', type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => handleFieldChange()},
                        {id:'date', value:newData.date, name: 'Fecha de la Noticia', type: TEXT_FIELD, isRequired:true, helperText:'Ingrese la fecha en el formato dd-MM-AAAA', onChange: () => handleFieldChange()},
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
            <ImageHeaderAdmin title='Noticias' info={info} image={image} headerTitle={headerTitle}/>
            <Box className={stylesContainer.displayRow} style={{borderLeft:'2vh', margin:'auto'}}>
                <Box className={stylesContainer.displayColumn}>
                    <div className={ stylesContainer.spaceBetween } >
                        <FieldsAdmin fields={col1}/>
                        {!isNew && <Box clasName={stylesContainer.displayRow} sx={{ margin:'auto', marginTop:'1vh', marginLeft:'2vh', p: 1, border:2, borderColor:'#f4f3f7', borderRadius:'10px', boxShadow:'1px 3px 18px #a19999', width:'150px', height:'150px' }}>
                            <img src={currentNewImage} style={{ margin:'auto', width:'150px', height:'150px' }}/>
                        </Box>}
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