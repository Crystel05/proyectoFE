import React from 'react';
import placeHolder from '../Images/placeHolderMembresias.jpeg';
import styles from '../CSS/images.module.css';
import textStyles from '../CSS/text.module.css';
import Plans from './plans';
import PlanDetails from './plan_details';

export default function Memberships (){
    const info = '¡Descube más como un miembro únete hoy y \n experimenta el arte que amas con mayor acceso, \n programación exclusiva'
    + ' y nuevas formas de hacer \n conexiones!';

    function replaceWithBr() {
        return info.replace(/\n/g, "<br />")
    }

    const data = {
        name: "Plus",
        price: "₡5.000 / al mes",
        benefits: "beneficio beneficio beneficio beneficio \n beneficio beneficio beneficio beneficio \n beneficio beneficio beneficio beneficio \n beneficio beneficio beneficio beneficio"
        + "\n\nbeneficio beneficio beneficio beneficio \n beneficio beneficio beneficio beneficio \n beneficio beneficio beneficio beneficio \n beneficio beneficio beneficio beneficio"
        + "\n\nbeneficio beneficio beneficio beneficio \n beneficio beneficio beneficio beneficio \n beneficio beneficio beneficio beneficio \n beneficio beneficio beneficio beneficio"
    }
   return ( 
        <div>
            <article>
                <img src={placeHolder} alt="edicionActual" className={styles.editionPrincipal}/>
                <h1 className={textStyles.header}>Membresías</h1>
                <a className={textStyles.bodyMemberships} dangerouslySetInnerHTML={{__html: replaceWithBr()}}/>
            </article>
            <div style={{display:'flex', flexDirection:'row'}}>
                <Plans/>
                <PlanDetails {...data} />
            </div>
        </div>
    )
}