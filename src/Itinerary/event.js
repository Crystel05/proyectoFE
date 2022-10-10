import { Box } from "@mui/system";
import React from "react";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export default function Event({ event }){
    return(
        <Box sx={{
            boxShadow:'1px 3px 18px #a19999',
            borderRadius:'10px'
            }} 
        >
            <Box sx={{ p: 1 }} style={{ display:'flex', flexDirection:'row', backgroundColor:'#f4f3f7' }}>
                <a style={{ marginRight:'1vh' }} > {event.place.name} </a>
                <CancelOutlinedIcon style={{ marginLeft:'auto' }}/>
            </Box>
            <Box sx={{ p: 1, border:2, borderColor:'#f4f3f7' }} style={{ display:'flex', flexDirection:'row' }} >
                <AccessAlarmIcon style={{ color:'#8c8888' }}/>
                <a style={{ marginLeft:'1vh', color:'#8c8888', color:'#8c8888'}} > {event.timeStart} </a>
                <a style={{ marginLeft:'1vh', color:'#8c8888', color:'#8c8888'}} > {event.timeEnd} </a>
            </Box>
        </Box>
    )
}