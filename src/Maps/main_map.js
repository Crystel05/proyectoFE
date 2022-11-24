import React from 'react';
import Map from './map';

export default function MainMap({ width, height, places, setPlaceToShow }){

    //agregar aquí la llamada de axios 
    const placesPlaceHolder = 
    [
        {
            "id": 1,
            "name": "Teatro Nacional",
            "details": "El teatro nacional",
            "latitude": "9.933830",
            "longitude": "-84.077074"
        },
        {
            "id": 2,
            "name": "Museo Nacional",
            "details": "Desde sus primeros afios, el museo se oriental hacia la investigacion cientifica, la educacion, la exhibicion y la defensa del patrimonio cultural y natural.",
            "latitude":"9.9335480",
            "longitude":"-84.068525"
        }
        
    ]
    
     const placeChoice = ((places !== undefined) && (places.length != 0)) ? places:placesPlaceHolder; //Temporal, cambiar mapa de itinerarios, y eliminar placeChoice por prop places
     const placesMapIndex = Math.floor(placeChoice.length/2)
    return(
        <div>
            <Map latitude={placeChoice[placesMapIndex]?.latitude} longitude={placeChoice[placesMapIndex]?.longitude}  places={placeChoice} width={width} height={height} setPlaceToShow={setPlaceToShow}/>
        </div>
    )
}