import { Timeline, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses, TimelineConnector  } from "@mui/lab";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Event from "./event";

export default function MyItinerary(){

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/event/getAll').then(response =>{
            setEvents(response.data);
        })
    }, [])

    const dots = new Array(5).fill(0);

    function handleDelete(event){ 
        console.log(event) // llamar endpoint que elimine elemento de lista
    }

    return(
        <Box sx={{
            overflowY:'auto', 
            maxHeight: '70vh'
        }}>
            <Timeline sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0
                },
                }}
            >
                {events.map((itinerary, index) =>{
                    return (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot 
                                    sx={{
                                        backgroundColor: '#009cc1'
                                    }}
                                /> 
                                {dots.map((_, index) => {
                                    return(
                                        <TimelineConnector 
                                        key={index}
                                        sx={{
                                            marginTop: '2px'
                                        }} 
                                    />
                                    )
                                })}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Event event={itinerary} handleDelete={handleDelete}/>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </Box>
    )
}