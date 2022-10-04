import React from 'react';
import styles from '../CSS/text.module.css';

function TextPart(props){

    const body = props.data.body;
    function replaceWithBr() {
    
        const remplazo = body.replaceAll('\\n', "<br />")
        return remplazo
    }
    const className =  props.isPrincipal ? styles.editionTitle : styles.pastEditionsTitle;
    return(
        <div style={{display:'flex', flexDirection:'column', width:'550px', marginRight: '5%'}}>
            <a className={styles.editionPrimaryTitle} > { props.data.title } </a>
            {props.isPrincipal ? <a className={styles.editionTitle} > La Edición: </a> : <></>} 
            <a className={className} > { props.data.editionTitle } </a>
            <a className={styles.body} dangerouslySetInnerHTML={{__html: replaceWithBr()}} /> {/* agregar la cantidad de lineas del parrafo como param*/}
        </div>
    )
}

export default TextPart;