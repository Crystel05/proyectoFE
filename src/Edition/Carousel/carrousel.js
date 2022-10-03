import React, { useEffect, useRef, useState } from 'react';
import styles from '../../CSS/carousel.module.css' 
import CarouselControls from './carousel_controls';
import CarouselIndicators from './carousel_indicators';
import CarouselItem from './carousel_item';

export default function ImageCarousel(){
    const slides =[ //cambiar esto por las imágenes del endpoint
        "https://drive.google.com/uc?id=16wM5-hkwb3V2Pkw6r1agkBnFL-yqk_84", 
        "https://drive.google.com/uc?id=1oBCCvjiF44WRDfxCvGsNGXaFQW0NqDFM",
        "https://drive.google.com/uc?id=1rrCxUeAsrOfUwuHjhpIGEisH3m9YoRLr",
        "https://drive.google.com/uc?id=1oBCCvjiF44WRDfxCvGsNGXaFQW0NqDFM", 
        "https://drive.google.com/uc?id=1rrCxUeAsrOfUwuHjhpIGEisH3m9YoRLr"
    ]
    const [currentImg, setCurrentImg] = useState(0);

    const prev = () =>{
        const index = currentImg > 0 ? currentImg - 1 : slides.length -1
        setCurrentImg(index)
    }

    const next = () =>{
        const index = currentImg < slides.length - 1 ? currentImg + 1 : 0
        setCurrentImg(index)
    }

    const switchIndex = (index) => {
        setCurrentImg(index)
    }

    return(
        <div className={styles.container}>
            <div className={styles.carousel}>
                <div 
                    className={styles.carouselInner}
                    style={{
                        transform: `translateX(${-currentImg * 100}%)`
                    }}
                >
                    {slides.map((img, index) =>{
                        return(
                           <CarouselItem slide = {img}  key={index} /> 
                        )
                    })}
                </div>
                <CarouselIndicators slides={slides} currentIndex={currentImg} switchIndex={switchIndex} />
                <CarouselControls prev={prev} next={next} />
            </div>
        </div>
    )
}