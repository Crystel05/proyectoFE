import React from "react";
import { Box } from '@mui/material';
import stylesContainer from '../CSS/container.module.css'
import New from "./new";

export default function OtherNews(){
    const news =[{title:'Regresa el Art City Tour: Chepe de Moda', image:'https://drive.google.com/uc?id=1NWSlUfLWhb2JgNqrCCTtxfmzvU1-_4S7', details:'dbdsjfd dfdsjfh dsfhjkdsf dsfjhsjdkfhs djfhjsdhf jhdfsjksdhf jdhfjsd jdshfjkds hdsfkjsdf'},
    {title:'Regresa el Art City Tour: Chepe de Moda', image:'https://drive.google.com/uc?id=1NWSlUfLWhb2JgNqrCCTtxfmzvU1-_4S7',details:'dbdsjfd dfdsjfh dsfhjkdsf dsfjhsjdkfhs djfhjsdhf jhdfsjksdhf jdhfjsd jdshfjkds hdsfkjsdf'},
    {title:'Regresa el Art City Tour: Chepe de Moda', image:'https://drive.google.com/uc?id=1NWSlUfLWhb2JgNqrCCTtxfmzvU1-_4S7',details:'dbdsjfd dfdsjfh dsfhjkdsf dsfjhsjdkfhs djfhjsdhf jhdfsjksdhf jdhfjsd jdshfjkds hdsfkjsdf'},
    {title:'Regresa el Art City Tour: Chepe de Moda', image:'https://drive.google.com/uc?id=1NWSlUfLWhb2JgNqrCCTtxfmzvU1-_4S7',details:'dbdsjfd dfdsjfh dsfhjkdsf dsfjhsjdkfhs djfhjsdhf jhdfsjksdhf jdhfjsd jdshfjkds hdsfkjsdf'}]
    return(
        <Box className={stylesContainer.displayColumn}>
            {news.map((value, index) =>{
                return(
                    <New value={value} key={index}/>
                )
            })}
        </Box>        
    )
}