import React from "react";
import { Box } from '@mui/material';
import stylesContainer from '../../../CSS/container.module.css'

export default function DataInfo({title, info}){
    return(
        <Box className={stylesContainer.displayColumn}> 
            <a style={{ fontWeight: 'bold' }}> {title} </a>
            <a style={{ marginBottom:'3vh'}} > {info} </a>
        </Box>
    )
}