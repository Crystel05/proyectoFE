import React from 'react';
import styles from '../CSS/images.module.css';
import ImageSlider from './image_slider';
import TextPart from './textPartEdition';
import placeHolder1 from  '../Images/carPh.png'
import ImageCarousel from './Carousel/carrousel';

function PastEdition(props){

    const months = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    const dateDate = new Date(props.date);
    const data = {
        title: 'Edición ' + months[dateDate.getMonth()] + " " + dateDate.getFullYear(), 
        editionTitle: props.name, 
        body:props.details,
        image: props.secondImagePath
    }
    return(
        <div style={{ display:'flex', flexDirection:'row', marginBottom:'5%'}} >
            <TextPart data = {data} isPrincipal = {false}/>
            {/* <img src={data.image} style={{width:'60%', height:'300px', marginRight:'5%', marginLeft:'5%', marginTop:'1%'}} ></img> */}
            <ImageCarousel slides={props.images} />
        </div>
    )

}

export default PastEdition;