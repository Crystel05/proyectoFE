import React, { useState } from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import { Icon } from 'leaflet';
import '../CSS/mapStyle.css' //muere si le cambio el nombre

export default function Map({ latitude, longitude, places, width, height, setPlaceToShow}){

    // const markerIcon = new Icon({  Para cambiar los iconos de los waypoints
    //     iconUrl : '',
    //     iconSize:[25,25]})



    const setPopUp = (index) =>{
        setPlaceToShow(index)
    }


    return (
        <MapContainer center = {[latitude, longitude]} zoom = {14} style={{ width:width, height:height, marginLeft:'100px', marginTop:'1%', marginRight:'2%' }}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {places.map ((place, index) => (
                <Marker key={place.id} position={[place.latitude, place.longitude]} eventHandlers={{
                    click: () => { setPopUp(index) },
                  }}/>
            ))}
        </MapContainer>
    )


}
