import React, { useEffect, useState } from 'react';
import placeHolder from '../Images/placeHolder.png'
import styles from '../CSS/images.module.css'
import CurrentEdition from './current_edition';
import Sponsors from './sponsors';
import { Divider } from '@mui/material';
import EditionsThroughYears from './editions';
import get from '../Connection/api';
import axios from 'axios';


function EditionPage(){ //agregar la imagen a los parámetros 
    const months = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:8080/edition/getById?id=121')
        .then(response =>{
            setDate(response.data.date);
            setTitle(response.data.name);
            setDetails(response.data.details);
        });
    }, [])

    const dateDate = new Date(date);
    const params = {
        title:"ART CITY TOUR " + months[dateDate.getMonth()+1] + " " + dateDate.getFullYear(),
        editionTitle: title,
        body: details,
         isPrincipal: true
    }

    return(
        <div> 
            <img src={placeHolder} alt="edicionActual" className={styles.editionPrincipal}/>
            <CurrentEdition {...params} /> {/* agarrar esto de un endpoint */}
            <Sponsors />
            <Divider sx={{ borderBottomWidth: 10 }} style={{ marginBotton:'10%', background: '#ce1717'}} />
            <EditionsThroughYears />
        </div>
    )
}

export default EditionPage;