import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import MyItinerary from "./my_itinerary";
import Places from "./places";
import GenericRoundButton from "../ReusableComponents/Buttons/generic_button";
import SaveIcon from '@mui/icons-material/Save';
import { START } from "../Util/constants";
import MainMap from "../Maps/main_map";
import containerStyles from '../CSS/container.module.css';
import axios from 'axios';
import { ERROR, SUCCESS } from "../Util/constants";
import { Alert, Snackbar } from "@mui/material";

export default function PrincipalItineraryPage(){
    const [value, setValue] = useState('itinerario'); 
    const [events, setEvents] = useState([]);
    const [bar, setBar] = useState([]);
    const [restaurants, setRestaurant] = useState([]);
    const [entertainments, setEntertainment] = useState([]);
    const [generalPlaces, setgeneralPlaces] = useState([]);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    
    useLayoutEffect(() => {
        axios.get('http://localhost:8080/places/getAll').then(response =>{
            setgeneralPlaces(response.data);
        })
        axios.get('http://localhost:8080/event/getAll').then(response =>{
            setEvents(response.data);
        })
        axios.get('http://localhost:8080/places/getAllCategory?category=Bar').then(response => {
            setBar(response.data);
        })
        axios.get('http://localhost:8080/places/getAllCategory?category=Restaurante').then(response => {
            setRestaurant(response.data);
        })
        axios.get('http://localhost:8080/places/getAllCategory?category=Entretenimiento').then(response => {
            setEntertainment(response.data);
        })
    }, [])

    const handleSave = () => () => { 
        const userId = (JSON.parse(sessionStorage.getItem('userData'))).id;        
        const url = 'http://localhost:8080/itinerary/createFullItinerary?userId='+userId;

        saveItinerary(url);
    }

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    async function saveItinerary (url) {
        await axios.post(url, events)
        .then(response => {
            if(response.status === 200){
                setMessage("Su itinerario ha sido guardado exitosamente")
                setSeverity(SUCCESS)
                setOpen(true)
            }else{
                setMessage("Hubo un error guardando el itinerario, intente de nuevo")
                setSeverity(ERROR)
                setOpen(true)
            }
        })
    }
    
   
    const borderIntinerary = value === 'bares' ? '10px' : '0px'
    const borderBarsBottonLeft = value !== 'itinerario' ? '0px' : '10px'
    const borderBarsBottonRight = value === 'restaurantes' ? '10px' : '0px'
    const borderBottonLeftRest = value === 'bares' ? '10px' : '0px'
    const borderBottonRightRest = value === 'entretenimiento' ?  '10px' : '0px'
    const borderBottonLeftEnter = value === 'restaurantes' ?  '10px' : '0px'

    return(
        <Box className={ containerStyles.displayRow }>
            {console.log(generalPlaces, 'useEffect')}
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert severity={severity}>{message}</Alert>
            </Snackbar>
            <Box sx={{ widht:'fit-content'}}>
                <Box sx={{ p: 1, border:2, borderColor:'#f4f3f7', borderRadius:'10px', boxShadow:'1px 3px 18px #a19999' }} style={{ marginTop:'5vh', width:'430px', marginLeft:'5vh' }}>
                    <TabContext value={value} >
                        <Box sx={{ borderColor: 'divider' }} >
                            <TabList
                                    onChange={handleChange} 
                                    style={{ fontSize:'13px' }}
                                    TabIndicatorProps={{
                                        hidden: true
                                    }}
                                    sx={{
                                        '& button.Mui-selected': {backgroundColor: 'white', color: 'black', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'},
                                    }}
                                >
                                <Tab sx={{
                                    backgroundColor:'#2a1463',
                                    color: 'white',
                                    borderTopLeftRadius: '10px',
                                    borderBottomRightRadius: borderIntinerary,
                                    marginRight:'2px'
                                }} 
                                label="Mi itinerario" value="itinerario" />
                                <Tab  
                                    sx={{
                                        backgroundColor:'#2a1463',
                                        color: 'white',
                                        borderBottomLeftRadius: borderBarsBottonLeft,
                                        borderBottomRightRadius: borderBarsBottonRight,
                                        marginRight:'2px'
                                    }} 
                                    icon={<LocalBarIcon />} 
                                    value="bares" />
                                <Tab 
                                    sx={{
                                        backgroundColor:'#2a1463',
                                        color: 'white',
                                        borderBottomLeftRadius: borderBottonLeftRest,
                                        borderBottomRightRadius: borderBottonRightRest,
                                        marginRight:'2px'
                                    }} 
                                    icon={<RestaurantIcon />}
                                    value="restaurantes" />
                                <Tab 
                                    sx={{
                                        backgroundColor:'#2a1463',
                                        color: 'white',
                                        borderTopRightRadius: '10px',
                                        borderBottomLeftRadius: borderBottonLeftEnter,
                                        marginRight:'2px'
                                    }} 
                                    icon={<LocalMoviesIcon />}
                                    value="entretenimiento" />
                            </TabList>
                        </Box>
                        <TabPanel value="itinerario" style={{padding: 0}} index={1} >
                            <MyItinerary setEvents={setEvents} events = {events} />
                        </TabPanel>

                        <TabPanel value="bares" style={{padding: 0}} index={2} >
                            <Places places={bar} />
                        </TabPanel>

                        <TabPanel value="restaurantes" style={{padding: 0}} index={3} >
                            <Places places={restaurants} />
                        </TabPanel>
                            
                        <TabPanel value="entretenimiento" style={{padding: 0}} index={4} >
                            <Places places={entertainments} />
                        </TabPanel>
                    </TabContext>
                    
                </Box>
                <Box sx={{
                    marginLeft:'7vh'
                }}>
                    <GenericRoundButton Icon={SaveIcon} backgroundColor='#ce1717' text='Guardar' iconPosition={START} onClick={() => handleSave()} />
                </Box>
            </Box>
            <Box style={{marginTop:'5vh'}}>
                {console.log(generalPlaces)}
                <MainMap width={'100vh'} height={'70vh'} places={generalPlaces}/>
            </Box>
        </Box>
    )
}