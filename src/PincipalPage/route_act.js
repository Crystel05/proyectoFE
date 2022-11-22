import React from "react";
import { Box } from '@mui/material';
import stylesContainer from '../CSS/container.module.css'
import textStyle from '../CSS/text.module.css'

export default function RouteACT({route, color}){
    return(
        <Box className={stylesContainer.displayColumn} style={{marginRight:'3vh'}}> 
            <hr style={{
                color: color,
                backgroundColor: color,
                height: 10,
                width: '80%',
                height: '7px',
                borderColor : color,
                marginLeft: '0px',
                marginRight: '1%',
                borderTopRightRadius: '10px',
                borderBottomRightRadius: '10px',
                border: 'none'
            }}/>
            <img src={route.pic} style={{width:'300px', height:'250px'}}/>
            <a className={textStyle.kronaText}>{route.name}</a>
            <hr style={{
                color: color,
                backgroundColor: color,
                height: 10,
                width: '80%',
                height: '7px',
                borderColor : color,
                marginLeft: '0px',
                marginRight: '1%',
                borderTopRightRadius: '10px',
                borderBottomRightRadius: '10px',
                border: 'none'
            }}/>
        </Box>
    )
}