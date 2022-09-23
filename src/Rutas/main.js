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
            details: "La asociación Alianza Francesa es reconocida de\ninterés público en Costa Rica desde 1984, y forma\nparte de la red de difusión educativa y cultural del\nMinisterio de Asuntos Exteriores de Francia,\nfuncionando en este sentido como socio privilegiado\nde la Embajada de Francia en Costa Rica.\n\n",
            color: '#009CC1'
        },
        {
            title: "Norte",
            placeName: "Galería Nacional",
            details: "La Galería Nacional es todo un referente del arte\nvisual costarricense, convirtiéndose sus exposiciones\nen las más importantes de Costa Rica.\n\n",
            color: '#FFA506'
        },
        {
            title: "Escalante",
            placeName: "Museo Nacional",
            details: "Desde sus primeros años, el museo se orientó hacia la\ninvestigación científica, la educación, la exhibición y la\ndefensa del patrimonio cultural y natural. \n\n",
            color: '#E2368E'
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