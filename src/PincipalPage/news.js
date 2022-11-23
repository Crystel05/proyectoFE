import React from "react";
import { Box } from '@mui/material';
import stylesContainer from '../CSS/container.module.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import textStyle from '../CSS/text.module.css'
import GenericRoundButton from "../ReusableComponents/Buttons/generic_button.js";
import CallMadeIcon from '@mui/icons-material/CallMade';
import { END } from "../Util/constants";

export default function News(){
 
    const newBig = {title:'Regresa el Art City Tour: Chepe de Moda', image:'https://drive.google.com/uc?id=1NWSlUfLWhb2JgNqrCCTtxfmzvU1-_4S7', featured:true}
    const news =[
        {title:'Regresa el Art City Tour: Chepe de Moda', image:'https://drive.google.com/uc?id=1NWSlUfLWhb2JgNqrCCTtxfmzvU1-_4S7', details:'dbdsjfd dfdsjfh dsfhjkdsf dsfjhsjdkfhs djfhjsdhf jhdfsjksdhf jdhfjsd jdshfjkds hdsfkjsdf'},
        {title:'Regresa el Art City Tour: Chepe de Moda', image:'https://drive.google.com/uc?id=1NWSlUfLWhb2JgNqrCCTtxfmzvU1-_4S7',details:'dbdsjfd dfdsjfh dsfhjkdsf dsfjhsjdkfhs djfhjsdhf jhdfsjksdhf jdhfjsd jdshfjkds hdsfkjsdf'},
        {title:'Regresa el Art City Tour: Chepe de Moda', image:'https://drive.google.com/uc?id=1NWSlUfLWhb2JgNqrCCTtxfmzvU1-_4S7',details:'dbdsjfd dfdsjfh dsfhjkdsf dsfjhsjdkfhs djfhjsdhf jhdfsjksdhf jdhfjsd jdshfjkds hdsfkjsdf'},
        {title:'Regresa el Art City Tour: Chepe de Moda', image:'https://drive.google.com/uc?id=1NWSlUfLWhb2JgNqrCCTtxfmzvU1-_4S7',details:'dbdsjfd dfdsjfh dsfhjkdsf dsfjhsjdkfhs djfhjsdhf jhdfsjksdhf jdhfjsd jdshfjkds hdsfkjsdf'},
        {title:'Regresa el Art City Tour: Chepe de Moda', image:'https://drive.google.com/uc?id=1NWSlUfLWhb2JgNqrCCTtxfmzvU1-_4S7',details:'dbdsjfd dfdsjfh dsfhjkdsf dsfjhsjdkfhs djfhjsdhf jhdfsjksdhf jdhfjsd jdshfjkds hdsfkjsdf'},
        {title:'Regresa el Art City Tour: Chepe de Moda', image:'https://drive.google.com/uc?id=1NWSlUfLWhb2JgNqrCCTtxfmzvU1-_4S7',details:'dbdsjfd dfdsjfh dsfhjkdsf dsfjhsjdkfhs djfhjsdhf jhdfsjksdhf jdhfjsd jdshfjkds hdsfkjsdf'}
    ]

    const handleVisit = () => {
        console.log("ver noticia")
    }
    
    return(
        <Box className={stylesContainer.displayColumn}>
            <h1 className={`${textStyle.kronaText} ${textStyle.editionTitle}`} style={{marginLeft:'5%'}} >Noticias</h1>
            <Box className={stylesContainer.displayRow} sx={{
                    margin:'auto'
                }}>
            <ImageListItem 
                sx={{
                    marginRight:'2vh',
                }}
            >
                <img
                    src={newBig.image}
                    alt={newBig.title}
                    loading="lazy"
                
                />
                    <ImageListItemBar
                        sx={{
                            background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                        }}
                        title={newBig.title}
                        position="top"
                    />
                </ImageListItem>
                <ImageList
                    cols={1} 
                    sx={{
                        width: 500,
                        height: 450,
                        transform: 'translateZ(0)',
                    }}
                    rowHeight={200}
                    gap={1}
                    >
                    {news.map((item) => {
                        return (
                            <Box className={stylesContainer.displayRow}>
                                <ImageListItem key={item.image} sx={{  marginBottom:'50px' }}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <Box className={stylesContainer.displayColumn} sx={{ marginLeft:'1vh' }}> 
                                    <h1 className={ `${textStyle.kronaText} ${textStyle.subTitle}`}> { item.title } </h1>
                                    <a> { item.details } </a>
                                    <GenericRoundButton Icon={CallMadeIcon} backgroundColor='#2a1463' text='Ver' iconPosition={END} onClick={() => handleVisit()}/>
                                </Box>
                            </Box>
                            );
                        })
                    }
                </ImageList>
            </Box>
        </Box>
    )
}