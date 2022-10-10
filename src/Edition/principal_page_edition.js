import React, { useEffect, useState } from 'react';
import styles from '../CSS/images.module.css'
import CurrentEdition from './current_edition';
import Sponsors from './sponsors';
import { Divider } from '@mui/material';
import EditionsThroughYears from './editions';
import axios from 'axios';
import { months } from '../Util/constants';


function EditionPage(){
    const [edition, setEdition] = useState({});
    const [body, setBody] = useState("");
    const [principalImage, setPrincipalImage] = useState({})
    const [imgCurrentEdition, setImgCurrentEdition] = useState({})
    const [sponsors, setSponsors] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/edition/getCurrent')
        .then(response =>{
            setEdition(response.data);
            setBody(response.data.details);
            setImgCurrentEdition(response.data.images[1]);
            setPrincipalImage(response.data.images[0])
            setSponsors(response.data.sponsors);
        })
    }, [])


    const dateDate = new Date(edition.date);
    const params = {
        title:"ART CITY TOUR " + months[dateDate.getMonth()+1] + " " + dateDate.getFullYear(),
        editionTitle: edition.name,
        body: body,
        isPrincipal: true,
    }
    return(
        <div> 
            <img src={principalImage.drivePath} alt={principalImage.name} className={styles.editionPrincipal}/>
            <CurrentEdition edition={params} image ={imgCurrentEdition} />
            <Sponsors sponsors = {sponsors} />
            <Divider sx={{ borderBottomWidth: 10 }} style={{ marginBotton:'10%', background: '#ce1717' }} />
            <EditionsThroughYears />
        </div>
    )
}

export default EditionPage;