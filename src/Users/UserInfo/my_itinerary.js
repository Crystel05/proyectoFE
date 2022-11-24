import React, { useEffect, useState } from "react";
import { Box } from '@mui/material';
import { months } from '../../Util/constants';
import HeaderUserInfo from "./header";
import MyItinerary from "../../Itinerary/my_itinerary";
import axios from "axios";

export default function MyItinerarySection() {

    const [itinerary, setItinerary] = useState();
    const [events, setEvents] = useState([]);
    const [edition, setEdition] = useState({});

    async function getItineraryByUser() {
        const userId = (JSON.parse(sessionStorage.getItem('userData'))).id;
        const url = 'http://localhost:8080/itinerary/getByUserId?userId=' + userId;

        await axios.get(url).then(response => {
            setItinerary(response.data);
            setEvents(response.data.events);
        })
    }

    async function getCurrentEdition() {
        axios.get('http://localhost:8080/edition/getCurrent')
        .then(response =>{
            setEdition(response.data);
        })
    }

    useEffect(() => {
        getItineraryByUser();
        getCurrentEdition();
    }, []);

    const date = new Date(edition.date+ 'T00:00'); 
    const myItinerary ={title: edition.name, date: date.getDate()+' '+months[date.getMonth()]+' '+date.getFullYear(), list: itinerary}
    const subtitle = myItinerary.date + ": " + myItinerary.title;
    return (
        <Box sx={{ marginLeft: '10vh' }}>
            <HeaderUserInfo title='Mi Itinerario' subtitle={subtitle}/>
            <MyItinerary setEvents={setEvents} events = {events} />
        </Box>
    )
}