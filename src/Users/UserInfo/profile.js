import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Box } from '@mui/material';
import stylesContainer from '../../CSS/container.module.css'
import Fields from "../../ReusableComponents/Fields/fields";
import { NONE, TEXT_AREA, TEXT_FIELD } from "../../Util/constants";
import stylesText from '../../CSS/text.module.css';
import GenericRoundButton from "../../ReusableComponents/Buttons/generic_button";

export default function ProfileSection(){
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        lastName: '',
        age: '',
        identification: '',
        phoneNumber:'',
        address: ''
    })

    useEffect(() => {
        setUserData ({
            name: (JSON.parse(sessionStorage.getItem('userData'))).name,
            email: (JSON.parse(sessionStorage.getItem('userData'))).email,
            lastName: (JSON.parse(sessionStorage.getItem('userData'))).lastName,
            age: (JSON.parse(sessionStorage.getItem('userData'))).age,
            identification: (JSON.parse(sessionStorage.getItem('userData'))).identification,
            phoneNumber:(JSON.parse(sessionStorage.getItem('userData'))).phoneNumber,
            address: (JSON.parse(sessionStorage.getItem('userData'))).address
        })
    },[])

    
    const handleFieldChange = () => (event) => {
        const value = event.target.value;
        setUserData({
            ...userData,
            [event.target.id]: value
        });
    }

    const handleSave = () => () => { 
        const userId = (JSON.parse(sessionStorage.getItem('userData'))).id;        
        const url = 'http://localhost:8080/itinerary/createFullItinerary?userId='+userId;

        //saveItinerary(url);
    }


    
    const col1 = [
        {name:'Nombre', value: userData.name, type: TEXT_FIELD, isRequired:false, helperText:'', onChange: () => handleFieldChange()},
        {name:'Correo', value: userData.email, type: TEXT_FIELD, isRequired:false, helperText:'', onChange: () => handleFieldChange()},
        {name:'Edad', value: userData.age, type: TEXT_FIELD, isRequired:false, helperText:'', onChange: () => handleFieldChange()},
        {name:'Dirección', value: userData.address, type: TEXT_AREA, isRequired:false, helperText:'', onChange: () => handleFieldChange()},
    ]
    const col2 = [
        {name:'Apellidos', value: userData.lastName, type: TEXT_FIELD, isRequired:false, helperText:'', onChange: () => handleFieldChange()},
        {name:'Cédula', value: userData.identification, type: TEXT_FIELD, isRequired:false, helperText:'', onChange: () => handleFieldChange()},
        {name:'Número de teléfono', value: userData.phoneNumber, type: TEXT_FIELD, isRequired:false, helperText:'', onChange: () => handleFieldChange()},
    ]
    return(
        <Box className={stylesContainer.displayColumn} sx={{ marginLeft: '10vh' }}>
            <Box className={stylesContainer.displayRow}>
                <h1 className={ `${stylesText.editionTitle} ${stylesText.kronaText}` } style={{ marginLeft: '1vh', marginTop: '5vh'}} > HOLA NOMBRE </h1>
            </Box>
            <Box className={stylesContainer.displayRow} style={{margin:'auto', marginTop: '5vh'}}>
                <Box style={{ marginRight:'5vh' }}>
                    <Fields fields={col1} />
                </Box> 
                <Fields fields={col2} />
            </Box>
            <GenericRoundButton Icon={<></>} backgroundColor='#ce1717' text='Guardar Cambios' iconPosition={NONE} onClick={() => handleSave()}/>
        </Box>
    )
}