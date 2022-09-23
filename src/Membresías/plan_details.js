import { Box } from '@mui/material'
import React from 'react'
import styles from '../CSS/buttonp.module.css'
import textStyles from '../CSS/text.module.css'
import lugar from '../Images/membership.png'

export default function PlanDetails(props){

    const info = props.benefits;
    function replaceWithBr() {
        return info.replace(/\n/g, "<br />")
    }

    return(
        <Box sx={{ p: 2, border: 3, borderColor: '#2a1463', borderRadius: '7px' }} style={{ marginLeft:'5%', marginTop: '5%', display:'flex', flexDirection:'row', width:'50%' }}>
            <div style={{ display:'flex', flexDirection:'column' }}>
                <a className={textStyles.membershipTitle}> {props.name} </a>
                <a className={textStyles.membershiPrice}> {props.price} </a>
                <a dangerouslySetInnerHTML={{__html: replaceWithBr()}} />
                <button className={styles.webSite} style={{ marginTop:'15%' }}> 
                    Unirse
                </button>
            </div>
            <img src={lugar} style={{ width:'300px', height: '400px', marginLeft:'15%' }}/>
        </Box>
    )
}