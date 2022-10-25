import { Box } from "@mui/system";
import React, { useState } from "react";
import Fields from "../ReusableComponents/Fields/fields";
import { ERROR, PASSWORD, SUCCESS, TEXT_FIELD } from "../Util/constants";
import stylesText from '../CSS/text.module.css'
import containerStyles from '../CSS/container.module.css'
import stylesShapes from '../CSS/shapes.module.css'
import GenericRoundButton from "../ReusableComponents/Buttons/generic_button";
import { NONE } from "../Util/constants";
import axios from "axios";
import { Alert, Snackbar } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

export default function ResetPassword({ passwordReset, authorization }){

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [previousPass, setPreviousPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmNewPass, setConfirmNewPass] = useState(""); 
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");

    const fields = [
        {name:'Correo', type: TEXT_FIELD, isRequired:true, helperText:'' , onChange: () => handleFieldChangeMail()},
        {name:'Contraseña Actual', type: PASSWORD, isRequired:true, helperText:'', onChange: () => handlePreviousPassChange()},
        {name:'Contraseña Nueva', type: PASSWORD, isRequired:true, helperText:'Debe tener al menos 8 caracteres', onChange: () => handleFieldChangeNewPass()},
        {name:'Confirme la contraseña', type: PASSWORD, isRequired:true, helperText:'', onChange: () => handleFieldChangeConfirmation()}
    ]

    async function changePasswordRequest(){
        await axios.post(`http://localhost:8080/user/changePassword`, null, { params: {
                email,
                previousPass, 
                newPass
        }})
        .then(response => {
            if(response.data){
                goToLogin()
                passwordReset()
            }
        })
    }

    const handleFieldChangeMail = () => (event) => {
        setEmail(event.target.value);
    }

    const handlePreviousPassChange = () => (event) => {
        setPreviousPass(event.target.value);
    }

    const handleFieldChangeNewPass = () => (event) => {
        setNewPass(event.target.value);
    }

    const handleFieldChangeConfirmation = () => (event) => {
        setConfirmNewPass(event.target.value);
    }

    const changePassword = () => (event) =>{
        if( newPass.length>0 && confirmNewPass.length>0 && newPass === confirmNewPass && newPass.length >= 8){
            changePasswordRequest();
        }else{
            setMessage("Hubo un error cambiando la contraseña, revise que ambas contraseñas sean iguales y cumpla con los requerimientos")
            setSeverity(ERROR)
            setOpen(true)
        }
    }

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    function goToLogin () {
        navigate("/");
    }


    if(authorization){
        return(
            <Box className={ containerStyles.displayColumn }>
                <hr className={ stylesShapes.horizontalDivider }/>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert severity={severity}>{message}</Alert>
                </Snackbar>
                <a className={ `${stylesText.kronaText} ${stylesText.editionTitle} ${stylesText.marginsReset}` }> Crear una nueva contraseña </a>
                <a className={ stylesText.info }> Revise su correo para ver la contraseña temporal que le hemos enviado e ingresela en el campo de "contraseña actual" </a>
                <Fields fields={fields}/>
                <GenericRoundButton Icon={<></>} backgroundColor='#ce1717' text='Cambiar contraseña' iconPosition={NONE} onClick={() => changePassword()}/>
                <hr className={ stylesShapes.horizontalDivider }/>
            </Box>
        )
    }else{
        return <Navigate to='/' />
    }
}