import { Box } from '@mui/material'
import React, {useEffect, useState } from 'react'
import styles from '../CSS/button.module.css'
import textStyles from '../CSS/text.module.css'


export default function PlanDetails({data, isPay, setPrice, setMembership}){

    const info = data.benefits;
    const benefits = info.split("-");
    const finalPrice = '$ ' + data.price + "/mes";
    function startPay(){
        setPrice(data.price)
        setMembership(data.id)
        isPay(true)
    }

    return(
        <Box sx={{ p: 2, border: 3, borderColor: '#2a1463', borderRadius: '7px' }} style={{ marginLeft:'5%', marginTop: '5%', display:'flex', flexDirection:'row', width:'50%' }}>
            
            <div style={{ display:'flex', flexDirection:'column', marginRight:'5%' }}>
                <a className={textStyles.membershipTitle}> {data.name} </a>
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
            <img src={data.image.drivePath} alt={data.image.name} style={{ width:'300px', height: '400px', marginLeft:'auto' }}/>
        </Box>
    )
}