import { Timeline, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses, TimelineConnector  } from "@mui/lab";
import { Box } from "@mui/system";
import Event from "./event";

export default function MyItinerary({setEvents, events, readOnly }){

    const dots = new Array(5).fill(0);

    function handleDelete(event, events){ 
        const newEvents = events.filter(events => events.id !== event.id);
        setEvents(newEvents);
    }

    return(
        <Box sx={{
            overflowY:'auto', 
            maxHeight: '70vh'
        }}>
            <Timeline sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0
                },
                }}
            >
                {events.map((itinerary, index) =>{
                    return (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot 
                                    sx={{
                                        backgroundColor: '#009cc1'
                                    }}
                                /> 
                                {dots.map((_, index) => {
                                    return(
                                        <TimelineConnector 
                                        key={index}
                                        sx={{
                                            marginTop: '2px'
                                        }} 
                                    />
                                    )
                                })}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Event event={itinerary} events={events} handleDelete={handleDelete} readOnly={readOnly}/>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </Box>
    )
}