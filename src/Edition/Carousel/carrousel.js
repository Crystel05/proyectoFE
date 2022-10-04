import React, { useState } from 'react';
import styles from '../../CSS/carousel.module.css' 
import CarouselIndicators from './carousel_indicators';
import CarouselItem from './carousel_item';

export default function ImageCarousel({ slides }){

    const [currentImg, setCurrentImg] = useState(0);

    const switchIndex = (index) => {
        setCurrentImg(index)
    }

    return(
        <div style={{marginTop:'2%'}} >
            <div className={styles.carousel}>
                <div 
                    className={styles.carouselInner}
                    style={{
                        transform: `translateX(${-currentImg * 100}%)`
                    }}
                >
                    {slides.map((img, index) =>{
                        return(
                           <CarouselItem slide = {img.drivePath}  key={index} /> 
                        )
                    })}
                </div>
                <CarouselIndicators slides={slides} currentIndex={currentImg} switchIndex={switchIndex} />
            </div>
        </div>
    )
}