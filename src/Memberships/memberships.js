import React, { useEffect, useState } from 'react';
import placeHolder from '../Images/memberships.png';
import styles from '../CSS/images.module.css';
import textStyles from '../CSS/text.module.css';
import Plans from './plans';
import PlanDetails from './plan_details';
import axios from 'axios';

export default function Memberships (){
    /*const info = '¡Descube más como un miembro únete hoy y \n experimenta el arte que amas con mayor acceso, \n programación exclusiva'
    + ' y nuevas formas de hacer \n conexiones!';

    function replaceWithBr() {
        return info.replace(/\n/g, "<br />")
    }*/
    const [memberships, setMemberships] = useState([]);
    const [selectedMembership, setSelectedMembership] = useState({})
    const [details, setDetails] = useState("")

    useEffect(() =>{
        axios.get('http://localhost:8080/membership/getAll').then(response =>{
            setMemberships(response.data);
        })
        axios.get('http://localhost:8080/membership/getById?id=2')
        .then(response =>{
            setSelectedMembership(response.data);
            setDetails(response.data.details)
        })
    },[])

    console.log(selectedMembership, "SELECTED")

    const data = {
        name: selectedMembership.name,
        price: selectedMembership.precio,
        benefits: details
    }
   return ( 
        <div>
            <article>
                <img src={placeHolder} alt="edicionActual" className={styles.editionPrincipal}/>
                
            </article>
            <div style={{display:'flex', flexDirection:'row'}}>
                <Plans/>
                <PlanDetails {...data} />
            </div>
        </div>
    )
}