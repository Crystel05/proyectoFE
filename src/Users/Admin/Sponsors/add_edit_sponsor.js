import React from "react";
import Box from '@mui/material/Box';
import stylesContainer from '../../../CSS/container.module.css'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ImageHeaderAdmin from "../header_add_edit";
import { TEXT_FIELD, NONE } from "../../../Util/constants";
import FieldsAdmin from "../../../ReusableComponents/Fields/fields_admin";
import GenericRoundButton from "../../../ReusableComponents/Buttons/generic_button";

export default function AddEditSponsor({isNew, type}){
    const title = isNew ? "Agregar un nuevo lugar" : "Editar lugar"
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

    const info = isNew ? 'En esta sección puede agregar un nuevo patrocinador' : 'En esta sección puede editar y eliminar un patrocinador existente';
    const headerTitle = isNew ? 'Agregar Patrocinador' : 'Editar Patrocinador';
    const nombre = [{id:'1', name:'Nombre', type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => {}}]

    return(
        <Box className={stylesContainer.displayColumn}>
            <ImageHeaderAdmin title='Patrocinadores' info={info} image={image} headerTitle={headerTitle}/>
            <Box className={stylesContainer.displayRow} style={{borderLeft:'2vh', margin:'auto'}}>
                <Box className={stylesContainer.displayColumn}>
                    <div className={ stylesContainer.spaceBetween } >
                        <FieldsAdmin fields={nombre}/>
                    </div>
                    
                </Box>
                <Box className={stylesContainer.displayColumn}>
                    <Box clasName={stylesContainer.displayRow}>
                        <GenericRoundButton Icon={<></>} backgroundColor='#2a1463' text='agregar imagen' iconPosition={NONE} onClick={()=>{}}/>
                        <image src={imageForPlace} style={{height:'100px', width:'100px'}}> </image>
                    </Box>
                </Box>
            </Box>
            <GenericRoundButton Icon={<></>} backgroundColor='#2a1463' text='guardar' iconPosition={NONE} onClick={()=>{}}/>
        </Box>
    )
}