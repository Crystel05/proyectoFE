import React from "react";
import { Box } from '@mui/material';
import stylesContainer from '../../../CSS/container.module.css'
import DataInfo from "./info";

export default function ReservationsForm({fields, margin, right}){
    const marginR = right ? margin : '0'
    return(
        <Box className={stylesContainer.displayColumn} style={{ marginRight: marginR, marginLeft: '10vh', marginTop:'2vh'}}>
            {fields.map((field, index) =>{
                return <DataInfo title={field.title} info={field.info} key={index} />
            })}
        </Box>
    )
}