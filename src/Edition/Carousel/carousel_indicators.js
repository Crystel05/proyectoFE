import React from "react";
import styles from '../../CSS/carousel.module.css' 

const CarouselIndicators = ({ slides, currentIndex, switchIndex}) =>{
    return (
        <div className={styles.carouselIndicators}>
            {slides.map((_, index) => {
                return (
                    <button 
                        className={currentIndex === index ? styles.carouselIndicatorItemActive : styles.carouselIndicatorItem}
                        onClick={() => switchIndex(index)}
                    />
                )
            })}
        </div>
    )
}

export default CarouselIndicators;