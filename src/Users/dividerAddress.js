import React from "react";
import textStyles from '../CSS/text.module.css'

export default function DivederAddress(){
    return(
        <div style={{ display:'flex', flexDirection:'row', marginTop:'2vh', marginBottom:'2vh' }}>
            <a className={textStyles.address}> Dirección </a>
            <hr  style={{
                color: '#ce1717',
                backgroundColor: '#ce1717',
                height: '15px',
                width: '85%',
                borderColor : '#ce1717',
                marginRight:'0',
                borderTopLeftRadius: '25px',
                borderBottomLeftRadius: '25px'
                
            }}/>
        </div>
    )
}