import TimelineConnector from '@mui/lab/TimelineConnector';
import React from 'react';
import styles from '../CSS/text.module.css';
import Route from './path';
import Participation from './participation'

function MainRoutes(){
    const routes = [
        {
            title: "Davivienda",
            placeName: "Alianza Francesa",
            details: "sobre el lugar sobre el lugar sobre el lugar \n sobre el lugar sobre el lugar sobre el lugarsobre el lugar \n sobre el lugar sobre el lugar sobre el lugar sobre el lugar \n sobre el lugar  sobre el lugar sobre el lugar sobre el lugar\n sobre el lugar sobre el lugar sobre el lugar sobre el lugar sobre el lugar \n",
            color: '#00a8f3'
        },
        {
            title: "Davivienda",
            placeName: "Alianza Francesa",
            details: "sobre el lugar sobre el lugar sobre el lugar \n sobre el lugar sobre el lugar sobre el lugarsobre el lugar \n sobre el lugar sobre el lugar sobre el lugar sobre el lugar \n sobre el lugar  sobre el lugar sobre el lugar sobre el lugar\n sobre el lugar sobre el lugar sobre el lugar sobre el lugar sobre el lugar \n",
            color: '#831885'
        },
        {
            title: "Davivienda",
            placeName: "Alianza Francesa",
            details: "sobre el lugar sobre el lugar sobre el lugar \n sobre el lugar sobre el lugar sobre el lugarsobre el lugar \n sobre el lugar sobre el lugar sobre el lugar sobre el lugar \n sobre el lugar  sobre el lugar sobre el lugar sobre el lugar\n sobre el lugar sobre el lugar sobre el lugar sobre el lugar sobre el lugar \n",
            color: '#648518'
        },
        {
            title: "Davivienda",
            placeName: "Alianza Francesa",
            details: "sobre el lugar sobre el lugar sobre el lugar \n sobre el lugar sobre el lugar sobre el lugarsobre el lugar \n sobre el lugar sobre el lugar sobre el lugar sobre el lugar \n sobre el lugar  sobre el lugar sobre el lugar sobre el lugar\n sobre el lugar sobre el lugar sobre el lugar sobre el lugar sobre el lugar \n",
            color: '#2a1885'
        },
        {
            title: "Davivienda",
            placeName: "Alianza Francesa",
            details: "sobre el lugar sobre el lugar sobre el lugar \n sobre el lugar sobre el lugar sobre el lugarsobre el lugar \n sobre el lugar sobre el lugar sobre el lugar sobre el lugar \n sobre el lugar  sobre el lugar sobre el lugar sobre el lugar\n sobre el lugar sobre el lugar sobre el lugar sobre el lugar sobre el lugar \n",
            color: '#c556b8'
        }
    ]

    return(
        <div style={{display:'flex', flexDirection:'column'}}>
            <a className={styles.routesTitle} >Rutas</a>
            {routes.map((route, index) => {
                return(
                    <Route key={index} {...route}/>
                )
            })}
            <Participation/>
        </div>
    )
}

export default MainRoutes;