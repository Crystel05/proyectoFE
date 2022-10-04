import React from 'react';
import stylesImg from '../CSS/images.module.css'
import TextPart from './textPartEdition';


function CurrentEdition ({ edition, image }) { //agregar la imagen a los parametros 
    return(
        <div style={{display:'flex', flexDirection:'row', marginTop:'5%', marginLeft:'5%', marginRight:'5%'}}>
            <TextPart data={edition} isPrincipal={true} />
            <div>
                <img src={image.drivePath}  className={stylesImg.secondSize}/>
            </div>
        </div>
    );
} 

export default CurrentEdition;