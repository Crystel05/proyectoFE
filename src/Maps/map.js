import React, { useState } from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import { Icon } from 'leaflet';
import '../CSS/mapStyle.css' //muere si le cambio el nombre

export default function Map({ latitude, longitude, places, width, height, marginLeft, marginTop, marginRight}){

    // const markerIcon = new Icon({  Para cambiar los iconos de los waypoints
    //     iconUrl : '',
    //     iconSize:[25,25]})


    const [popUpLocation, setPopUpLocation] = useState(null);

    const setPopUp = () => (event) =>{
        console.log("ENTRA")
        setPopUpLocation(null)
    }


    return (
        <MapContainer center = {[latitude, longitude]} zoom = {15} style={{ width:width, height:height, marginLeft:marginLeft, marginTop:marginTop, marginRight:marginRight }}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {places.map (place => (
                <Marker key={place.id} position={[place.latitude, place.longitude]} onClick={() => setPopUp()}/>
            ))}
        {popUpLocation && (
        <Popup position={[popUpLocation.latitude, popUpLocation.longitude]} onClose={() => {setPopUpLocation(null);}}>
            <div>
                <h2>{popUpLocation.name}</h2>
            </div>
        </Popup>
        )}
        </MapContainer>
    )


}
