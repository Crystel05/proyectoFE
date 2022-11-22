import React from "react";
import { Box } from '@mui/material';
import HeaderUserInfo from "./header";
import styles from '../../CSS/text.module.css';
import PlanDetails from "../../Memberships/plan_details";

export default function MemershipSection(){
    //get membresia de usuario
    const membership = {title: 'Plus', benefits: 'Ofertas digitales exclusivas que incluyen noches comunitarias virtuales con creacion de arte en vivo, actuaciones y mas.-Oportunidades de visualizacion solo para miembros, incluidas vistas previas de exhibiciones y acceso fuera del horario de atencian.-Eventos con organizaciones culturales en la GAM y mas alba.-15 % de descuento en la tienda del ACT, mas envio estandar gratuito.', 
    price:'2500', 
    image:{drivePath:'https://drive.google.com/uc?id=1zRoDbGkgmKuXHOiMFcVlfxv9bWd44zw3', name:'plus'}, button:'Renovar'}
    //const props = {}
    return(
        <Box sx={{ marginLeft: '10vh' }}>
            {membership && 
                <Box>
                    <HeaderUserInfo title='Mis Membresías' subtitle={membership.title} />
                    <PlanDetails {...membership}/>
                </Box>
            }
            {!membership && <h1 className={`${styles.editionTitle} ${styles.kronaText}`} style={{ margin:'auto' }}> No cuenta con membresías, adquiera una en la sección de membresías</h1>}
        </Box>
    )
}