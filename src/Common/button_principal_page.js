import React from 'react';
import styles from '../CSS/button.module.css';
import stylesText from '../CSS/text.module.css'

export const ArtCityTourButton = () => {
    return (
        <button 
            className = { styles.principal } style={{padding:'20px', marginLeft:'3%', marginTop:'2%'}} >
            <p className = { stylesText.principal_small }> 
                ART CITY
            </p>
            <p className = { stylesText.principal_big } > 
                TOUR 
            </p>
        </button> 
    )
}