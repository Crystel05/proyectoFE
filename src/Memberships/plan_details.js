import { Box } from '@mui/material'
import React, {useEffect, useState } from 'react'
import styles from '../CSS/button.module.css'
import textStyles from '../CSS/text.module.css'
import GenericRoundButton from '../ReusableComponents/Buttons/generic_button';
import { NONE } from '../Util/constants';


export default function PlanDetails({data, isPay, setPrice, setMembership}){

    const info = data.benefits;
    const benefits = info.split("-");
    const finalPrice = '$ ' + props.price + "/mes";
    const border = props.border ? 3 : 0
    const buttonText = props.button;
    function startPay(){
        setPrice(data.price)
        setMembership(data.id)
        isPay(true)
    }
    return(
        <Box sx={{ p: 2, border: border, borderColor: '#2a1463', borderRadius: '7px' }} style={{ marginLeft:'5%', marginTop: '5%', display:'flex', flexDirection:'row', width:'50%' }}>
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
                <GenericRoundButton Icon={<></>} backgroundColor='#2a1463' text={buttonText} iconPosition={NONE} onClick={()=>{}}/>
            </div>
            <img src={data.image.drivePath} alt={data.image.name} style={{ width:'300px', height: '400px', marginLeft:'auto' }}/>
        </Box>
    )
}