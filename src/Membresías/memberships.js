import React from 'react';
import placeHolder from '../Images/memberships.png';
import styles from '../CSS/images.module.css';
import textStyles from '../CSS/text.module.css';
import Plans from './plans';
import PlanDetails from './plan_details';

export default function Memberships (){
    /*const info = '¡Descube más como un miembro únete hoy y \n experimenta el arte que amas con mayor acceso, \n programación exclusiva'
    + ' y nuevas formas de hacer \n conexiones!';

    function replaceWithBr() {
        return info.replace(/\n/g, "<br />")
    }*/

    const data = {
        name: "Básico",
        price: "₡2.000/al mes",
        benefits: "Oportunidades de visualización solo para\nmiembros, incluidas vistas previas de\nexhibiciones y acceso fuera del horario\nde atención.\n\n"
        + "5% de descuento en la tienda del ACT, más\nenvío estándar gratuito."
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