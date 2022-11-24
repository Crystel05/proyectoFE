import React from "react";
import { Box } from '@mui/material';
import stylesContainer from '../../../CSS/container.module.css'
import ReservationsForm from "./form";
import { useState } from "react";
import { useEffect } from "react";
import { Divider } from '@mui/material';
import HistoryReservations from "./reservarions_history";
import axios from "axios";

export default function Reservation({data}){

    const [row1, setRow1] = useState([]);
    const [row2, setRow2] = useState([]);
    const [reservations, setReservations] = useState([]);

    async function getCurrentEdition() {
        axios.get(`http://localhost:8080/reservation/getActiveByUser?userId=${(JSON.parse(sessionStorage.getItem('userData'))).id}`)
        .then(response =>{
            setReservations(response.data);
        })
    }
    

    // function createFields(data){
    //     const fieldsRow1 = []
    //     const fieldsRow2 = []
    //     fieldsRow1.push({title:'Punto de Inicio', info: data.reservation.startinPoint})
    //     fieldsRow1.push({title:'Cédula', info: data.userInfo.identification})
    //     fieldsRow1.push({title:'Nombre', info: data.userInfo.name})
    //     fieldsRow1.push({title:'Correo', info: data.userInfo.mail})

    //     fieldsRow2.push({title:'Edad', info:data.userInfo.age})
    //     fieldsRow2.push({title:'Apellidos', info: data.userInfo.lastName})
    //     fieldsRow2.push({title:'Teléfono', info: data.userInfo.phone})

    //     setRow1(fieldsRow1)
    //     setRow2(fieldsRow2)
        
   // }

    useEffect(()=>{
        //createFields(data)
        getCurrentEdition();
    },[])
    
    
    return(
        <Box>
           
            {reservations.map((reservation, index) =>{
                    const fieldsRow1 = []
                    const fieldsRow2 = []
                    fieldsRow1.push({title:'Punto de Inicio', info: reservation.puntoInicial})
                    fieldsRow1.push({title:'Cédula', info: reservation.identification})
                    fieldsRow1.push({title:'Nombre', info: reservation.name})
                    fieldsRow1.push({title:'Correo', info: reservation.email})
            
                    fieldsRow2.push({title:'Edad', info: reservation.age})
                    fieldsRow2.push({title:'Apellidos', info: reservation.lastName})
                    fieldsRow2.push({title:'Teléfono', info: reservation.phoneNumber})
                    const data = {
                        title: reservation.date + ": " + reservation.editionName,
                        startingPoint: reservation.puntoInicial,
                        info:  reservation.startingPoint,
                    }
                
                    return (
                        <div>
                            <Box className={stylesContainer.displayRow}>
                                <ReservationsForm fields={fieldsRow1}/>
                                <ReservationsForm fields={fieldsRow2} margin='15vh' right={true} />
                            </Box>
                            <Divider />
                        </div>
                    )
                })}
            <Divider />
            <HistoryReservations userIdentification={data.userInfo.identification}/>
        </Box>
    )
}