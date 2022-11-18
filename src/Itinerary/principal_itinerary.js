import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { useState } from "react";
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import MyItinerary from "./my_itinerary";
import Places from "./places";
import GenericRoundButton from "../ReusableComponents/Buttons/generic_button";
import ShareIcon from '@mui/icons-material/Share';
import SaveIcon from '@mui/icons-material/Save';
import { START } from "../Util/constants";
import MainMap from "../Maps/main_map";
import containerStyles from '../CSS/container.module.css';

export default function PrincipalItineraryPage(){
    const [value, setValue] = useState('itinerario'); 

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const restaurants = [
        {
            name: 'Lugar 1',
            priceRange: 2,
            calification: 4,
            image:{
                name: 'image',
                pathDrive:'https://drive.google.com/uc?id=1mlDXIWIdMPm0Krv_2O5unrvWP3bwWZ9i'
            }
        },
        {
            name: 'Lugar 1',
            priceRange: 2,
            calification: 4,
            image:{
                name: 'image',
                pathDrive:'https://drive.google.com/uc?id=1mlDXIWIdMPm0Krv_2O5unrvWP3bwWZ9i'
            }
        },
        {
            name: 'Lugar 1',
            priceRange: 2,
            calification: 4,
            image:{
                name: 'image',
                pathDrive:'https://drive.google.com/uc?id=1mlDXIWIdMPm0Krv_2O5unrvWP3bwWZ9i'
            }
        },
        {
            name: 'Lugar 1',
            priceRange: 2,
            calification: 4,
            image:{
                name: 'image',
                pathDrive:'https://drive.google.com/uc?id=1mlDXIWIdMPm0Krv_2O5unrvWP3bwWZ9i'
            }
        },
        {
            name: 'Lugar 1',
            priceRange: 2,
            calification: 4,
            image:{
                name: 'image',
                pathDrive:'https://drive.google.com/uc?id=1mlDXIWIdMPm0Krv_2O5unrvWP3bwWZ9i'
            }
        }
    ]

    const handleShare = () => (event) => {
        console.log("COMPARTIENDO"); //llamar al axios para crear cuenta
    }
    
    const borderIntinerary = value === 'bares' ? '10px' : '0px'
    const borderBarsBottonLeft = value !== 'itinerario' ? '0px' : '10px'
    const borderBarsBottonRight = value === 'restaurantes' ? '10px' : '0px'
    const borderBottonLeftRest = value === 'bares' ? '10px' : '0px'
    const borderBottonRightRest = value === 'entretenimiento' ?  '10px' : '0px'
    const borderBottonLeftEnter = value === 'restaurantes' ?  '10px' : '0px'
    return(
        <Box className={ containerStyles.displayRow }>
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
                            <MyItinerary />
                        </TabPanel>

                        <TabPanel value="bares" style={{padding: 0}} index={2} >
                            <Places places={restaurants} />
                        </TabPanel>

                        <TabPanel value="restaurantes" style={{padding: 0}} index={3} >
                            <Places places={restaurants} />
                        </TabPanel>
                            
                        <TabPanel value="entretenimiento" style={{padding: 0}} index={4} >
                            <Places places={restaurants} />
                        </TabPanel>
                    </TabContext>
                    
                </Box>
                <Box sx={{
                    marginLeft:'7vh'
                }}>
                    <GenericRoundButton Icon={ShareIcon} backgroundColor='#2a1463' text='Compartir' iconPosition={START} onClick={() => handleShare()} marginRight='2vh' />
                    <GenericRoundButton Icon={SaveIcon} backgroundColor='#ce1717' text='Guardar' iconPosition={START} onClick={() => handleShare()} />
                </Box>
            </Box>
            <Box>
                <MainMap width={'100vh'} height={'70vh'} places={"undefined"}/>
            </Box>
        </Box>
    )
}