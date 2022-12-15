import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ArtCityTourButton from "../ReusableComponents/Buttons/art_city_tour_button";

import textStyle from '../CSS/text.module.css'
import stylesButton from '../CSS/button.module.css'
import stylesContainer from '../CSS/container.module.css'

import DivederAddress from "./dividerAddress";
import Fields from "../ReusableComponents/Fields/fields";
import GenericRoundButton from "../ReusableComponents/Buttons/generic_button";
import { CHECKBOX, ERROR, INFO, NONE, PASSWORD, SUCCESS, TEXT_FIELD } from "../Util/constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, Snackbar } from "@mui/material";
import FieldsAdmin from "../ReusableComponents/Fields/fields_admin";

const CreateAccount = ({isAdmin, isNew, id}) => {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");
    const [checked, setChecked] = useState(false)
    const [userData, setUserData] = useState({
        Cedula: '',
        Nombre: '',
        Correo: '',
        Contrasenna: '',
        Edad: '',
        Apellidos: '',
        NumeroTelefono: '',
        ConfirmacionContrasenna: '',
        Provincia: '',
        Canton: '',
        Distrito: '',
        Sennas: '',
        typeUser: '',
    })

    useEffect(()=>{
        if(!isNew)
            getCurrent()
    }, [])

    async function getCurrent(){
        await axios.get('http://localhost:8080/user/getById',  {params:{id: id}}).then(
            response => {
                if(response.data.typeUser === 'Admin')
                    setChecked(true)
                    setUserData({
                        Cedula: response.data.identification,
                        Nombre: response.data.name,
                        Correo: response.data.email,
                        Contrasenna: response.data.password,
                        Edad: response.data.age,
                        Apellidos: response.data.lastName,
                        NumeroTelefono: response.data.phoneNumber,
                        ConfirmacionContrasenna: response.data.password,
                        Provincia: response.data.address,
                        Canton: response.data.address,
                        Distrito: response.data.address,
                        Sennas: response.data.address,
                        typeUser: response.data.typeUser
                })
            }
        )
    }

    const handleChecked =  (event) =>{
        setChecked(event.target.checked)
    }


    const needFields = isAdmin && !isNew;

    const fieldsColumn1 = [
        {id:'Cedula', name:'Cedula', value: userData.Cedula, type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()},
        {id:'Nombre', name:'Nombre', value:userData.Nombre, type:TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()},
        {id:'Correo', name:'Correo', value:userData.Correo, type:TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()}, 
        {id:'Contrasenna', name:'Contraseña', value:userData.Contrasenna, type:PASSWORD, isRequired:true, onChange: () => handleFieldChange()}
    ]

    const fieldsColumn1AdminUpdate = [
        {id:'Cedula', name:'Cedula', value: userData.Cedula, type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()},
        {id:'Nombre', name:'Nombre', value:userData.Nombre, type:TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()},
        {id:'Correo', name:'Correo', value:userData.Correo, type:TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()}, 
    ]
    const fieldsColumn2 = [
        {id:'Edad', name:'Edad', value:userData.Edad, type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()},
        {id:'Apellidos', name:'Apellidos', value:userData.Apellidos, type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()}, 
        {id:'NumeroTelefono', name:'Número de teléfono', value:userData.NumeroTelefono, type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()}, 
        {id:'ConfirmacionContrasenna', name:'Confirmación de contraseña', value:userData.ConfirmacionContrasenna, type: PASSWORD, isRequired:true, onChange: () => handleFieldChange()}
    ]
    const fieldsColumn2AdminUpdate = [
        {id:'Edad', name:'Edad', value:userData.Edad, type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()},
        {id:'Apellidos', name:'Apellidos', value:userData.Apellidos, type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()}, 
        {id:'NumeroTelefono', name:'Número de teléfono', value:userData.NumeroTelefono, type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()}, 
    ]
    const addressCol1 = [
        {id:'Provincia', name:'Provincia', value:userData.Provincia, type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()}, 
        {id:'Canton', name:'Cantón', value:userData.Canton, type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()}
    ]
    const addressCol2 = [
        {id:'Distrito', name:'Distrito', value:userData.Distrito, type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()}, 
        {id:'Sennas', name:'Señas', value:userData.Sennas, type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()}
    ]

    const addressUpdate = [{id:'Provincia', name:'Dirección', value:userData.Distrito, type: TEXT_FIELD, isRequired:true, onChange: () => handleFieldChange()}]
    const typeUser = [{id:'checked', name: 'Es usuario Administrador', type: CHECKBOX, isRequired: false, checked: checked, onChange: handleChecked}]

    const handleFieldChange = () => (event) => {
        const value = event.target.value;
        setUserData({
            ...userData,
            [event.target.id]: value
        });
    }

    function verifyMailFormat(){
        const mailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const mail = userData.Correo
        if(mailRE.test(mail))
            return true;
        return false;
    }

    function verifyPass(){
        if(userData.Contrasenna.length >= 8 && userData.ConfirmacionContrasenna.length >= 8 && userData.Contrasenna === userData.ConfirmacionContrasenna){
            return true;
        }
        return false;
    }

    function notEmpty(){
        if(userData.Apellidos.length > 0 && userData.Canton.length > 0 && userData.Cedula.length > 0 
            && userData.Distrito.length > 0 && userData.Edad.length > 0 && userData.Nombre.length > 0
            && userData.NumeroTelefono.length > 0 && userData.Provincia.length > 0 && userData.Sennas.length > 0){
                return true
        }
        return false;
    }

    async function saveNewAccount(){
        console.log(checked)
        const body = {
            name: userData.Nombre,
            lastName: userData.Apellidos,
            email: userData.Correo,
            password: userData.Contrasenna,
            identification: userData.Cedula,
            phoneNumber: userData.NumeroTelefono,
            address: userData.Provincia + ", " + userData.Canton + ", " + userData.Sennas,
            age: userData.Edad,
            typeUser: checked ? 'Admin' : 'Normal User'
        }
        if(isNew){
        await axios.post(HOST + '/user/create', body)
            .then(response => {
                if(response.status === 200){
                    if(response.data !== ""){
                        setMessage("El usuario fue registrado exitosamente")
                        setSeverity(SUCCESS)
                        setOpen(true)
                    }else{
                        setMessage("Ya existe un usuario con este correo, escoja uno diferente")
                        setSeverity(INFO)
                        setOpen(true)
                    }
                }else{
                    setMessage("Hubo un error guardando el usuario")
                    setSeverity(ERROR)
                    setOpen(true)
                }
            })
        }else{
            await axios.post('http://localhost:8080/user/update', body)
            .then(response => {
                setMessage("El usuario fue actualizado exitosamente")
                setSeverity(SUCCESS)
                setOpen(true)
            }).catch(e => {
                setMessage("Hubo un error guardando el usuario")
                setSeverity(ERROR)
                setOpen(true)
            })
        }
    }
    const createAccount = () => (event) => {
        if(notEmpty()){
            if(verifyMailFormat()){
                if(verifyPass()){
                    saveNewAccount();
                }else{
                    setMessage("La contraseña no es correcta, asegurese que ambas sean iguales y sean mínimo de 8 dígitos")
                    setSeverity(ERROR)
                    setOpen(true)
                }
            }else{
                setMessage("El formato de correo es incorrecto, intente con usuario@mail.com")
                setSeverity(ERROR)
                setOpen(true)
            }
        }else{
            setMessage("Alguno de los campos requeridos para crear el usuario están vacíos")
            setSeverity(ERROR)
            setOpen(true)
        }
    }

    const returnToLogin = () => {
        navigate("/");
    }

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    const Address = () =>{
        if(isAdmin && isNew){
            return(
                <Box className={ `${stylesContainer.displayRow} ${stylesContainer.center}` }>
                    <div className={ stylesContainer.spaceBetween } >
                        <FieldsAdmin fields={addressCol1}/> 
                    </div>
                    <FieldsAdmin fields={addressCol2}/>
                </Box>
            )
        }else if(isAdmin && !isNew){
            return(
                <div>
                    <FieldsAdmin fields={addressUpdate}/>
                </div>
            )
        }else{
            return(
                <Box className={ `${stylesContainer.displayRow} ${stylesContainer.center}` }>
                    <div className={ stylesContainer.spaceBetween } >
                        <Fields fields={addressCol1}/> 
                    </div>
                    <Fields fields={addressCol2}/>
                </Box>
            )
        }
    }
    const text =(isAdmin && !isNew) ? 'Editar usuario' : 'Agregar usuario'
    return(
        <Box className={ stylesContainer.displayColumn }>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert severity={severity}>{message}</Alert>
            </Snackbar>
            <div className={ stylesContainer.displayRow } >
                <h1 className={ `${textStyle.kronaText} ${textStyle.editionTitle} ${textStyle.marginsCreateAccount}` } >{text}</h1>
                {!isAdmin && <ArtCityTourButton className={stylesButton.principalCreateUser} onClick={() => returnToLogin()}/>}
            </div>
            <div            
                className={ `${stylesContainer.displayRow} ${stylesContainer.center}` }
            >
                <div className={ stylesContainer.spaceBetween } >
                    {needFields ? <FieldsAdmin fields={fieldsColumn1AdminUpdate}/> : isAdmin && isNew ? <FieldsAdmin fields={fieldsColumn1} /> : <Fields fields={fieldsColumn1}/> }
                </div>
                {needFields ? <FieldsAdmin fields={fieldsColumn2AdminUpdate}/> : isAdmin && isNew ? <FieldsAdmin fields={fieldsColumn2} /> : <Fields fields={fieldsColumn2}/> }
            </div> 
            <DivederAddress isAdmin={isAdmin}/>
            <Address />
            <div style={{ marginTop: '10px'}}>
                {isAdmin && <FieldsAdmin fields={typeUser}/>}
            </div>
            <GenericRoundButton Icon={<></>} backgroundColor={isAdmin ? '#2a1463' : '#ce1717'} text="guardar" iconPosition={NONE} onClick={() => createAccount()}/>
        </Box>
    )
}

export default CreateAccount;