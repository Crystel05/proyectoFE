import React from 'react';
import placeHolder from '../Images/placeHolder.png'
import styles from '../CSS/images.module.css'
import CurrentEdition from './current_edition';
import Sponsors from './sponsors';
import { Divider } from '@mui/material';
import EditionsThroughYears from './editions';


function EditionPage(){ //agregar la imagen a los parámetros 
    const params = {
        title:"ART CITY TOUR MAYO 2022",
        editionTitle:"Chepe de Moda",
        body:"Segundo Art City Tour presencial del 2022\narticulados en tres rutas: Davivienda Costa Rica,\nNORTE y Bodega Navarro Correas.\n\n"
        + "15 espacios culturales de la ciudad de San José\nnos esperan el próximo jueves 12 de mayo con la\nselección de actividades que han preparado para\n\"Chepe de moda\".",
         isPrincipal: true
    }

    return(
        <div> 
            <img src={placeHolder} alt="edicionActual" className={styles.editionPrincipal}/>
            <CurrentEdition {...params} /> {/* agarrar esto de un endpoint */}
            <Sponsors />
            <Divider sx={{ borderBottomWidth: 10 }} style={{ marginBotton:'10%', background: '#ce1717'}} />
            <EditionsThroughYears />
        </div>
    )
}

export default EditionPage;