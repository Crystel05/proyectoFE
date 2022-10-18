import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import styles from '../CSS/button.module.css'

export default function Plans(){ //cambiar esto por una lista de base de datos después 
    const [memberships, setMemberships] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8080/membership/getAll').then(response =>{
            setMemberships(response.data);
        })
    },[])
    
    const [clicked, setClicked] = useState(false);

    const desing = clicked ? styles.plansClicked : styles.plans;
    
    function handleClick(){
        setClicked(true);
    }
    return(
        <Stack direction="column" spacing={2} style={{ marginTop:'5%', marginRight:'10%'}}>
            {memberships.map((plan, index) =>{
                return(
                    <button 
                        key={index}
                        className={desing}
                        style={{ marginLeft:'15%' }}
                        onClick={handleClick()}
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
    )
}