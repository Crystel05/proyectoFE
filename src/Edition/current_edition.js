import React from 'react';
import stylesImg from '../CSS/images.module.css'
import TextPart from './textPartEdition';
import styles from '../CSS/container.module.css'

function CurrentEdition ({ edition, image }) { 
    return(
        <div className={ `${styles.displayRow} ${styles.centerTop}` } >
            <TextPart data={edition} isPrincipal={true} />
            <div>
                <img src={image.drivePath}  className={stylesImg.secondSize}/>
            </div>
        </div>
    );
} 

export default CurrentEdition;