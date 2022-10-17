import React from 'react';
import styles from '../CSS/text.module.css';
import stylesImg from '../CSS/images.module.css'
import { Box } from '@mui/material';

function Sponsors(sponsors){
    const sponsorsList = sponsors.sponsors;
    return(
        <div style={{ marginLeft:'5%', marginRight:'5%', marginBotton: '5%', marginTop:'5%', display: 'flex', flexDirection:'column'}}>
            <a className= {styles.editionTitle} style={{marginBottom:'3%'}}> Patrocinan </a>
            <Box style={{ display: 'flex', flexDirection: 'row', justifyContent:'center' }}>
                {sponsorsList.map((sponsor, index) =>{
                    return  <img key={index} className={stylesImg.sponsors} src={sponsor.photo} alt={sponsor.name}/>
                })}
            </Box>
        </div>
    )
}

export default Sponsors;