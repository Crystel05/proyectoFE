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
            title: 'Edicion Febrero 2022',
            name: 'Por amor a Chepe',
            body: 'body body body body \nbody body body body \nbody body body body \nbody body body body \n'
        },
        {
            key: 2,
            title: 'Eadicion Febrero 2022',
            name: 'Por amor a Chepe',
            body: 'body body body body \nbody body body body \nbody body body body \nbody body body body \n'
        },
        {
            key: 3,
            title: 'Edicion Febrero 2022',
            name: 'Por amor a Chepe',
            body: 'body body body body \nbody body body body \nbody body body body \nbody body body body \n'
        },
        {
            key: 4,
            title: 'Edicion Febrero 2022',
            name: 'Por amor a Chepe',
            body: 'body body body body \nbody body body body \nbody body body body \nbody body body body \n'
        }
    ]

    return(
        <div style={{display:'flex', flexDirection:'column', marginTop: '3%', marginLeft: '3%'}}>
            <a className={styles.editionTitle} > Art City Tour: A TRAVÉS DE LOS AÑOS </a>
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