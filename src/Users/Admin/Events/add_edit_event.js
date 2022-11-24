import React from "react";
import Box from '@mui/material/Box';
import stylesContainer from '../../../CSS/container.module.css'
import { useState } from "react";
import { DATE_PICKER, NONE, SELECT } from "../../../Util/constants";
import axios from "axios";
import { useEffect } from "react";
import ImageHeaderAdmin from "../header_add_edit";
import FieldsAdmin from "../../../ReusableComponents/Fields/fields_admin";
import GenericRoundButton from "../../../ReusableComponents/Buttons/generic_button";

export default function AddEditEvent({isNew, type}){
    const title = isNew ? "Agregar un nuevo Evento" : "Editar Evento";
    const [image, setImage] = useState()
    const [imageForPlace, setImageForPlace] = useState()
    const [values, setValues] = useState([])

    useEffect(() =>{
        getImage()
        getPlaces()
    },[])

    async function getImage(){
        await axios.get('http://localhost:8080/images/getAdminPH', {params:{sectionPH: type}}).then(response => {
            setImage(response.data);
        })
    }

    async function getPlaces(){
        await axios.get('http://localhost:8080/place/getAll').then(response => {
            setValues(response.data);
        })
    }


    const info = isNew ? 'En esta sección puede agregar un nuevo lugar' : 'En esta sección puede editar y eliminar un luegar existente';
    const headerTitle = title;
    const nombre = [{id:'1', name:'Lugar', values:values, type: SELECT, isRequired:true, helperText:'', onChange: () => {}}]
    const secondCol = [
                        {id:'3', name:'Hora Inicio', type: DATE_PICKER, isRequired:true, helperText:'', onChange: () => {}},
                        {id: '4', name:'Hora Final', type: DATE_PICKER, isRequired:true, helperText:'', onChange: () => {}}
                    ]
    return(
        <Box className={stylesContainer.displayColumn}>
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
            <GenericRoundButton Icon={<></>} backgroundColor='#2a1463' text='guardar' iconPosition={NONE} onClick={()=>{}}/>
        </Box>
    )
}