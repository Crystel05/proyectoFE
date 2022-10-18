import * as React from 'react';
import { Avatar, Box } from "@mui/material";
import Tabs from './tabs.js'
import Contacts from './contacts';
import ArtCityTourButton from '../ReusableComponents/Buttons/art_city_tour_button';
import stylesButton from '../CSS/button.module.css'
import { Navigate } from 'react-router-dom';
import GenericRoundButton from '../ReusableComponents/Buttons/generic_button.js';
import { NONE } from '../Util/constants.js';


function PrincipalPage({ authorization }) {

    const reserve = () => (event) =>{
        console.log("RESERVAR CUPO")
    }

    if(authorization){
        return ( 
            <div >
                <Box style={{display:'flex', justifyContent: 'space-between'}}>
                    <ArtCityTourButton className={stylesButton.principal}/>
                    <Box style={{display:'flex', justifyContent: 'center', marginTop: '3%', marginRight: '3%'}}>
                        <GenericRoundButton Icon={<></>} backgroundColor='#ce1717' text='Reserva de cupo' iconPosition={NONE} onClick={() => reserve()} marginRight='1vh' />
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