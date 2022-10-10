import { Box } from "@mui/system";
import React from "react";
import Place from "./place";

export default function Places({ places }){
    return(
        <Box style={{ display:'flex', flexDirection:'column', marginLeft:'10%'}}>
            {places.map((place, index) => {
                return(
                    <Place place={place} key={index} />
                )
            })}
        </Box>
    )
    
}