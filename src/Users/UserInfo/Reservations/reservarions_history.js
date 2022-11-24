import React, { useEffect, useState } from "react";
import HeaderUserInfo from "../header";
import { Box } from '@mui/material';
import { months } from '../../../Util/constants';
import { Timeline, TimelineContent, TimelineDot} from "@mui/lab";
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import HistoryPart from "./history_reservation";
import axios from "axios";

export default function HistoryReservations({userId}){

    const [record, setRecord] = useState([]);
    
    async function getUserRecord() {
        const url = 'http://localhost:8080/reservation/getRecordByUser?userId=' + userId;
        axios.get(url).then(response =>{
            setRecord(response.data);
            console.log(response.data);
        })
    }

    useEffect(() => {
        getUserRecord();
    }, []);


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
                {record.map((reservation, index) => {
                    const date = new Date(reservation.date+ 'T00:00');
                    const fullDate = date.getDate()+' '+months[date.getMonth()]+' '+date.getFullYear();
                    const data = {
                        title: fullDate + ": " + 'editionName',
                        startingPoint: 'Punto de Inicio',
                        info:  reservation.place.name,
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