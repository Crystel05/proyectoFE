import { Box } from "@mui/system";
import React from "react";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import stylesText from '../CSS/text.module.css'
import { Button } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function Place({ place }){
    console.log(place)
    const priceRange = new Array(place.priceRange).fill("$ ");
    const calification = new Array(place.calification).fill(0);
    return(
        <Box sx={{ p: 1, border:2, borderColor:'#f4f3f7', borderRadius:'10px', boxShadow:'1px 3px 18px #a19999' }} style={{ display:'flex', flexDirection:'row', marginTop:'2vh', width:'370px'}} >
            <img src={place.image.pathDrive} style={{ width:'150px', height:'170px' }}/>
            <Box style={{ display:'flex', flexDirection:'column', marginLeft:'1vh' }}>
                <div style={{ display:'flex', flexDirection:'row'}}>
                    <a className={stylesText.placeTitle}> { place.name } </a>
                    <AddCircleOutlineOutlinedIcon style={{ marginTop:'1vh', marginLeft:'130px' }}/>
                </div>
                <div style={{ display:'flex', flexDirection:'row', marginBottom:'2vh' }}>
                    <a> { priceRange } </a>
                    <a style={{ marginLeft:'10px', marginRight:'10px'}}> | </a>
                    {calification.map((_, index) =>{
                        return(
                            <StarOutlinedIcon fontSize="small" key={index} style={{color:'#ccb220' }} />
                        )
                    })}
                </div>
                <Button 
                    endIcon={<ArrowOutwardIcon />} 
                    sx={{
                        width: '120px',
                        height: '32px',
                        backgroundColor:'#2a1463',
                        border: 'none',
                        color: 'white',
                        padding: '10px',
                        textAlign: 'center',
                        fontSize: '10px',
                        marginRight: '10px',
                        marginTop: '3%',
                        cursor: 'pointer',
                        fontFamily: 'Krona One, sans-serif',
                        borderRadius: '15px'
                    }}>
                    Sitio Web
                </Button>
            </Box>
        </Box>
    )
}