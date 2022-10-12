import React from 'react';
import stylesText from '../CSS/text.module.css'

export const ArtCityTourButton = ({ className }) => {
    return (
        <button 
            className = { className }>
            <p className = { `${stylesText.kronaText} ${stylesText.principal_small}` }> 
                ART CITY
            </p>
            <p className = { `${stylesText.kronaText} ${stylesText.principal_big}` } > 
                TOUR 
            </p>
        </button> 
    )
}