import React from 'react';
import styles from '../CSS/text.module.css';
import stylesImg from '../CSS/images.module.css'
import stylesContainer from '../CSS/container.module.css'
import { Box } from '@mui/material';

function Sponsors(sponsors){
    const sponsorsList = sponsors.sponsors;
    return(
        //style={{ marginLeft:'5%', marginRight:'5%', marginBotton: '5%', marginTop:'5%', display: 'flex', flexDirection:'column'}}
        <div className={  `${stylesContainer.displayColumn} ${stylesContainer.sponsors}`}>
            <a className= { `${styles.editionTitle} ${styles.kronaText}` } style={{marginBottom:'3%'}}> Patrocinan </a>
            <Box className={`${stylesContainer.displayRow} ${stylesContainer.centerContent}`}>
                {sponsorsList.map((sponsor, index) =>{
                    return  <img key={index} className={stylesImg.sponsors} src={sponsor.image.drivePath} alt={sponsor.name}/>
                })}
            </Box>
        </div>
    )
}

export default Sponsors;