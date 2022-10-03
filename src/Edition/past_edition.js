import React from 'react';
import styles from '../CSS/images.module.css';
import ImageSlider from './image_slider';
import TextPart from './textPartEdition';
import placeHolder1 from  '../Images/carPh.png'

function PastEdition(props){

    const months = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    
    const slideImages = [
        {
            url: '../Images/carPh.png',
            title: 'Slide 1',
          },
          {
            url: '../Images/carPh2.jpg',
            title: 'Slide 2',
          },
          {
            url: '../Images/carPh3.jpg',
            title: 'Slide 3',
          },
    ];
    
    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto"
    }

    const dateDate = new Date(props.date);
    const data = {
        title: 'Edición ' + months[dateDate.getMonth()] + " " + dateDate.getFullYear(), 
        editionTitle: props.name, 
        body:props.details,
        image: props.secondImagePath
    }
    return(
        <div style={{ display:'flex', flexDirection:'row'}} >
            <TextPart data = {data} isPrincipal = {false}/>
            <img src={data.image} style={{width:'60%', height:'300px', marginRight:'5%', marginLeft:'5%', marginTop:'1%'}} ></img>
            {/* <div style={containerStyles}>
                <ImageSlider slides={slideImages} />
            </div> */}
        </div>
    )

}

export default PastEdition;