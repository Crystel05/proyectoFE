import React from "react";
import { Box } from '@mui/material';
import stylesContainer from '../CSS/container.module.css'
import textStyle from '../CSS/text.module.css'

export default function BigNews({news}){ //style={{ height:'40vh', width:'60vh' }}
    return(
        <Box className={stylesContainer.displayColumn} >
            <a className={`${textStyle.kronaText} ${textStyle.subTitle}`} style={{margin:'auto', width:'40vh' }}>{news.title}</a>
            <img src={news.image} style={{ height: '300px', width: '500px' }} /> 
        </Box>
    )
}