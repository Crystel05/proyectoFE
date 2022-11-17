import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import styles from '../CSS/button.module.css'
import textStyles from '../CSS/text.module.css'

export default function PlanDetails({props, isPay, setPrice}){

    const info = props.benefits;
    const benefits = info.split("-");
    const finalPrice = '$ ' + props.price + "/mes";
    function startPay(){
        setPrice(props.price)
        isPay(true)
    }
    
    return(
        <Box sx={{ p: 2, border: 3, borderColor: '#2a1463', borderRadius: '7px' }} style={{ marginLeft:'5%', marginTop: '5%', display:'flex', flexDirection:'row', width:'50%' }}>
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
                <button className={styles.webSite} style={{ marginTop:'15%' }}  onClick={() => startPay()}> 
                    Unirse
                </button>
            </div>
            <img src={props.image.drivePath} alt={props.image.name} style={{ width:'300px', height: '400px', marginLeft:'auto' }}/>
        </Box>
    )
}