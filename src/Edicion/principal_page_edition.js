import React from 'react';
import placeHolder from '../Images/placeHolder.png'
import styles from '../CSS/images.module.css'
import CurrentEdition from './current_edition';
import Sponsors from './sponsors';
import { Divider } from '@mui/material';
import EditionsThroughYears from './editions';


function EditionPage(){ //agregar la imagen a los parámetros 
    const params = {
        title:"Art City Tour Mayo 2022",
        editionTitle:"Chepe de Moda",
        body:"esto es el contenido de la edición gatos gatos gatos \n dfjkhsdjkfhdsjkfjsdhfjkdshj soy un gato misifus \n kdsbk klsdflkdf fkesopwoa"
         + "para hacer lineas más largas de gatos miau miau \n dksdoiej fldisodjk ldiduifj palabras que son grandeeeees \n sdsfsdf",
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