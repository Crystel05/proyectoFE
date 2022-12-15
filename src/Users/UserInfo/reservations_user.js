import React, { useEffect, useState } from "react";
import { Box } from '@mui/material';
import { months } from '../../Util/constants';
import stylesContainer from '../../CSS/container.module.css'
import HeaderUserInfo from "./header";
import Reservation from "./Reservations/reservation";
import axios from "axios";

export default function ReservationsSection(){
    const [edition, setEdition] = useState({});

    async function getCurrentEdition() {
        axios.get(HOST + '/edition/getCurrent')
        .then(response =>{
            setEdition(response.data);
        })
    }

    useEffect(() => {
        getCurrentEdition();
    }, []);

    const date = new Date(edition.date+ 'T00:00');
    const currentReservation = {date: date.getDate()+' '+months[date.getMonth()]+' '+date.getFullYear(), name: edition.name, startinPoint:'Museo Nacional'}
    const userInfo = {identification:'000000',name:'Crystel', mail:'crysvane05@gamil.com', age:'21', lastName:'Montero', phone:'86558884'}
    const compagnion = [{identification:'121213', name:'Luisa', age:'18', lastName:'Morales'}, {identification:'121213', name:'Juan', age:'18', lastName:'Perez'}]
    
    const data = {reservation: currentReservation, userInfo: userInfo, compagnion: compagnion}
    const subtitle = currentReservation.date + ": " + currentReservation.name
    return(
        <Box className={stylesContainer.displayColumn} sx={{ marginLeft: '10vh' }}>
            <HeaderUserInfo title='Reservaciones Vigentes' subtitle={subtitle} />
            <Reservation data={data}/>
            
        </Box>
    )
}