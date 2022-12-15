import React from "react";
import Box from '@mui/material/Box';
import stylesContainer from '../../../CSS/container.module.css'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ImageHeaderAdmin from "../header_add_edit";
import { TEXT_AREA, TEXT_FIELD, NONE, CHECKBOX, MULTIPLE, SELECTMULTIPLE, SELECT } from "../../../Util/constants";
import FieldsAdmin from "../../../ReusableComponents/Fields/fields_admin";
import GenericRoundButton from "../../../ReusableComponents/Buttons/generic_button";
import { RepeatOneSharp } from "@mui/icons-material";

export default function AddEditEdition({type}){
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
        isCurrent: ''
    })

    useEffect(() =>{
        getImage()
        getSelects()
    },[])

    async function getImage(){
        await axios.get(HOST + '/images/getAdminPH', {params:{sectionPH: type}}).then(response => {
            setImage(response.data);
        })
    }

    async function getSelects(){
        await axios.get(HOST + '/routes/getAll').then(response => {
            setRoutesList(response.data)
        })
        await axios.get(HOST + '/sponsor/getAll').then(response => {
            setSponsorsList(response.data)
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

    const handleChangeMultipleRoutes  = () => (event) =>  {
        const value = event.target.value;
        setEditionData({
            ...editionData, 
            sponsorId: value
        })
    };

    const onAddSponsor = () => () =>{
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
        sponsors.push(editionData.sponsorId);
    }

    const info = 'En esta sección puede agregar una nueva edición'
    const headerTitle = 'Agregar Edición'
    const col1 = [{id:'name', name:'Nombre', type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => handleFieldChange()},
                    {id:'details', name:'Detalles', type: TEXT_AREA, isRequired:true, helperText:'', onChange: () => handleFieldChange()}
                ]
        const secondCol = [ 
            {id:'sponsors', value:editionData.sponsorId, name:'Patrocinadores', type: SELECTMULTIPLE, isRequired:true, values:sponsorsList, onChange: () => handleFieldChange(), onAdd: () => onAddSponsor(), saved: sponsors},
            {id:'routes', value:editionData.routeId, name:'Rutas', type: SELECTMULTIPLE, isRequired:true, values:routesList, onChange: () => handleChangeMultipleRoutes(),  onAdd: () => onAddRoute(), saved: routes },           
            {id:'imageLink', value:editionData.imageLink, name:'Foto', type: MULTIPLE, content: 'imágenes', isRequired:true, onChange: () => handleFieldChange(), onAdd: () => onAddEdition(), saved: imagesEdition},
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