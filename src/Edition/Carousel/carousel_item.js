import React from "react";
import styles from '../../CSS/carousel.module.css'
const CarouselItem = ({ slide }) =>{
    return(
        <div className={styles.carouselItem}>
            <img src={slide} style={{width:'800px', height:'250px'}} />
        </div>
    )
}

export default CarouselItem;