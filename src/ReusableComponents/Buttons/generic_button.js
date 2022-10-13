import { Button } from "@mui/material";
import { makeStyles } from '@mui/styles'
import React from "react";
import { END, START } from "../../Util/constants";
import sx from "mui-sx";

export default function GenericRoundButton({ Icon, backgroundColor, text, iconPosition, onClick }){

    const sxStyles = {
        width: '200px',
        height: '32px',
        backgroundColor: {backgroundColor},
        border: 'none',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        fontSize: '15px',
        margin: 'auto',
        marginTop: '3%',
        cursor: 'pointer',
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 'bold',
        borderRadius: '15px',
        '&:hover': {
            backgroundColor: '#db5e5e',
            color: 'white',
        },
    }

    if(iconPosition === END){
        return(
            <Button
                endIcon={<Icon />} 
                variant='contained'
                sx={sx(sxStyles)}
                onClick={onClick()}
            >
                {text}
            </Button>
        )
    }else if(iconPosition === START){
        return(
            <Button
                startIcon={<Icon />} 
                variant='contained'
                sx={sx(sxStyles)}
                onClick={onClick()}
            >
                {text}
            </Button>
        )
    }else{
        return(
            <Button
                variant='contained'
                sx={sx(sxStyles)}
                onClick={onClick()}
            >
                {text}
            </Button>
        )
    }
}