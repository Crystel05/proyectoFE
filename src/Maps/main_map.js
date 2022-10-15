import React from 'react';
import Map from './map';

export default function MainMap({ width, height }){

    //agregar aquí la llamada de axios 
    const placesPlaceHolder = 
    [
        {
            "id": 1,
            "name": "Teatro Nacional",
            "details": "El teatro nacional",
            "latitude": "9.906723",
            "longitude": "-83.683026"
        },
        {
            "id": 2,
            "name": "Museo Nacional",
            "details": "Desde sus primeros afios, el museo se oriental hacia la investigacion cientifica, la educacion, la exhibicion y la defensa del patrimonio cultural y natural.",
            "latitude":"9.903987",
            "longitude":"-83.687725"
        }
    ]
    return(
        <Map latitude={9.9046} longitude={-83.6835}  places={placesPlaceHolder} width={width} height={height}/>
    )
}