import React from 'react';
import styles from '../CSS/text.module.css'
import stylesButton from '../CSS/buttonp.module.css'
import mapIcon from '../Images/mapIcon.png'
import ticket from '../Images/ticket.png'

function Participation(){

    const info = 'Para participar se debe realizar la reservación \n previa donde se da un código QR a presentar al \n ingresar a los espacios y abordar las busetas';
    function replaceWithBr() {
        return info.replace(/\n/g, "<br />")
    }

    return(
        <div style={{display:'flex', flexDirection:'row', marginTop:'3%' }} >
            <div style={{display:'flex', flexDirection:'column', marginLeft: '11%'}} >
                <a className={styles.editionTitle}> ¿Cómo participar? </a>
                <a className={styles.bodyParticipation} dangerouslySetInnerHTML={{__html: replaceWithBr()}}/>
            </div>
            <div style={{display:'flex', flexDirection:'row', marginLeft:'15%', justifyContent:'space-between'}}>
                <div style={{display:'flex', flexDirection:'column', marginRight:'15%'}}>
                    <button 
                        disabled
                        className = { stylesButton.circle } 
                        style={{ padding:'10px'}} >
                        <img src={mapIcon}/>
                    </button> 
                    <button className={ stylesButton.reserve_button } style={{}} >
                            Reserva de cupo
                    </button>
                </div>

                <div style={{display:'flex', flexDirection:'column', marginRight: '15%'}}>
                    <button 
                        disabled
                        className = { stylesButton.circle } style={{ padding:'10px' }} >
                        <img src={ticket}/>
                    </button> 
                    <button className={ stylesButton.reserve_button }>
                        Planear Itinerario
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Participation;