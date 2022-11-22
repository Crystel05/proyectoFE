import React from 'react';
import stylesText from '../../CSS/text.module.css'

export default function ArtCityTourButton ({ className, onClick }) {
    return (
        <button 
            className = { className }
            onClick = { onClick }
        >
            <p className = { `${stylesText.kronaText} ${stylesText.principal_small}` }> 
                ART CITY
            </p>
            <p className = { `${stylesText.kronaText} ${stylesText.principal_big}` } > 
                TOUR 
            </p>
        </button> 
    )
}