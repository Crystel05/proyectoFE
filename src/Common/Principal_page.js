import React, { useState } from 'react';
import { Avatar, Box, IconButton } from "@mui/material";
import Tabs from './tabs.js'
import Contacts from './contacts';
import ArtCityTourButton from '../ReusableComponents/Buttons/art_city_tour_button';
import stylesButton from '../CSS/button.module.css'
import { Navigate, useNavigate } from 'react-router-dom';
import GenericRoundButton from '../ReusableComponents/Buttons/generic_button.js';
import { NONE } from '../Util/constants.js';

function PrincipalPage({ authorization }) {

    const navigate = useNavigate();

    const [value, setValue] = useState('principal');
    const reserve = () => (event) =>{
        setValue('reserva')
    }

    const goToPrincipalPage = () => {
        console.log("entra")
        navigate("/application");
        setValue('principal')
    }

    const userInformation = () =>{
        setValue('userInformation')
    }

    if(authorization){
        return ( 
            <div >
                <Box style={{display:'flex', justifyContent: 'space-between'}}>
                    <ArtCityTourButton className={stylesButton.principal} onClick={() => goToPrincipalPage()}/>
                    <Box style={{display:'flex', justifyContent: 'center', marginTop: '3%', marginRight: '3%'}}>
                        <GenericRoundButton Icon={<></>} backgroundColor='#ce1717' text='Reserva de cupo' iconPosition={NONE} onClick={() => reserve()} marginRight='1vh' />
                        <IconButton onClick={() => userInformation()}>
                            <Avatar src="../Images/profilePicPH.png"/>
                        </IconButton>    
                    </Box> 
                </Box>
                <Tabs value={value} setValue={setValue} />
                <Contacts />
            </div >
        );
    }else{
        return <Navigate to='/' />
    }
}

export default PrincipalPage;