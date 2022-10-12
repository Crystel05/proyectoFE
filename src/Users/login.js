import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from '../CSS/images.module.css'
import textStyle from '../CSS/text.module.css'
import stylesButton from '../CSS/button.module.css'
import stylesContainer from '../CSS/container.module.css'
import stylesShapes from '../CSS/shapes.module.css'

import { ArtCityTourButton } from '../Buttons/art_city_tour_button';
import { makeStyles, withStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom';
import Fields from './fields';
import { NONE, PASSWORD, TEXT_FIELD } from '../Util/constants';
import GenericRoundButton from '../Buttons/generic_button';

const Login = ({ setAuthorization }) =>{

    const navigate = useNavigate();
    const [image, setImage] = useState("");
    const [incorrect, setIncorrect] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isCorrect, setIsCorrect] = useState();
    
    const fields = [
        {name:'Correo', type: TEXT_FIELD, isRequired:true, onChange: () => handleEmailChange()},
        {name:'Contraseña', type: PASSWORD, isRequired:true, onChange: () => handlePasswordChange()}
    ]

    async function getImage(){
        await axios.get('http://localhost:8080/images/getLogin').then(response => {
            setImage(response.data);
        })
    }

    async function getLogin(){
        console.log("GET LOGIN")
        const link = 'http://localhost:8080/user/login?email='+email+'&password='+password;
        console.log(email, " ", password, " credenciales")
        await axios.get(link)
        .then(response => {
            setIsCorrect(response.data);
        })
    }

    function goToApplication () {
        navigate("/application");
    }

    function createAccount(){
        navigate("/createAccount");
    }

    const login = () => (event) => {
        setIncorrect("")
        getLogin();
        if(isCorrect){
            setAuthorization();
            goToApplication();
        }else{
            if(event.detail >= 2)
                setIncorrect("El usuario o la contraseña ingresados con incorrectos");
        }
    }

    const handleEmailChange = () => (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = () => (event) =>{
        setPassword(event.target.value);
    }

    useEffect(() =>{
        getImage();
    }, [])

    return(
        <Box className={ stylesContainer.displayRow } >
            <img src={ image } alt='login' className={styles.login} />
            <hr className={ stylesShapes.verticalDivider }/>
            <Box className={ `${stylesContainer.displayColumn} ${stylesContainer.centerTop}` } >
                <Box className={ stylesContainer.displayColumn } >
                    <ArtCityTourButton className={stylesButton.principalLogin}/>
                    <h1 className={ `${textStyle.kronaText} ${textStyle.editionTitle} ${textStyle.margins}` }> Inicio de Sesión </h1>
                </Box>
                <Fields fields={ fields }/>
                <a className={ `${textStyle.kronaText} ${textStyle.link}` } > ¿Olvidó su contraseña </a>
                <GenericRoundButton Icon={<></>} backgroundColor='#ce1717' text='Iniciar Sesión' iconPosition={NONE} onClick={() => login()}/>
                <a className={ `${textStyle.kronaText}  ${textStyle.crearCuentaLink}` } onClick={() => createAccount()}> Crear Cuenta </a>
                <a className={ `${textStyle.kronaText} ${textStyle.incorrectUser}` } > {incorrect} </a>
            </Box>
        </Box>
    )
}

export default Login;