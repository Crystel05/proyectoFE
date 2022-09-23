import React from 'react';
import styles from '../CSS/text.module.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PastEdition from './past_edition';

function EditionsThroughYears(){

    const editions = [ //cambiar por lo que jala el enpoint
        {
            key: 1,
            title: 'EDICIÓN FEBRERO 2022',
            name: 'Por amor a Chepe',
            body: '"Por amor a Chepe" primer Art City Tour del año\nconectará este jueves 14 de febrero el centro con\nel oeste para comodidad de los asistentes.\n\n'
            + 'En la Ruta Conexión Sabana podés visitar Museos\ndel Banco Central, Centro de Investigación y\nConservación del Patrimonio Cultural Costa Rica,\nMuseo Filatelico de Correos de Costa Rica, Galería\nNacional y Museo de Arte Costarricense - MAC.\n\n\n\n'
        },
        {
            key: 2,
            title: 'EDICIÓN NOVIEMBRE 2019',
            name: 'Noche en Blanco',
            body: '"Noche en Blanco, San José de día por una\nnoche"; una noche donde disfrutaremos de la\noferta cultural amplia y viva que nos brinda San\nJosé y su entorno. Conectaremos actividades que\nse desarrollan en museos, galerías, centros\nculturales, edificios patrimoniales y espacios\nabiertos del Centro de San José, Barrio Amón,\nBarrio Otoya, Barrio Escalante y Sabana.\n\n\n\n'
        },
        {
            key: 3,
            title: 'EDICIÓN SETIEMBRE 2016',
            name: 'Chepe bajo la lluvia',
            body: '"Chepe bajo la lluvia"; durante esta noche\ndisfrutaremos de una oferta cultural que celebra a\nSan José y su entorno. Conectaremos actividades\nque se desarrollarán en museos, galerías, centros\nculturales, tiendas de diseño, parques, plazas,\nedificios patrimoniales del Centro de San José,\nBarrio Amón, Barrio Otoya, Barrio Escalante, Los\nYoses y La Sabana. \n\n\n\n'
        }
    ]

    return(
        <div style={{display:'flex', flexDirection:'column', marginTop: '3%', marginLeft: '3%'}}>
            <a className={styles.editionTitle} > Art City Tour: a TRAVÉS DE LOS AÑOS </a>
            <a className={styles.subtitleSmall}> ¡Un viaje a lo que ha sido la experiencia Art City Tour en las pasadas ediciones!</a>
            <Timeline sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0
                },
                }}
            >
                {editions.map(edition =>{
                
                    const TimeDot = () => edition.key===1 ? <TimelineDot/> : <TimelineDot variant="outlined"/>
                    return (
                        <TimelineItem >
                            <TimelineSeparator >
                                <TimeDot/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <PastEdition {...edition}/>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </div>
    )
}

export default EditionsThroughYears;