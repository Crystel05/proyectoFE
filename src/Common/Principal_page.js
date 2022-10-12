import * as React from 'react';
import { Avatar, Box } from "@mui/material";
import Tabs from './tabs.js'
import Contacts from './contacts';
import { ArtCityTourButton } from '../Buttons/art_city_tour_button';
import { ReservationButton } from './button_reservation.js';

import stylesButton from '../CSS/button.module.css'


function PrincipalPage() {
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
}

export default PrincipalPage;