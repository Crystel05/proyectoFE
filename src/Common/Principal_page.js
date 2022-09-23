import * as React from 'react';
import { Avatar, Box, Button } from "@mui/material";
import styles from '../CSS/buttonp.module.css';
import stylesText from '../CSS/text.module.css'
import Tabs from './tabs.js'
import Contacts from './contacts';

function PrincipalPage() {
    return ( 
        <div >
            <Box style={{display:'flex', justifyContent: 'space-between'}}>
                <button 
                    className = { styles.principal } style={{padding:'20px', marginLeft:'50px', marginTop:'20px'}} >
                    <p className = { stylesText.principal_small }> 
                        ART CITY
                    </p>
                    <p className = { stylesText.principal_big } > 
                        TOUR 
                    </p>
                </button>  
                <Box style={{display:'flex', justifyContent: 'center', marginTop: '50px', marginRight: '70px'}}>
                    <button className={styles.reserve_button}>
                        Reserva de cupo
                    </button>
                    <Avatar src="../Images/profilePicPH.png"/>    
                </Box> 
            </Box>
            <Tabs />
            <Contacts />
        </div >
    );
}

export default PrincipalPage;