import React from "react";
import Box from '@mui/material/Box';
import stylesContainer from '../../../CSS/container.module.css'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ImageHeaderAdmin from "../header_add_edit";
import { TEXT_AREA, TEXT_FIELD, NONE, CHECKBOX, MULTIPLE, SELECTMULTIPLE } from "../../../Util/constants";
import FieldsAdmin from "../../../ReusableComponents/Fields/fields_admin";
import GenericRoundButton from "../../../ReusableComponents/Buttons/generic_button";

export default function AddEditEdition({type}){
    const [image, setImage] = useState()
    const [imagesEdition, setImagesEdition] = useState([])
    const [events, setEvents] = useState([])
    const [routes, setRoutes] = useState([])
    const [sponsors, setSponsors] = useState([])

    const [editionData, setEditionData] = useState({
        id: '',
        name: '',
        events:[],
        eventId: '',
        details:'',
        sponsors: [],
        sponsorId: '',
        routes: [],
        routeId:[],
        imageLink: '',
        images: [],
        isCurrent: ''
    })

    useEffect(() =>{
        getImage()
    },[])

    async function getImage(){
        await axios.get('http://localhost:8080/images/getAdminPH', {params:{sectionPH: type}}).then(response => {
            setImage(response.data);
        })
    }

    const handleFieldChange = () => (event) => {
        const value = event.target.value;
        setEditionData({
            ...editionData,
            [event.target.id]: value
        });
    }

    const onAddEdition = () => () =>{
        imagesEdition.push(editionData.imageLink);
        setEditionData({
            ...editionData, 
            imageLink: ''
        })
    }

    const handleChangeMultipleEvents  = () => (event) =>  {
        const value = event.target.value;
        setEvents(
          typeof value === 'string' ? value.split(',') : value,
        );
        console.log(events)
    };

    const handleChangeMultipleRoutes  = () => (event) =>  {
        const value = event.target.value;
        setRoutes(
          typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChangeMultipleSponsors = () => (event) => {
        const value = event.target.value;
        setSponsors(
          typeof value === 'string' ? value.split(',') : value,
        );
    };

    const info = 'En esta sección puede agregar una nueva edición'
    const headerTitle = 'Agregar Edición'
    const col1 = [{id:'name', name:'Nombre', type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => handleFieldChange()},
                    {id:'events', value:events, name:'Eventos', type: SELECTMULTIPLE, isRequired:true, helperText:'', onChange: () => handleChangeMultipleEvents()},
                    {id:'details', name:'Detalles', type: TEXT_AREA, isRequired:true, helperText:'', onChange: () => handleFieldChange()}
                ]
        const secondCol = [
            {id:'sponsors', value:editionData.sponsors, name:'Patrocinadores', type: SELECTMULTIPLE, isRequired:true, helperText:'', onChange: () => handleChangeMultipleSponsors()},
            {id:'routes', value:routes, name:'Rutas', type: SELECTMULTIPLE, isRequired:true, helperText:'', onChange: () => handleChangeMultipleRoutes()},           
            {id:'imageLink', value:routes, name:'Foto', type: MULTIPLE, isRequired:true, helperText:'', onChange: () => handleFieldChange(), onAdd: () => onAddEdition(), saved: imagesEdition},
            {id:'isCurrent', name:'Edicion Actual', type: CHECKBOX, isRequired:true, helperText:'', onChange: () => handleFieldChange()},
            ]
    return(
        <Box className={stylesContainer.displayColumn}>
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
            <GenericRoundButton Icon={<></>} backgroundColor='#2a1463' text='guardar' iconPosition={NONE} onClick={()=>{}}/>
        </Box>
    )
}