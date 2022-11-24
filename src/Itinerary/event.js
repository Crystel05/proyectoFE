import { Box } from "@mui/system";
import React from "react";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export default function Event({ event, events, handleDelete, readOnly }){

    return(
        <Box sx={{
            boxShadow:'1px 3px 18px #a19999',
            borderRadius:'10px',
            width:'370px'
            }} 
        >
            <Box sx={{ p: 1 }} style={{ display:'flex', flexDirection:'row', backgroundColor:'#f4f3f7' }}>
                <a style={{ marginRight:'1vh' }} > {event.place.name} </a>
                {!readOnly && <button style={{ marginLeft:'auto', border:'none'}} onClick={() => handleDelete(event, events)}><CancelOutlinedIcon/></button>}
            </Box>
            <Box sx={{ p: 1, border:2, borderColor:'#f4f3f7' }} style={{ display:'flex', flexDirection:'row' }} >
                <AccessAlarmIcon style={{ color:'#8c8888' }}/>
                <a style={{ marginLeft:'1vh', color:'#8c8888'}} > {event.startHour} </a>
                <a style={{ marginLeft:'1vh', color:'#8c8888'}} > {event.endHour} </a>
            </Box>
        </Box>
    )
}