import React from "react";
import styles from '../../CSS/carousel.module.css'
const CarouselItem = ({ slide }) =>{
    return(
        <div className={styles.carouselItem}>
            <img src={slide}/>
        </div>
    )
}

export default CarouselItem;