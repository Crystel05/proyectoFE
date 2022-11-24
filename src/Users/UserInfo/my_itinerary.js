import React, { useEffect, useState } from "react";
import { Box } from '@mui/material';
import HeaderUserInfo from "./header";
import MyItinerary from "../../Itinerary/my_itinerary";
import axios from "axios";

export default function MyItinerarySection() {

    const [itinerary, setItinerary] = useState();
    const [events, setEvents] = useState([]);

    async function getItineraryByUser() {
        const userId = (JSON.parse(sessionStorage.getItem('userData'))).id;
        const url = 'http://localhost:8080/itinerary/getByUserId?userId=' + userId;

        await axios.get(url).then(response => {
            setItinerary(response.data);
            setEvents(response.data.events);
        })
    }

    useEffect(() => {
        getItineraryByUser();
    }, []);

    const myItinerary ={title: 'Chepe de Moda', date: '20 Mayo 2022', list: itinerary}
    const subtitle = myItinerary.date + ": " + myItinerary.title;   // alambrar por ahora porque no lo tenemos en BD
    return (
        <Box sx={{ marginLeft: '10vh' }}>
            <HeaderUserInfo title='Mi Itinerario' subtitle={subtitle}/>
            <MyItinerary setEvents={setEvents} events = {events} />
        </Box>
    )
}