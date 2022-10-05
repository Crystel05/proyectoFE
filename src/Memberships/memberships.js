import React, { useEffect, useState } from 'react';
import axios from 'axios';
import placeHolder from '../Images/memberships.png';
import styles from '../CSS/images.module.css';
import PlanDetails from './plan_details';
import Stack from '@mui/material/Stack';
import stylesB from '../CSS/button.module.css'



export default function Memberships (){
    /*const info = '¡Descube más como un miembro únete hoy y \n experimenta el arte que amas con mayor acceso, \n programación exclusiva'
    + ' y nuevas formas de hacer \n conexiones!';

    function replaceWithBr() {
        return info.replace(/\n/g, "<br />")
    }*/

    const [selectedMembership, setSelectedMembership] = useState({})
    const [details, setDetails] = useState("")
    const [selectedMembershipId, setSelectedMembershipId] = useState(0)
    const [memberships, setMemberships] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8080/membership/getAll').then(response =>{
            setMemberships(response.data);
        })
    },[])

    const data = {
        name: selectedMembership.name,
        price: selectedMembership.precio,
        benefits: details
    }
    return ( 
        <div>
            <article>
                <img src={placeHolder} alt="membresías" className={styles.editionPrincipal}/>
            </article>
            <div style={{display:'flex', flexDirection:'row', marginLeft:'3%', marginRight:'3%'}}>
            <Stack direction="column" spacing={2} style={{ marginTop:'5%', marginRight:'10%'}}>
                {memberships.map((plan, index) =>{
                    return(
                        <button 
                            key={index}
                            className={index === 0 ? stylesB.plansClicked : stylesB.plans}
                            style={{ marginLeft:'15%' }}
                            // onClick={handleClick()}
                        >
                        <a 
                            style={{
                                marginRight:'60%'
                            }}
                        >
                            {plan.name} 
                        </a>  
                        <a>
                            {" ₡" + plan.price} 
                        </a>  
                        </button>
                    )
                })}
            </Stack>
                <PlanDetails {...data} />
            </div>
        </div>
    )
}