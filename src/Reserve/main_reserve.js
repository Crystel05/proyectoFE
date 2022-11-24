import { Alert, Snackbar, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import stylesContainer from '../CSS/container.module.css'
import styles from '../CSS/text.module.css';
import stylesButton from '../CSS/button.module.css'
import Fields from "../ReusableComponents/Fields/fields";
import GenericRoundButton from "../ReusableComponents/Buttons/generic_button";
import axios from 'axios';
import { ERROR, INFO, NONE, SUCCESS, TEXT_FIELD, SELECT } from "../Util/constants";


export default function MainReserve(){

    const userData = (JSON.parse(sessionStorage.getItem('userData')))
    const [places, setPlaces] = useState([]);
    const [onStep, setOnStep] = useState(false);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");
    const [userInfo, setUserInfo] = useState({
        Cedula: '',
        Edad: '',
        Nombre: '',
        Apellidos: '',
        Correo: '',
        Telefono: '',
        PuntoInicioId: ''
    })

    const steps = ['1 Datos Personales', '2 Agregar Acompañantes', '3 Punto de Inicio', '4 Enviar Formulario']
    const desing = onStep ? stylesButton.stepOn : stylesButton.steps;
    const fieldsCol1 = [
        {id:'Cedula', name:'Cedula', value: userInfo.Cedula, type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => handleFieldChange()},
        {id:'Nombre', name:'Nombre', value: userInfo.Nombre, type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => handleFieldChange()},
        {id:'Correo', name:'Correo', value: userInfo.Correo, type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => handleFieldChange()}
    ]
    const fieldsCol2 = [
        {id:'Edad', name:'Edad', value: userInfo.Edad, type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => handleFieldChange()},
        {id:'Apellidos', name:'Apellidos', value: userInfo.Apellidos, type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => handleFieldChange()},
        {id:'Telefono', name:'Telefono', value: userInfo.Telefono, type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => handleFieldChange()},
    ]
    const field1 = 
        [{name:'Punto de Inicio', value: places[0]?.id, values: places, type: SELECT, isRequired:true, helperText:'', onChange: () => handleFieldChange()}]
    const field2 =
        [{nme:'Ya he asistido al Art City Tour', type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => handleFieldChange()}]
    

    function handleClick(){
        setOnStep(true);
    }

    const handleFieldChange = () => (event) => {
        const value = event.target.value;
        setUserInfo({
            ...userInfo,
            [event.target.id]: value
        });
    }


    useEffect(() =>{
        
        setUserInfo ({
            Cedula: userData.identification,
            Edad: userData.age,
            Nombre: userData.name,
            Apellidos: userData.lastName,
            Correo: userData.email,
            Telefono: userData.phoneNumber,
            PuntoInicioId: '1'
        })
        getAllPlaces();
    },[])

    async function getAllPlaces(){
        await axios.get('http://localhost:8080/places/getAll').then(response =>{
            setPlaces(response.data);
        })
    }


    const createReservation =  ()=> async ()=> {
        
        const body = {
            name: userInfo.Nombre,
            lastName: userInfo.Apellidos,
            email: userInfo.Correo,
            identification: userInfo.Cedula,
            phoneNumber: userInfo.Telefono,
            age: userInfo.Edad,
            isFirstTime: true,
            placeId: userInfo.PuntoInicioId,
            userId: userData.id,
            companion:[
                { identification: '20001',
                    age: '65',
                    name: 'Joseph',
                    lastName: 'Tenorio'
                }
            ]
        }      
        console.log('crea reservacion ', body.phoneNumber); 
        await axios.post('http://localhost:8080/reservation/create', body)
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

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    return (
        <Box className={stylesContainer.displayRow}>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert severity={severity}>{message}</Alert>
            </Snackbar>
            <Box style={{marginTop:'2vh', width:'30vh'}}>
                <a className={`${styles.kronaText} ${styles.editionTitle}`} style ={{marginLeft:'12%'}} > Pasos </a>
                <Stack direction="column" spacing={2} style={{ marginTop:'5%', marginRight:'10%'}}>
                    {steps.map((step, index) => {
                        return( 
                            <button 
                                key={index}
                                className={index === 0 ? stylesButton.stepOn : stylesButton.steps}
                                style={{ marginLeft:'15%' }}
                            // onClick={handleClick()}
                            >
                                {step}
                            </button>
                        )
                    })}
                </Stack>
            </Box>
            <Box style={{marginTop:'2vh', marginLeft:'17vh'}}>
                <a className={`${styles.kronaText} ${styles.editionTitle}`} > Reserva de cupo </a>
                <Box className={stylesContainer.displayRow} style={{ marginTop: '4vh'}}>
                    <div className={ stylesContainer.spaceBetween } >
                        <Fields fields={fieldsCol1} />
                    </div>
                    <Fields fields={fieldsCol2} />
                </Box>
                <TextField variant="standard" />
                <Box className={ stylesContainer.displayRow } style={{ marginTop:'3vh' }} >
                    <div className={stylesContainer.spaceBetween}>
                        <Fields fields={field1} />
                    </div>   
                    <Fields fields={field2} sx={{width:'75vh'}} />
                </Box>
                <div>
                <GenericRoundButton Icon={<></>} text='Enviar Formulario' backgroundColor='#ce1717' iconPosition={NONE} onClick={() => createReservation()} />
                </div>
            </Box>
        </Box>
    )
}