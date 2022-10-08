import React, { useEffect, useState } from 'react';
import styles from '../CSS/text.module.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PastEdition from './past_edition';
import axios from 'axios';

function EditionsThroughYears(){
    const [editions, setEditions] = useState([]);
    const dots = new Array(25).fill(0);

    useEffect(() =>{
        axios.get('http://localhost:8080/edition/getAll').then(response =>{
            setEditions(response.data)
        })
    },[])
    return(
        <div style={{display:'flex', flexDirection:'column', marginTop: '3%', marginLeft: '2%', marginRight:'2%'}}>
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
                
                    const TimeDot = () => index===0 ? <TimelineDot 
                        sx={{
                            backgroundColor: '#ce1717'
                        }}/> 
                        : <TimelineDot 
                            variant="outlined"
                            sx={{
                                borderColor: '#ce1717'
                            }}
                        />
                    return (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimeDot/>
                                {dots.map((_, index) => {
                                    return(
                                        <TimelineConnector 
                                        key={index}
                                        sx={{
                                            backgroundColor: '#ce1717',
                                            marginTop: '3px'
                                        }} 
                                    />
                                    )
                                })}
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