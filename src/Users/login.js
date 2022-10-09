import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Login = () =>{

    const [image, setImage] = useState("");

    async function getImage(){
        await axios.get('http://localhost:8080/images/getLogin').then(response => {
            setImage(response.data);
        })
    }

    useEffect(() =>{
        getImage();
    }, [])

    return(
        <Box>
            <img src={ image } alt='login' />
            <Box>

            </Box>
        </Box>
    )
}

export default Login;