import React from "react";
import Box from '@mui/material/Box';
import stylesContainer from '../../../CSS/container.module.css'
import { useState } from "react";
import { DATE_PICKER, NONE, SELECT, SUCCESS, TEXT_FIELD } from "../../../Util/constants";
import axios from "axios";
import { useEffect } from "react";
import ImageHeaderAdmin from "../header_add_edit";
import FieldsAdmin from "../../../ReusableComponents/Fields/fields_admin";
import GenericRoundButton from "../../../ReusableComponents/Buttons/generic_button";
import { Alert, Snackbar } from "@mui/material";

export default function AddEditEvent({isNew, type, id}){
    const title = isNew ? "Agregar un nuevo Evento" : "Editar Evento";
    const [image, setImage] = useState()
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");
    const [eventData, setEventData] = useState({
        placeId: '',
        startHour: '',
        endHour: ''
    })
    useEffect(() =>{
        getCurrentEvent()
        getImage()
    },[])

    async function getImage(){
        await axios.get('http://localhost:8080/images/getAdminPH', {params:{sectionPH: type}}).then(response => {
            setImage(response.data);
        })
    }

    async function getCurrentEvent(){
        await axios.get('http://localhost:8080/event/getEventById',  {params:{eventId: id}}).then(
            response => {
                setEventData({
                    id: response.data.id, 
                    placeId: response.data.placeId,
                    startHour: response.data.startHour,
                    endHour: response.data.endHour
                })
            }
        )
    }

    const handleFieldChange = () => (event) => {
        const value = event.target.value;
        setEventData({
            ...eventData,
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
        if(isNew){
            axios.post('http://localhost:8080/event/create', eventData).then(response => {
                setMessage("Evento creado exitosamente")
            })
        }else{ 
            axios.post('http://localhost:8080/event/update', eventData).then(response => {
                setMessage("Evento actualizado exitosamente")
            })
        }
        setOpen(true)
        setSeverity(SUCCESS)    
    }

    const info = isNew ? 'En esta sección puede agregar un nuevo lugar' : 'En esta sección puede editar y eliminar un luegar existente';
    const headerTitle = title;
    const nombre = [{id:'placeId', name:'Lugar ID', value:eventData.placeId, type: TEXT_FIELD, isRequired:true, helperText:'Indique el ID del lugar del evento, puede revisarlo en la tabla de lugares', onChange: () => handleFieldChange()}]
    const secondCol = [
                        {id:'startHour', name:'Hora Inicio', value:eventData.startHour, type: TEXT_FIELD, isRequired:true, helperText:'Hora a la que inicia el evento, formato hh:mm:ss', onChange: () => handleFieldChange()},
                        {id: 'endHour', name:'Hora Final', value: eventData.endHour, type: TEXT_FIELD, isRequired:true, helperText:'Hora a la que finaliza el evento,formato hh:mm:ss', onChange: () => handleFieldChange()}
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
            <ImageHeaderAdmin title='Eventos' info={info} image={image} headerTitle={headerTitle}/>
            <Box className={stylesContainer.displayRow} style={{borderLeft:'2vh', margin:'auto'}}>
                <Box className={stylesContainer.displayColumn}>
                    <div className={ stylesContainer.spaceBetween } style={{ marginTop:'5vh' }}>
                        <FieldsAdmin fields={nombre}/>
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