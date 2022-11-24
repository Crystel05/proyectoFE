import { Box } from '@mui/material'
import React from 'react'
import textStyles from '../CSS/text.module.css'
import GenericRoundButton from '../ReusableComponents/Buttons/generic_button';
import { NONE } from '../Util/constants';


export default function PlanDetails({data, isPay, setPrice, setMembership, readOnly}){

    const info = data.details;
    const benefits = info.split("-");
    const finalPrice = '$ ' + data.price + "/mes";
    const border = data.border ? 3 : 0
    const buttonText = data.button;

    const startPay = () => (event) =>{
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
                {!readOnly && <GenericRoundButton Icon={<></>} backgroundColor='#2a1463' text={buttonText} iconPosition={NONE} onClick={()=>startPay()}/>}
            </div>
            <img src={data.photo.drivePath} alt={data.photo.name} style={{ width:'300px', height: '400px', marginLeft:'auto' }}/>
        </Box>
    )
}