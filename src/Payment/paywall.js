import React from 'react'
import ArtCityTourButton from '../ReusableComponents/Buttons/art_city_tour_button';
import Paypal from './paypal'
import Contacts from '../Common/contacts'
import { Box } from '@mui/system';

//Estilos
import container from '../CSS/container.module.css'
import text from '../CSS/text.module.css'
import stylesButton from '../CSS/button.module.css'


export default function Paywall({prices}) {
  return (
    <div>
        <Box className={`${container.displayColumn} ${text.kronaText}`} style={{alignItems: "center", marginTop:'3%', height:'maxHeight'}} >
            <h1>Por favor, confirme su pago de membresia</h1>
            <Box style={{width: '55vh', marginTop:'3%'}}>
                <Paypal price={prices} /> 
            </Box>
        </Box>
    </div>
  )
}
