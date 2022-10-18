import React from 'react';
import styles from '../CSS/text.module.css';
import stylesContainer from '../CSS/container.module.css'
function TextPart(props){

    const body = props.data.body;

    const className =  props.isPrincipal ? styles.editionTitle : styles.pastEditionsTitle;
    return(
        <div className={ stylesContainer.textPart }>
            <a className={ `${styles.editionPrimaryTitle} ${styles.kronaText}` } > { props.data.title } </a>
            {props.isPrincipal ? <a className={ `${styles.editionTitle} ${styles.kronaText}` } > La Edición: </a> : <></>} 
            <a className={ `${styles.kronaText} ${className}` } > { props.data.editionTitle } </a>
            <a className={styles.body}> {body} </a>
        </div>
    )
}

export default TextPart;