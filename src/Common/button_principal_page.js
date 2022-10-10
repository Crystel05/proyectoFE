import React from 'react';
import stylesText from '../CSS/text.module.css'

export const ArtCityTourButton = ({ className }) => {
    return (
        <button 
            className = { className }>
            <p className = { stylesText.principal_small }> 
                ART CITY
            </p>
            <p className = { stylesText.principal_big } > 
                TOUR 
            </p>
        </button> 
    )
}