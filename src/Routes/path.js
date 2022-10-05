import { Box, Button } from '@mui/material';
import React from 'react';
import styles from '../CSS/text.module.css'
import stylesButton from '../CSS/button.module.css'
import map from '../Images/mapaDavivienda.PNG'
import lugar from '../Images/lugarRutas.png'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Route({ route, color }){

    console.log(route, " ROUTE")

    const body = route.places[0].details;
    
    return(
        <div style={{display:'flex', flexDirection:'column', marginTop:'5%'}} >
            <div style={{display:'flex', flexDirection:'row'}} >
                <hr  style={{
                    color: color,
                    backgroundColor: color,
                    height: 10,
                    width: '10%',
                    height: '13px',
                    borderColor : color,
                    marginLeft: '0px',
                    marginRight: '1%',
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px',
                    border: 'none'
                }}/>
                <a className={styles.editionTitle}> {route.name} </a>
            </div>
            <Box style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <img src={map} style={{width:'500px', height:'300px', marginLeft:'5%', marginTop:'1%', marginRight:'2%'}}></img>
                <Box sx={{ p: 2, border: 1, borderColor: 'grey.500', borderRadius: '7px' }} style={{marginTop:'1%', display:'flex', flexDirection:'row', width:'80%', marginRight:'2%'}}>
                    <div style={{display:'flex', flexDirection:'column', marginRight:'5%'}} >
                        <a className={styles.routesNames}> {route.places[0].name} </a>
                        <a className={styles.routesBody}> {body} </a>
                        <Button 
                            endIcon={<ArrowOutwardIcon />} 
                            sx={{
                                width: '120px',
                                height: '32px',
                                backgroundColor:'#2a1463',
                                border: 'none',
                                color: 'white',
                                padding: '10px',
                                textAlign: 'center',
                                fontSize: '10px',
                                marginRight: '10px',
                                marginTop: '3%',
                                cursor: 'pointer',
                                fontFamily: 'Krona One, sans-serif',
                                borderRadius: '15px'
                            }}>
                            Sitio Web
                        </Button>
                    </div>
                    <img src={route.places[0].image.drivePath} alt={route.places[0].image.name} style={{width:'200px', marginLeft:'auto'}} />
                </Box>
            </Box>
        </div>
    )
}

export default Route;