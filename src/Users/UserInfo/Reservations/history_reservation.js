import React from "react";
import styles from '../../../CSS/text.module.css';
import { Box } from '@mui/material';
import DataInfo from "./info";

export default function HistoryPart({data}){
    return(
        <Box> 
            <a className={ `${styles.editionPrimaryTitle} ${styles.kronaText}` } > { data.title } </a>
            <DataInfo title={data.startingPoint} info={data.info}/>
        </Box>
    )
}