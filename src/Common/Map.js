import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import { Icon } from 'leaflet';
import '../CSS/mapStyle.css' //muere si le cambio el nombre

export default function Map({ latitude, longitude, places}){

    // const markerIcon = new Icon({  Para cambiar los iconos de los waypoints
    //     iconUrl : '',
    //     iconSize:[25,25]})


    const [popUpLocation, setPopUpLocation] = React.useState(null);

    const setPopUp = (place) => (event) =>{
        setPopUpLocation(place)
    }

    return (
        <MapContainer center = {[latitude, longitude]} zoom = {17}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {places.map (place => (
                <Marker key={place.id} position={[place.latitude, place.longitude]} onClick={() => {setPopUp(place);}}/>
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
