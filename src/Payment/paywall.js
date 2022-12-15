import React from 'react'
import Paypal from './paypal'
import { Box } from '@mui/system';

//Estilos
import container from '../CSS/container.module.css'
import text from '../CSS/text.module.css'


export default function Paywall({prices, membership}) {
  return (
    <div>
        <Box className={`${container.displayColumn} ${text.kronaText}`} style={{alignItems: "center", marginTop:'3%', height:'maxHeight'}} >
            <h1>Por favor, confirme su pago de membresia</h1>
            <Box style={{width: '55vh', marginTop:'3%'}}>
                <Paypal price={prices} membership={membership}/> 
            </Box>
        </Box>
    </div>
  )
}
