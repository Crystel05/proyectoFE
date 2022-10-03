import React from 'react';
import stylesImg from '../CSS/images.module.css'
import TextPart from './textPartEdition';


function CurrentEdition (props) { //agregar la imagen a los parametros 
    return(
        <div style={{display:'flex', flexDirection:'row', marginTop:'5%', marginLeft:'5%', marginRight:'5%'}}>
            <TextPart data={props} isPrincipal={true} />
            <div>
                <img src={props.image} alt='currentEditionImg' className={stylesImg.secondSize}/>
            </div>
        </div>
    );
} 

export default CurrentEdition;