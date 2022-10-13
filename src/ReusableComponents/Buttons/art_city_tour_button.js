import React from 'react';
import stylesText from '../../CSS/text.module.css'

export default function ArtCityTourButton ({ className, goToPage }) {
    return (
        <button 
            className = { className }
            onClick = {goToPage()}
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