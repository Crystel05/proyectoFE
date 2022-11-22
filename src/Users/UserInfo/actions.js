import React from "react";
import Box from '@mui/material/Box';
import UserAction from "./action";
import { LOGOUT, MEMBERSHIPS, MYITINERARY, PROFILE, RESERVATIONS } from "../../Util/constants";

export default function ActionsBar({setAction, action}){
    
    return(
        <Box 
            sx={{
                backgroundColor:'#fcf3f3',
                borderRadius: '15px',
                width: '200px',
                height: '200px'
            }}
        >
            <UserAction action={PROFILE} text='Perfil' setActionSelected={setAction} actionSelected ={action} />
            <UserAction action={RESERVATIONS} text='Reservaciones' setActionSelected={setAction} actionSelected ={action} />
            <UserAction action={MYITINERARY} text='Itinerarios' setActionSelected={setAction} actionSelected ={action} />
            <UserAction action={MEMBERSHIPS} text='Membresías' setActionSelected={setAction} actionSelected ={action} />
            <UserAction action={LOGOUT} text='Cerrar Sesión' setActionSelected={setAction} actionSelected={action} />
        </Box>
    )
}