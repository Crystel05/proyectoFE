import { Box } from "@mui/system";
import React from "react";
import ArtCityTourButton from "../ReusableComponents/Buttons/art_city_tour_button";

import textStyle from '../CSS/text.module.css'
import stylesButton from '../CSS/button.module.css'
import stylesContainer from '../CSS/container.module.css'

import DivederAddress from "./dividerAddress";
import Fields from "../ReusableComponents/Fields/fields";
import GenericRoundButton from "../ReusableComponents/Buttons/generic_button";
import { NONE } from "../Util/constants";
import { Navigate } from "react-router-dom";

const CreateAccount = () => {

    const fieldsColumn1 = [
        {name:'Cedula', type: 'text', isRequired:true, onChange: () => handleFieldChange(userData.Cedula)},
        {name:'Nombre', type:'text', isRequired:true, onChange: () => handleFieldChange(userData.Nombre)},
        {name:'Correo', type:'text', isRequired:true, onChange: () => handleFieldChange(userData.Correo)}, 
        {name:'Contraseña', type:'text', isRequired:true, onChange: () => handleFieldChange(userData.Contrasenna)}
    ]
    const fieldsColumn2 = [
        {name:'Edad', type: 'select', isRequired:true, onChange: () => handleFieldChange(userData.Edad)},
        {name:'Apellidos', type: 'text', isRequired:true, onChange: () => handleFieldChange(userData.Apellidos)}, 
        {name:'Número de teléfono', type: 'text', isRequired:true, onChange: () => handleFieldChange(userData.NumeroTelefono)}, 
        {name:'Confirmación de contraseña', type: 'text', isRequired:true, onChange: () => handleFieldChange(userData.ConfirmacionContrasenna)}
    ]
    const addressCol1 = [
        {name:'Provincia', type: 'text', isRequired:true, onChange: () => handleFieldChange(userData.Provincia)}, 
        {name:'Cantón', type: 'text', isRequired:true, onChange: () => handleFieldChange(userData.Cantón)}
    ]
    const addressCol2 = [
        {name:'Distrito', type: 'text', isRequired:true, onChange: () => handleFieldChange(userData.Distrito)}, 
        {name:'Señas',type: 'text', isRequired:true, onChange: () => handleFieldChange(userData.Sennas)}
    ]

    const userData = {
        Cedula: '',
        Nombre: '',
        Correo: '',
        Contrasenna: '',
        Edad: '',
        Apellidos: '',
        NumeroTelefono: '',
        ConfirmacionContrasenna: '',
        Provincia: '',
        Cantón: '',
        Distrito: '',
        Sennas: ''
    }

    const handleFieldChange = (userDataField) => (event) => {
        userDataField = event.target.value;
    }

    const createAccount = () => (event) => {
        console.log("CREANDO CUENTA"); //llamar al axios para crear cuenta
    }

    const returnToLogin = () => (event) => {
        Navigate("/");
    }

    return(
        <Box className={ stylesContainer.displayColumn }>
            <div className={ stylesContainer.displayRow } >
                <h1 className={ `${textStyle.kronaText} ${textStyle.editionTitle} ${textStyle.marginsCreateAccount}` } >Crear cuenta</h1>
                <ArtCityTourButton className={stylesButton.principalCreateUser} goToPage={() => returnToLogin()}/>
            </div>
            <div            
                className={ `${stylesContainer.displayRow} ${stylesContainer.center}` }
            >
                <div className={ stylesContainer.spaceBetween } >
                    <Fields fields={fieldsColumn1}/>
                </div>
                
                <Fields fields={fieldsColumn2}/>
            </div> 
            <DivederAddress/>
            <Box className={ `${stylesContainer.displayRow} ${stylesContainer.center}` }>
                <div className={ stylesContainer.spaceBetween } >
                    <Fields fields={addressCol1}/>
                </div>
                <Fields fields={addressCol2}/>
            </Box>
            <GenericRoundButton Icon={<></>} backgroundColor='#ce1717' text='Crear Cuenta' iconPosition={NONE} onClick={() => createAccount()}/>
        </Box>
    )
}

export default CreateAccount;