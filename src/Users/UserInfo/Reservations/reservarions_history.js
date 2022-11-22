import React from "react";
import HeaderUserInfo from "../header";
import { Box } from '@mui/material';
import { Timeline, TimelineContent, TimelineDot} from "@mui/lab";
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import HistoryPart from "./history_reservation";

export default function HistoryReservations({userIdentification}){
    //llamar a un endpoint que traiga el historial de reservaciones de un usuario
    const history =[{date: '20 Mayo 2022', title: 'Chepe de Moda', startingPoint: 'Museo Nacional'}, {date: '20 Mayo 2022', title: 'Chepe de Moda', startingPoint: 'Museo Nacional'}]
    const dots = new Array(25).fill(0);

    return(
        <Box>
            <HeaderUserInfo title='Historial de reservaciones'/>
            <Timeline sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0
                },
                }}
            >
                {history.map((reservation, index) =>{
                    const data = {
                        title: reservation.date + ": " + reservation.title,
                        startingPoint: 'Punto de Inicio',
                        info:  reservation.startingPoint,
                    }
                    
                    return (
                        
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot sx={{backgroundColor: '#ce1717'}}/> 
                                {dots.map((_, index) => {
                                    return(
                                        <TimelineConnector
                                            key={index}
                                            sx={{
                                                backgroundColor: 'black',
                                                marginTop: '3px'
                                            }} 
                                        />
                                    )
                                })}
                            </TimelineSeparator>
                            <TimelineContent>
                                <HistoryPart data={data}/>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </Box>
        
    )
}