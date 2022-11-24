import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import stylesContainer from '../../../CSS/container.module.css'
import { DATE_PICKER, NONE, SELECT, TEXT_FIELD } from "../../../Util/constants";
import axios from "axios";
import { useEffect } from "react";
import ImageHeaderAdmin from "../header_add_edit";
import FieldsAdmin from "../../../ReusableComponents/Fields/fields_admin";
import GenericRoundButton from "../../../ReusableComponents/Buttons/generic_button";

export default function AddEditRoute({isNew, type}){
    const title = isNew ? "Agregar un nueva Ruta" : "Editar Ruta";
    const [image, setImage] = useState()
    const [imageForPlace, setImageForPlace] = useState()

    useEffect(() =>{
        getImage()
    },[])

    async function getImage(){
        await axios.get('http://localhost:8080/images/getAdminPH', {params:{sectionPH: type}}).then(response => {
            setImage(response.data);
        })
    }

    async function getCurrent(){
        
    }
    const info = isNew ? 'En esta sección puede agregar un nueva ruta' : 'En esta sección puede editar y eliminar un luegar existente';
    const headerTitle = title;
    const nombre = [{id:'1', name:'Nombre', type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => {}}]
    const secondCol = [
                        {id:'2', name:'Edición', type: SELECT, isRequired:true, helperText:'', onChange: () => {}},
                        {id: '3', name:'Lugares', values:[], type: SELECT, isRequired:true, helperText:'', onChange: () => {}}
                    ]
    return(
        <Box className={stylesContainer.displayColumn}>
            <ImageHeaderAdmin title='Rutas' info={info} image={image} headerTitle={headerTitle}/>
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