import { Box } from '@mui/material'
import React, {useEffect, useState } from 'react'
import styles from '../CSS/button.module.css'
import textStyles from '../CSS/text.module.css'
import axios from 'axios';
import { Alert, Snackbar } from '@mui/material'
import { ERROR, INFO, NONE, PASSWORD, SUCCESS, TEXT_FIELD } from '../Util/constants';

export default function PlanDetails(props){

    const info = props.benefits;
    const benefits = info.split("-");
    const finalPrice = '₡ ' + props.price + "/mes";
    const [isCorrect, setIsCorrect] = useState();
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    function getCurrentDate() {
        var today = new Date();
        var day = today.getDate();
        var year = today.getFullYear();
        var month = today.getMonth()+1;

        if (month == 13) {
            month = 1;
        }

        return year+'-'+month+'-'+day;
    }

    function getEndDate() {
        var date = new Date();
        var month = date.getMonth()+2;

        if(month == 13) {
            month = 1; 
        }
        if (month == 14) {
            month = 2;
        }
        
        return date.getFullYear()+'-'+month+'-'+date.getDate();
    }

    async function handleClick(){
        var membershipId = props.id;
        var userId = 3; // de donde se saca?
        var startDate = getCurrentDate();
        var endDate = getEndDate();
        
        const url = 'http://localhost:8080/membership/createMembershipByUser?userId='+userId+'&membershipId='+membershipId+'&startDate='+startDate+'&endDate='+endDate;
        await axios.get(url)
        .then(response => {
            setIsCorrect(response.data);
            if (response.data == 1) {
                setMessage("Usted ha adquirido una membresía correctamente.");
                setSeverity(SUCCESS);
            } else {
                setMessage("Ha ocurrido un error, por favor intente de nuevo.");
                setSeverity(ERROR);
            }
            setOpen(true);
        })
    }

    return(
        <Box sx={{ p: 2, border: 3, borderColor: '#2a1463', borderRadius: '7px' }} style={{ marginLeft:'5%', marginTop: '5%', display:'flex', flexDirection:'row', width:'50%' }}>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert severity={severity}>{message}</Alert>
            </Snackbar>
            <div style={{ display:'flex', flexDirection:'column', marginRight:'5%' }}>
                <a className={textStyles.membershipTitle}> {props.name} </a>
                <a className={textStyles.membershiPrice}> {finalPrice} </a>
                <ul>
                    {benefits.map((benefit, index) =>{
                        return(
                            <li key={index} > {benefit} </li>
                        )
                    })}
                </ul>
                <button 
                    className={styles.webSite}
                    style={{ marginTop:'15%' }}
                    onClick={event => handleClick()} > 
                        Unirse
                </button>
            </div>
            <img src={props.image.drivePath} alt={props.image.name} style={{ width:'300px', height: '400px', marginLeft:'auto' }}/>
        </Box>
    )
}