import * as React from 'react';
import { Avatar, Box } from "@mui/material";
import Tabs from './tabs.js'
import Contacts from './contacts';
import { ArtCityTourButton } from './button_principal_page';
import { ReservationButton } from './button_reservation.js';

function PrincipalPage() {
    return ( 
        <div >
            <Box style={{display:'flex', justifyContent: 'space-between'}}>
                <ArtCityTourButton/>
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