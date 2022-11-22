import React from "react";
import { Box } from '@mui/material';
import HeaderUserInfo from "./header";
import MyItinerary from "../../Itinerary/my_itinerary";

export default function MyItinerarySection(){
    //llamar al endpoint del itinerario
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
    const myItinerary ={title: 'Chepe de Moda', date: '20 Mayo 2022', list: myItinineraryList}
    const subtitle = myItinerary.date + ": " + myItinerary.title;
    return (
        <Box sx={{ marginLeft: '10vh' }}>
            <HeaderUserInfo title='Mi Itinerario' subtitle={subtitle}/>
            <MyItinerary />
        </Box>
    )
}