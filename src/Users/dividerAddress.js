import React from "react";
import textStyles from '../CSS/text.module.css'

export default function DivederAddress({isAdmin}){
    const color = isAdmin ? '#2a1463' : '#ce1717'
    const className = isAdmin ? textStyles.addressAdmin : textStyles.address;
    return(
        <div style={{ display:'flex', flexDirection:'row', marginTop:'2vh', marginBottom:'2vh' }}>
            <a className={className}> Dirección </a>
            <hr  style={{
                color: color,
                backgroundColor: color,
                height: '15px',
                width: '85%',
                borderColor : color,
                marginRight:'0',
                borderTopLeftRadius: '25px',
                borderBottomLeftRadius: '25px'
                
            }}/>
        </div>
    )
}