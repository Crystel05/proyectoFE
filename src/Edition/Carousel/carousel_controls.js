import React from "react";
import styles from '../../CSS/carousel.module.css'

const CarouselControls = ({ prev, next }) =>{
    return (
        <div>
            <button 
                className={styles.carouselLeftControl}
                onClick={prev}
            >
                Prev
            </button>
            <button 
                className={styles.carouselRigthControl}
                onClick={next}
            >
                Next
            </button>
        </div>
    )
}

export default CarouselControls;