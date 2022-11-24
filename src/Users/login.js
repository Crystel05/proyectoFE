import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArtCityTourButton from '../ReusableComponents/Buttons/art_city_tour_button';
import { useNavigate } from 'react-router-dom';
import Fields from '../ReusableComponents/Fields/fields';
import { ERROR, INFO, NONE, PASSWORD, SUCCESS, TEXT_FIELD } from '../Util/constants';
import GenericRoundButton from '../ReusableComponents/Buttons/generic_button';

//Stilos
import styles from '../CSS/images.module.css'
import textStyle from '../CSS/text.module.css'
import stylesButton from '../CSS/button.module.css'
import stylesContainer from '../CSS/container.module.css'
import stylesShapes from '../CSS/shapes.module.css'
import { Alert, Snackbar } from '@mui/material'
import { TextFields } from '@mui/icons-material';

const Login = ({ setAuthorizationLogin, passwordChanged, setAuthorizationResetPass }) =>{

    const navigate = useNavigate();
    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");
    const [resetPassword, setResetPassword] = useState(false);
    
    const fields = [
        {name:'Correo', type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => handleEmailChange()},
        {name:'Contraseña', type: PASSWORD, isRequired:true, helperText:'', onChange: () => handlePasswordChange()}
    ]

    async function getImage(){
        await axios.get('http://localhost:8080/images/getLogin').then(response => {
            setImage(response.data);
        })
    }

    async function getLogin(){

        const link = 'http://localhost:8080/user/login?email='+email+'&password='+password;
        await axios.get(link)
        .then(response => {
            setIsCorrect(response.data);
            sessionStorage.setItem('userData', JSON.stringify(response.data));
        })
    }

    async function forgetPasswordRequest(){
        await axios.post(`http://localhost:8080/user/forgetPassword`, null, { params: {
                email
        }})
        .then(response => response.status)
    }

    function goToApplication () {
        navigate("/application");
    }

    function goToApplicationAdmin(){
        navigate("/adminApp");
    }

    function createAccount(){
        navigate("/createAccount");
    }

    function resetPasswordFunction(){
        navigate('/resetPassword');
    }

    const login = () => (event) => {
        if(resetPassword){
            resetPasswordFunction();
        }else{
            getLogin();
            if(event.detail === 1){
                setMessage("Para ingresar use un doble click sobre el botón de iniciar sesión")
                setSeverity(INFO)
            }
            if(isCorrect.name !== 'wrong'){
                if(isCorrect.typeUser === 'Admin'){
                    goToApplicationAdmin();
                }else{
                    goToApplication();
                }
                setAuthorizationLogin();
                
            }else{
                if(event.detail >= 2){
                setMessage("El usuario o la contraseña ingresados son incorrectos. Si olvidó su contraseña haga click sobre \"¿Olvidó su contraseña?\". O si no tiene cuenta haga click sobre \"Crear cuenta\" ")
                    setSeverity(ERROR)
                    setOpen(true)
                }
            }
        }
        
    }

    const handleEmailChange = () => (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = () => (event) =>{
        setPassword(event.target.value);
    }

    function forgetPassword(){
        if(email.length > 0){
            forgetPasswordRequest();
            setResetPassword(true)
            setAuthorizationResetPass()
            setMessage("Se ha enviado un correo al correo ingresado con una contraseña temporal para que pueda realizar el cambio");
            setSeverity(SUCCESS)
        }else{
            setMessage("Ingrese un correo para poder realizar el reseteo de contraseña");
            setSeverity(ERROR)
        }
        setOpen(true);
    }

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    useEffect(() =>{
        getImage();
        if(passwordChanged){
            setMessage("La contraseña fue cambiada exitosamente, utilizela la próxima vez que inicie sesión")
            setSeverity(SUCCESS)
            setOpen(true)
        }
    }, [])

    return(
        <Box className={ stylesContainer.displayRow } >
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert severity={severity}>{message}</Alert>
            </Snackbar>
            <img src={ image } alt='login' className={styles.login} />
            <hr className={ stylesShapes.verticalDivider }/>
            <Box className={ `${stylesContainer.displayColumn} ${stylesContainer.centerTop}` } >
                <Box className={ stylesContainer.displayColumn } >
                    <ArtCityTourButton className={stylesButton.principalLogin} goToPage={() => {}} />
                    <h1 className={ `${textStyle.kronaText} ${textStyle.editionTitle} ${textStyle.margins}` }> Inicio de Sesión </h1>
                </Box>
                <Fields fields={ fields }/>
                <a className={ `${textStyle.kronaText} ${textStyle.link}` }  onClick={() => forgetPassword()} > ¿Olvidó su contraseña? </a>
                <GenericRoundButton Icon={<></>} backgroundColor='#ce1717' text='Iniciar Sesión' iconPosition={NONE} onClick={() => login()}/>
                <a className={ `${textStyle.kronaText}  ${textStyle.crearCuentaLink}` } onClick={() => createAccount()}> Crear Cuenta </a>
            </Box>
        </Box>
    )
}

export default Login;