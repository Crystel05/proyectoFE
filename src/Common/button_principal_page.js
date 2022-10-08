import React from 'react';
import styles from '../CSS/button.module.css';
import stylesText from '../CSS/text.module.css'

export const ArtCityTourButton = () => {
    return (
        <button 
            className = { styles.principal } >
            <p className = { stylesText.principal_small }> 
                ART CITY
            </p>
            <p className = { stylesText.principal_big } > 
                TOUR 
            </p>
        </button> 
    )
}