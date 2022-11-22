import React from "react";
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LogoutIcon from '@mui/icons-material/Logout';
import { LOGOUT, MEMBERSHIPS, MYITINERARY, PROFILE, RESERVATIONS } from "../../Util/constants";
import stylesContainer from '../../CSS/container.module.css'

export default function UserAction({action, text, setActionSelected, actionSelected}){

    const colorFont = actionSelected === action ? 'white' : 'black'
    const backGroundColor = actionSelected === action ? '#ce1717' : ''

    return(
        <Box
            sx={{
                backgroundColor: backGroundColor,
                marginTop:'15px',
                color: colorFont,
                cursor:'pointer'
            }}
            className={stylesContainer.displayRow}
            onClick={() => setActionSelected(action)}
        >
            <Box sx={{ marginLeft:'2vh' }}>
                {action === PROFILE && <PersonIcon fontSize="50px" />}
                {action === RESERVATIONS && <ConfirmationNumberIcon fontSize="50px" />}
                {action === MYITINERARY && <CalendarMonthIcon fontSize="50px" />}
                {action === MEMBERSHIPS && <MilitaryTechIcon fontSize="50px" />}
                {action === LOGOUT && <LogoutIcon fontSize="50px" />}
            </Box>
            <a style={{ marginLeft: '1vh', fontSize:'13px' }}> {text} </a>
        </Box>
    )
}