import React from "react";
import { Box } from '@mui/material';
import stylesContainer from '../../../CSS/container.module.css'
import ReservationsForm from "./form";
import { useState } from "react";
import { useEffect } from "react";
import { Divider } from '@mui/material';
import DataInfo from "./info";
import Company from "./company";
import HistoryReservations from "./reservarions_history";

export default function Reservation({data}){

    const [row1, setRow1] = useState([]);
    const [row2, setRow2] = useState([]);
    function createFields(data){
        const fieldsRow1 = []
        const fieldsRow2 = []
        fieldsRow1.push({title:'Punto de Inicio', info: data.reservation.startinPoint})
        fieldsRow1.push({title:'Cédula', info: data.userInfo.identification})
        fieldsRow1.push({title:'Nombre', info: data.userInfo.name})
        fieldsRow1.push({title:'Correo', info: data.userInfo.mail})

        fieldsRow2.push({title:'Edad', info:data.userInfo.age})
        fieldsRow2.push({title:'Apellidos', info: data.userInfo.lastName})
        fieldsRow2.push({title:'Teléfono', info: data.userInfo.phone})

        setRow1(fieldsRow1)
        setRow2(fieldsRow2)
        
    }

    useEffect(()=>{
        createFields(data)
    },[])
    
    
    return(
        <Box>
            <Box className={stylesContainer.displayRow}>
                <ReservationsForm fields={row1}/>
                <ReservationsForm fields={row2} margin='15vh' right={true} />
            </Box>
            <Divider />
            <DataInfo title='Acompañantes'/>
            <Company people={data.compagnion}/>
            <HistoryReservations userId={data.userInfo.id} />
        </Box>
    )
}