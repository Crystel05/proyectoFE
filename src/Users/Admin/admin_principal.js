import React from "react";
import { Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import ArtCityTourButton from "../../ReusableComponents/Buttons/art_city_tour_button";
import stylesButton from '../../CSS/button.module.css'
import { useState } from "react";
import AdminTabs from "./admin_tabs";
import Contacts from "../../Common/contacts";

export default function AdminApp({ authorization }){
    const [value, setValue] = useState('principal');

    if(authorization){
        return(
            <Box>
                <Box style={{display:'flex', justifyContent: 'space-between'}}>
                    <ArtCityTourButton className={stylesButton.principalAdmin}/>
                    <Box style={{display:'flex', justifyContent: 'center', marginTop: '3%', marginRight: '3%'}}>
                        Administrador
                    </Box> 
                </Box>
                <AdminTabs/>
                <Contacts />
            </Box>
        )
    }else{
        return <Navigate to='/' />
    }
}