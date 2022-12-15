import { colors } from '../Util/constants';
import React, { useEffect, useState } from 'react';
import styles from '../CSS/text.module.css';
import Route from './path';
import Participation from './participation'
import axios from 'axios';

function MainRoutes({setValue}){

   const [routes, setRoutes] = useState([]);

   const usedColors = [];

    function setColor(){
        let color = colors[(Math.floor(Math.random() * 10))];
    
        if(usedColors.length === routes.length)
            usedColors = [];
        
        while(usedColors.includes(color)){
            color = colors[(Math.floor(Math.random() * 10))];
        }
        usedColors.push(color);  
        return color;
    }

    useEffect(() =>{
        axios.get(HOST + '/routes/getAll')
        .then(response =>{
            setRoutes(response.data);
        })
    }, [])
    return(
        <div style={{display:'flex', flexDirection:'column'}}>
            <a className={styles.routesTitle} >Rutas</a>
            {routes.map((route, index) => {
                return(
                    <Route key={index} route={route} color={setColor()}/>
                )
            })}
            <Participation setValue={setValue} />
        </div>
    )
}

export default MainRoutes;