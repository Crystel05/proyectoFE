import React from "react";
import { Box } from '@mui/material';
import stylesContainer from '../CSS/container.module.css'
import stylesImg from '../CSS/images.module.css'

export default function New({value}){
    return(
        <Box className={stylesContainer.displayRow} >
            <img src={value.image} style={{ height: '100px'}}/>
            <Box className={stylesContainer.displayColumn}>
                <a> {value.title} </a>
                <a> {value.details} </a>
            </Box>
        </Box>
    )
}