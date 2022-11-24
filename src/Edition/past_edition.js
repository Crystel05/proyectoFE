import React from 'react';
import TextPart from './textPartEdition';
import ImageCarousel from './Carousel/carrousel';
import { months } from '../Util/constants';

function PastEdition(props){

    const dateDate = new Date(props.date+ 'T00:00');    
    const data = {
        title: 'Edición ' + months[dateDate.getMonth()] + " " + dateDate.getFullYear(), 
        editionTitle: props.name, 
        body:props.details,
        image: props.secondImagePath
    }
    return(
        <div style={{ display:'flex', flexDirection:'row', marginBottom:'5%'}} >
            <TextPart data = {data} isPrincipal = {false}/>
            <ImageCarousel slides={props.images} />
        </div>
    )

}

export default PastEdition;