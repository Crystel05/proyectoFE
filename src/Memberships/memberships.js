import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlanDetails from './plan_details';
import Stack from '@mui/material/Stack';
import stylesB from '../CSS/button.module.css'
import styles from '../CSS/button.module.css';
import stylesText from '../CSS/text.module.css'

export default function Memberships ({isPay, setPrice, setMembership}){
    const info = '¡Descubre más como un miembro únete hoy y experimenta el arte que amas con mayor acceso, programación exclusiva'
    + ' y nuevas formas de hacer conexiones!';

    const [selectedMembership, setSelectedMembership] = useState({})
    const [details, setDetails] = useState("")
    const [photo, setPhoto] = useState({})
    const [selectedMembershipId, setSelectedMembershipId] = useState(0)
    const [principalImage, setPrincipalImage] = useState("");
    const [memberships, setMemberships] = useState([]);

    useEffect(() =>{
        axios.get(HOST + '/membership/getAll').then(response =>{
            setMemberships(response.data);
            setSelectedMembership(response.data[0]);
            setDetails(response.data[0].details);
            setPhoto(response.data[0].photo)
        })
        axios.get(HOST + '/membership/getPrincipal')
        .then(response =>{
            setPrincipalImage(response.data);
        })
    },[])

    function handleClick(event, index){
        setSelectedMembershipId(index)
        setSelectedMembership(memberships[index])
        setDetails(memberships[index].details)
        setPhoto(memberships[index].photo)        
    }
    
    const data = {
        id: selectedMembership.id,
        name: selectedMembership.name,
        price: selectedMembership.price,
        details: details,
        photo: photo,
        border: true,
        button: 'Unirse'
    }
    return ( 
        <div>  
            {/* <article>
                <picture>
                    <source  srcSet={principalImage} />
                    <img src={principalImage} alt="background" className={styles.image} />
                </picture>
                <h3 className={stylesText.header}>Membresías</h3>
                <a className={stylesText.bodyMemberships} > {info} </a>
            </article> */}
            <div style={{display:'flex', flexDirection:'row', marginLeft:'3%', marginRight:'3%'}}>
            <Stack direction="column" spacing={2} style={{ marginTop:'5%', marginRight:'10%'}}>
                {memberships.map((plan, index) =>{
                    return(
                        index !== 4 && 
                        <button 
                            key={index}
                            className={index === selectedMembershipId ? stylesB.plansClicked : stylesB.plans}
                            style={{ marginLeft:'15%' }}
                            onClick={event => handleClick(event, index)}
                        >
                        <a 
                            style={{
                                marginRight:'60%'
                            }}
                        >
                            {plan.name} 
                        </a>  
                        <a>
                            {"$" + plan.price} 
                        </a>  
                        </button>
                    )
                })}
            </Stack>
                <PlanDetails data={data} isPay={isPay} setPrice={setPrice} setMembership={setMembership}/>
            </div>
        </div>
    )
}
