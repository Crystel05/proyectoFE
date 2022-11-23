import React from "react";
import { Box } from '@mui/material';
import stylesContainer from '../CSS/container.module.css'
import RouteACT from "./route_act";
import textStyle from '../CSS/text.module.css'
import { colors } from "../Util/constants";

export default function RoutesACT({routes}){
    
    const usedColors = [];
    function setColor(){
        let color = colors[(Math.floor(Math.random() * 10))];
    
        if(usedColors.length === routes.length)
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
                {routes.map((route, index)=>{
                    return(
                        <RouteACT key={index} route={route} color={setColor()}/>
                    )
                })}
            </Box>
        </Box>
    )
}