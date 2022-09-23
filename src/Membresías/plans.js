import { React, useState } from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import styles from '../CSS/buttonp.module.css'

export default function Plans(){ //cambiar esto por una lista de base de datos después 
    
    const plans = [
        'Básico ₡2000',
        'Estándar ₡3000',
        'Plus ₡5000',
        'Premium ₡8000'
    ]
    const [clicked, setClicked] = useState(false);

    // const desing = clicked ? styles.plansClicked : styles.plans;
    
    // function handleClick(){
    //     setClicked(true);
    // }
    return(
        <Stack direction="column" spacing={2} style={{ marginTop:'5%' }}>
            {plans.map((plan, index) =>{
                return(
                    <button 
                        key={index}
                        className={index === 0 ? styles.plansClicked : styles.plans}
                        style={{ marginLeft:'15%' }}
                        // onClick={handleClick()}
                    >
                    {plan}    
                    </button>
                )
            })}
            
            
        </Stack>
    )
}