import React from 'react';
import stylesImg from '../CSS/images.module.css'
import TextPart from './textPartEdition';


function CurrentEdition ({ edition, image }) { //agregar la imagen a los parametros 
    return(
        <div style={{display:'flex', flexDirection:'row', marginTop:'5%', justifyContent:'center'}}>
            <TextPart data={edition} isPrincipal={true} />
            <div>
                <img src={image.drivePath}  className={stylesImg.secondSize}/>
            </div>
        </div>
    );
} 

export default CurrentEdition;