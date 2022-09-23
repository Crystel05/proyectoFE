import { Box } from '@mui/material';
import React from 'react';
import styles from '../CSS/text.module.css'
import stylesButton from '../CSS/buttonp.module.css'
import map from '../Images/mapa.jpg'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import lugar from '../Images/lugarRutas.jpeg'
function Route(props){

    const body = props.details;
    function replaceWithBr() {
        return body.replace(/\n/g, "<br />")
    }
    
    const color = props.color;
    return(
        <div style={{display:'flex', flexDirection:'column', marginTop:'5%'}} >
            <div style={{display:'flex', flexDirection:'row'}} >
                <hr  style={{
                    color: color,
                    backgroundColor: color,
                    height: 10,
                    width: '15%',
                    borderColor : color,
                    marginLeft: '0px',
                    marginRight: '1%',
                    borderTopRightRadius: '10%',
                    borderBottomRightRadius: '10%',
                    border: 'none'
                }}/>
                <a className={styles.editionTitle}> {props.title} </a>
            </div>
            <Box style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <img src={map} style={{width:'500px', height:'300px', marginLeft:'5%', marginTop:'1%', marginRight:'2%'}}></img>
                <Box sx={{ p: 2, border: 1, borderColor: 'grey.500', borderRadius: '7px' }} style={{marginTop:'1%', display:'flex', flexDirection:'row'}}>
                    <div style={{display:'flex', flexDirection:'column', marginRight:'5%'}} >
                        <a className={styles.routesNames}> {props.placeName} </a>
                        <a className={styles.routesBody} dangerouslySetInnerHTML={{__html: replaceWithBr()}}/>
                        <button className={stylesButton.webSite}> 
                            Sitio Web 
                            {/*<ArrowOutwardIcon fontSize="small" style={{marginLeft:'5px', marginBotton:0}}/>*/}
                        </button>
                    </div>
                    <img src={lugar} style={{width:'200px'}} />
                </Box>
            </Box>
        </div>
    )
}

export default Route;