import { Timeline, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses, TimelineConnector  } from "@mui/lab";
import { Box } from "@mui/system";
import React from "react";
import Event from "./event";

export default function MyItinerary(){
    const dots = new Array(5).fill(0);
    const myItinineraryList = [
        {place:
            {
                name:'Museo de Jade'
            },
            timeStart: '10:00',
            timeEnd: '11:00'
        },
        {place:
            {
                name:'Museo de Jade'
            },
            timeStart: '10:00',
            timeEnd: '11:00'
        },
        {place:
            {
                name:'Museo de Jade'
            },
            timeStart: '10:00',
            timeEnd: '11:00'
        },
        {place:
            {
                name:'Museo de Jade'
            },
            timeStart: '10:00',
            timeEnd: '11:00'
        },
    ];
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
                {myItinineraryList.map((itinerary, index) =>{
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
                                <Event event={itinerary}/>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </Box>
    )
}