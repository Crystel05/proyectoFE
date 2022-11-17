import React from "react";
import textStyle from '../../CSS/text.module.css'
import styles from '../../CSS/images.module.css'
import Box from '@mui/material/Box';

export default function ImageHeaderAdmin({ title, info, image, headerTitle }) {
    return(
        <Box> 
            <article>
                <picture>
                    <source  srcSet={image} />
                    <img src={image} alt="background" className={styles.imageAdmin} />
                </picture>
                <h3 className={ `${textStyle.kronaText} ${textStyle.header}` }> {title} </h3>
                <a className={textStyle.bodyMemberships} > {info} </a>
            </article>
            <h1 className={`${textStyle.kronaText} ${textStyle.editionTitle}`} style={{ marginLeft:'2vh'}} > {headerTitle} </h1>
        </Box>
       
    )
}