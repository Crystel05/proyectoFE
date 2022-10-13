import React from 'react';
import styles from '../CSS/text.module.css'
import MapIcon from '@mui/icons-material/Map';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ButtonRoundDescription from '../Routes/round_description_button';

function Participation(){

    const info = 'Para participar se debe realizar la reservación \n previa donde se da un código QR a presentar al \n ingresar a los espacios y abordar las busetas';
    function replaceWithBr() {
        return info.replace(/\n/g, "<br />")
    }

    return(
        <div style={{display:'flex', flexDirection:'row', marginTop:'3%', marginLeft:'5%' }} >
            <div style={{display:'flex', flexDirection:'column'}} >
                <a className={styles.editionTitle}> ¿Cómo participar? </a>
                <a className={styles.bodyParticipation} dangerouslySetInnerHTML={{__html: replaceWithBr()}}/>
            </div>
            <div style={{display:'flex', flexDirection:'row', marginLeft:'15%'}}>
                <ButtonRoundDescription Icon={MapIcon} text='Reserva de cupo' style={{ marginRight:'100%' }} />
                <ButtonRoundDescription Icon={ConfirmationNumberIcon} text='Planear Itinerario'/>

            </div>
        </div>
    )
}

export default Participation;