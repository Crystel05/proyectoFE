import * as React from 'react';
import { Avatar, Box } from "@mui/material";
import Tabs from './tabs.js'
import Contacts from './contacts';
import ArtCityTourButton from '../ReusableComponents/Buttons/art_city_tour_button';
import { ReservationButton } from './button_reservation.js';

import stylesButton from '../CSS/button.module.css'
import { Navigate } from 'react-router-dom';


function PrincipalPage({ authorization }) {
    console.log("AUTORIZACIÓN: ", authorization)
    if(authorization){
        return ( 
            <div >
                <Box style={{display:'flex', justifyContent: 'space-between'}}>
                    <ArtCityTourButton className={stylesButton.principal}/>
                    <Box style={{display:'flex', justifyContent: 'center', marginTop: '3%', marginRight: '3%'}}>
                        <ReservationButton/>
                        <Avatar src="../Images/profilePicPH.png"/>    
                    </Box> 
                </Box>
                <Tabs />
                <Contacts />
            </div >
        );
    }else{
        return <Navigate to='/' />
    }
}

export default PrincipalPage;