import React from 'react';
import styles from '../CSS/text.module.css';
import sponsor1 from '../Images/davivienda.jpg'
import sponsor2 from '../Images/navarro.jpg'
import stylesImg from '../CSS/images.module.css'
import { Box } from '@mui/material';

function Sponsors(){
    return(
        <div style={{ marginLeft:'3%', marginBotton: '5%', display: 'flex', flexDirection:'column'}}>
            <a className= {styles.editionTitle} style={{marginBottom:'3%'}}> Patrocinan </a>
            <Box style={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                <img className={stylesImg.sponsorsLeft} src={sponsor1} alt="sponsor1"/>
                <img className={stylesImg.sponsorsRight} src={sponsor2} alt="sponsor2"/>
            </Box>
        </div>
    )
}

export default Sponsors;