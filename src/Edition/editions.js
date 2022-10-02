import React, { useEffect, useState } from 'react';
import styles from '../CSS/text.module.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PastEdition from './past_edition';
import axios from 'axios';

function EditionsThroughYears(){
    const [editions, setEditions] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8080/edition/getAll').then(response =>{
            setEditions(response.data)
        })
    },[])
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
                {editions.map((edition, index) =>{
                
                    const TimeDot = () => index===1 ? <TimelineDot/> : <TimelineDot variant="outlined"/>
                    return (
                        <TimelineItem key={index}>
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