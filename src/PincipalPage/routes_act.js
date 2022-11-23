  import React from "react";
import { Box } from '@mui/material';
import stylesContainer from '../CSS/container.module.css'
import RouteACT from "./route_act";
import textStyle from '../CSS/text.module.css'
import { colors } from "../Util/constants";

export default function RoutesACT(){
    //llamar un endpoint 
    const rutas = [{name: 'Nombre Ruta', pic: 'https://drive.google.com/uc?id=1NWSlUfLWhb2JgNqrCCTtxfmzvU1-_4S7'},{name: 'Nombre Ruta', pic: 'https://drive.google.com/uc?id=1NWSlUfLWhb2JgNqrCCTtxfmzvU1-_4S7'},{name: 'Nombre Ruta', pic: 'https://drive.google.com/uc?id=1NWSlUfLWhb2JgNqrCCTtxfmzvU1-_4S7'}]
    const usedColors = [];
    function setColor(){
        let color = colors[(Math.floor(Math.random() * 10))];
    
        if(usedColors.length === rutas.length)
            usedColors = [];
        
        while(usedColors.includes(color)){
            color = colors[(Math.floor(Math.random() * 10))];
        }
        usedColors.push(color);  
        return color;
    }
    return(
        <Box className={stylesContainer.displayColumn}>
            <h1  className={`${textStyle.kronaText} ${textStyle.editionTitle}`} style={{marginLeft:'5%'}}>Rutas</h1>
            <Box className={stylesContainer.displayRow} style={{margin:'auto'}}>
                {rutas.map((route, index)=>{
                    return(
                        <RouteACT key={index} route={route} color={setColor()}/>
                    )
                })}
            </Box>
        </Box>
    )
}