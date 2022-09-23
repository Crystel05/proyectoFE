import { Box } from '@mui/material';
import React from 'react';
import styles from '../CSS/text.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CircleIcon from '@mui/icons-material/Circle';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Contacts = () =>{
    return(
        <Box style={{backgroundColor: '#f8f6ee', marginTop: '5%', display:'flex', flexDirection:'row'}}>
            <div style={{display:'flex', flexDirection:'column', marginLeft:'auto', marginRight:'auto'}} >
                <a className={styles.contactsTitle} >Encuéntranos en</a>
                <a className={styles.contactsNames}>
                    <InstagramIcon/> Instagram   
                </a>
                <a className={styles.contactsNames}>
                    <FacebookIcon/> Facebook
                </a>
                
            </div>
            <div style={{display:'flex', flexDirection:'column', marginLeft:'auto', marginRight:'auto', marginBottom:'2%'}} >
                <a className={styles.contactsTitle} >Aplicaciones</a>
                <a className={styles.contactsNames} ><CircleIcon/> App Guía</a>
                <a className={styles.contactsNames} ><CircleIcon/> Art City Passport</a>
                <a className={styles.contactsNames} ><CircleIcon/> Gam Cultural</a>
            </div>
            <div style={{display:'flex', flexDirection:'column', marginLeft:'auto', marginRight:'auto'}} >
                <a className={styles.contactsTitle} >Contacto</a>
                <a className={styles.contactsNames} ><CallIcon/> +506 8888 8888</a>
                <a className={styles.contactsNames} ><EmailIcon/> artcitytour@act.com</a>
            </div>
        </Box>
    )
}

export default Contacts;