import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Alert, Box, Snackbar } from '@mui/material';
import stylesContainer from '../../CSS/container.module.css'
import Fields from "../../ReusableComponents/Fields/fields";
import { SUCCESS, ERROR, INFO, NONE, TEXT_AREA, TEXT_FIELD } from "../../Util/constants";
import stylesText from '../../CSS/text.module.css';
import GenericRoundButton from "../../ReusableComponents/Buttons/generic_button";
import axios from 'axios';

export default function ProfileSection(){
    const [userData, setUserData] = useState({
        id: '',
        name: '',
        email: '',
        lastName: '',
        age: '',
        identification: '',
        phoneNumber:'',
        address: ''
    })
    const [name, setName] = useState();
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");

    useEffect(() => {
        setUserData ({
            id: (JSON.parse(sessionStorage.getItem('userData'))).id,
            name: (JSON.parse(sessionStorage.getItem('userData'))).name,
            email: (JSON.parse(sessionStorage.getItem('userData'))).email,
            lastName: (JSON.parse(sessionStorage.getItem('userData'))).lastName,
            age: (JSON.parse(sessionStorage.getItem('userData'))).age,
            identification: (JSON.parse(sessionStorage.getItem('userData'))).identification,
            phoneNumber:(JSON.parse(sessionStorage.getItem('userData'))).phoneNumber,
            address: (JSON.parse(sessionStorage.getItem('userData'))).address
        })
        setName((JSON.parse(sessionStorage.getItem('userData'))).name);
    },[])

    
    const handleFieldChange = () => (event) => {
        const value = event.target.value;
        setUserData({
            ...userData,
            [event.target.id]: value
        });
    }

    const handleSave =  ()=> async ()=> {
         
        const body = {
            id: userData.id,
            name: userData.name,
            email: userData.email,
            lastName: userData.lastName,
            age: userData.age,
            identification: userData.identification,
            phoneNumber: userData.phoneNumber,
            address: userData.address
        } 
        await axios.post(HOST + '/user/update', body)
        .then(response => {
            if(response.status === 200){
                if(response.data !== ""){
                    setMessage("La reservación fue registrada exitosamente")
                    setSeverity(SUCCESS)
                    setOpen(true)
                }else{
                    setMessage("Hubo un error creando la reservación")
                    setSeverity(INFO)
                    setOpen(true)
                }
            }else{
                setMessage("Hubo un error guardando el usuario")
                setSeverity(ERROR)
                setOpen(true)
            }
        })
    }
    
    const col1 = [
        {id:'name', name:'Nombre', value: userData.name, type: TEXT_FIELD, isRequired:false, onChange: () => handleFieldChange()},
        {id:'email', name:'Correo', value: userData.email, type: TEXT_FIELD, isRequired:false, onChange: () => handleFieldChange()},
        {id:'age', name:'Edad', value: userData.age, type: TEXT_FIELD, isRequired:false, onChange: () => handleFieldChange()},
        {id:'address', name:'Dirección', value: userData.address, type: TEXT_AREA, isRequired:false, onChange: () => handleFieldChange()},
    ]
    const col2 = [
        {id:'lastName', name:'Apellidos', value: userData.lastName, type: TEXT_FIELD, isRequired:false, onChange: () => handleFieldChange()},
        {id:'identification', name:'Cédula', value: userData.identification, type: TEXT_FIELD, isRequired:false, onChange: () => handleFieldChange()},
        {id:'phoneNumber', name:'Número de teléfono', value: userData.phoneNumber, type: TEXT_FIELD, isRequired:false, onChange: () => handleFieldChange()},
    ]


    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    return(
        <Box className={stylesContainer.displayColumn} sx={{ marginLeft: '10vh' }}>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert severity={severity}>{message}</Alert>
            </Snackbar>
            <Box className={stylesContainer.displayRow}>
                <h1 className={ `${stylesText.editionTitle} ${stylesText.kronaText}` } style={{ marginLeft: '1vh', marginTop: '5vh'}} > Hola {name}!  </h1>
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