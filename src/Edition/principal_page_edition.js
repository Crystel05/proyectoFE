import React, { useEffect, useState } from 'react';
import styles from '../CSS/images.module.css'
import CurrentEdition from './current_edition';
import Sponsors from './sponsors';
import { Divider } from '@mui/material';
import EditionsThroughYears from './editions';
import axios from 'axios';


function EditionPage(){
    const months = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    const [edition, setEdition] = useState({});
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [sponsors, setSponsors] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/edition/getCurrent')
        .then(response =>{
            setEdition(response.data);
            setBody(response.data.details);
            setImage(response.data.secondImagePath);
            setSponsors(response.data.sponsors);
        })
    }, [])

    const dateDate = new Date(edition.date);
    const params = {
        title:"ART CITY TOUR " + months[dateDate.getMonth()+1] + " " + dateDate.getFullYear(),
        editionTitle: edition.name,
        body: body,
        image: image,
        isPrincipal: true
    }

    return(
        <div> 
            <img src={edition.imagePath} alt="edicionActual" className={styles.editionPrincipal}/>
            <CurrentEdition {...params} />
            <Sponsors sponsors = {sponsors} />
            <Divider sx={{ borderBottomWidth: 10 }} style={{ marginBotton:'10%', background: '#ce1717'}} />
            <EditionsThroughYears />
        </div>
    )
}

export default EditionPage;