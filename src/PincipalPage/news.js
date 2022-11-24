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

export default function News({ news }) {

    const newBig = news[0];

    const handleVisit = (link) => () => {
        window.open(link);
    }

    return (
        <Box className={stylesContainer.displayColumn}>
            <h1 className={`${textStyle.kronaText} ${textStyle.editionTitle}`} style={{ marginLeft: '5%' }} >Noticias</h1>
            <Box className={stylesContainer.displayRow} sx={{
                margin: 'auto'
            }}>
                <ImageListItem
                    sx={{
                        marginRight: '2vh',
                    }}
                >
                    <img
                        src={newBig?.image?.drivePath}
                        alt={newBig?.title}
                        loading="lazy"
                        style={{ width: '600px', heigth: '406px' }}
                    />
                    <ImageListItemBar
                        sx={{
                            background:
                                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                        }}
                        title={newBig?.title}
                        position="top"
                    />
                </ImageListItem>
                <ImageList
                    cols={1}
                    sx={{
                        width: 600,
                        height: 406,
                        transform: 'translateZ(0)',
                    }}
                    rowHeight={250}
                    gap={1}
                >
                    {news.map((item, index) => {
                        if (index !== 0) {
                            return (
                                <Box className={stylesContainer.displayRow}>
                                    <ImageListItem key={item.image} sx={{ marginBottom: '3vh' }}>
                                        <img
                                            src={item?.image?.drivePath}
                                            alt={item?.title}
                                            loading="lazy"
                                            style={{ width: '230px', height: '20px' }}
                                        />
                                    </ImageListItem>
                                    <Box className={stylesContainer.displayColumn} sx={{ marginLeft: '1vh' }}>
                                        <h1 className={`${textStyle.kronaText} ${textStyle.subTitle}`}> {item.title} </h1>
                                        <a> {item.description} </a>
                                        <GenericRoundButton Icon={CallMadeIcon} backgroundColor='#2a1463' text='Ver' iconPosition={END} onClick={() => handleVisit(item.link)} />
                                    </Box>
                                </Box>
                            );
                        }
                    })}
                </ImageList>
            </Box>
        </Box>
    )
}