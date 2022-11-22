import React from "react";
import { Box } from '@mui/material';
import stylesContainer from '../../CSS/container.module.css'
import stylesText from '../../CSS/text.module.css';

export default function HeaderUserInfo({title, subtitle}){
    return(
        <Box>
            <h1 className={ `${stylesText.editionTitle} ${stylesText.kronaText}` } style={{ marginLeft: '1vh', marginTop: '5vh'}} > {title} </h1>
            <Box
                sx={{
                    backgroundColor: '#ce1717',
                    marginTop:'15px',
                    color: 'white',
                    cursor:'pointer',
                    borderRadius:'50px',
                    width: '100vh'
                }}
                className={stylesContainer.displayRow}
            >
                <a style={{ marginLeft: '2vh' }}> {subtitle} </a>
            </Box>
        </Box>
    )
}