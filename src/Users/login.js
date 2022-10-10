import { Box, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from '../CSS/images.module.css'
import textStyle from '../CSS/text.module.css'
import stylesButton from '../CSS/button.module.css'
import stylesContainer from '../CSS/container.module.css'

import { ArtCityTourButton } from '../Common/button_principal_page';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
;


const Login = () =>{

    const navigate = useNavigate();

    const [image, setImage] = useState("");
    const [incorrect, setIncorrect] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isCorrect, setIsCorrect] = useState();

    async function getImage(){
        await axios.get('http://localhost:8080/images/getLogin').then(response => {
            setImage(response.data);
        })
    }

    useEffect(() =>{
        getImage();
    }, [])

    async function getLogin(){
        const link = 'http://localhost:8080/user/login?email='+email+'&password='+password;
        await axios.get(link)
        .then(response => {
            setIsCorrect(response.data);
        })
    }

    function goToApplication () {
        navigate("/application");
    }

    const login = () => (event) =>{
        setIncorrect("");
        getLogin();
        if(isCorrect){
            goToApplication();
        }else{
            console.log(event.details)
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

    function createAccount(){
        navigate("/createAccount");
    }

    return(
        <Box style={{ display:'flex', flexDirection:'row' }} className={stylesContainer.scrolls} >
            <img src={ image } alt='login' className={styles.login} />
            <hr  style={{
                color: '#ce1717',
                backgroundColor: '#ce1717',
                height: '100vh',
                width: '15px',
                borderColor : '#ce1717',
                marginLeft: '0px',
                marginTop: '0px'
            }}/>
            <Box style={{ display:'flex', flexDirection:'column', margin:'auto', marginTop:'10vh'}} >
                <div style={{ margin:'auto', display:'flex', flexDirection:'column' }} >
                    <ArtCityTourButton className={stylesButton.principalLogin}/>
                    <h1 className={textStyle.editionTitle}> Inicio de Sesión </h1>
                </div>
                <Stack
                    component="form"
                    sx={{
                        '& fieldset': {
                            borderRadius: '25px',
                        },
                        width: '75vh',
                    }}
                    spacing={3}
                    >
                    <TextField
                        label="Correo"
                        id="correo"
                        variant="outlined"
                        onChange={handleEmailChange()}
                        sx={{
                            '& label.Mui-focused': {
                                color: '#ce1717',
                              },
                              '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                  borderColor: '#ce1717',
                                },
                              },
                        }}
                    />
                    <TextField
                        label="Contraseña"
                        id="contraseña"
                        variant="outlined"
                        type="password"
                        onChange={handlePasswordChange()}
                        sx={{
                            '& label.Mui-focused': {
                                color: '#ce1717',
                              },
                              '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                  borderColor: '#ce1717',
                                },
                              },
                        }}
                    />
                    </Stack>
                    <a className={textStyle.link} style={{ marginTop:'2vh', marginLeft:'5px' }}> ¿Olvidó su contraseña </a>
                    <Button sx={{
                                width: '200px',
                                height: '32px',
                                backgroundColor:'#ce1717',
                                border: 'none',
                                color: 'white',
                                padding: '10px',
                                textAlign: 'center',
                                fontSize: '15px',
                                margin: 'auto',
                                marginTop: '3%',
                                cursor: 'pointer',
                                fontFamily: 'Open Sans, sans-serif',
                                fontWeight: 'bold',
                                borderRadius: '15px'
                            }}
                            onClick={login()}> 
                            Inciar Sesión 
                        </Button>
                    <a className={textStyle.crearCuentaLink} onClick={() => createAccount()}> Crear Cuenta </a>
                    <a className={textStyle.incorrectUser} > {incorrect} </a>
                </Box>
        </Box>
    )
}

export default Login;