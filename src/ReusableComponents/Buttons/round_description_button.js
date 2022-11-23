import { Button, IconButton } from '@mui/material';
import { Box } from "@mui/system";
import React from "react";

export default function ButtonRoundDescription({ Icon, text, style={}, onClick }){
    return(
        <Box 
            sx={{
                display:'flex',
                flexDirection:'column'
            }}
            style={style}
        >
            <IconButton 
                size="large"
                sx={{
                    backgroundColor: '#ce1717',
                    color: 'white',
                    padding: '20px',
                    boxSizing: 'border-box',
                    width: '70px',
                    height: '70px',
                    margin:'auto',
                    '&:hover': {
                        backgroundColor: '#db5e5e',
                        color: 'white',
                    },
                }}
                onClick={onClick()}
            >
                <Icon  fontSize="inherit" />
            </IconButton>
            <Button 
                sx={{
                    backgroundColor: '#ce1717',
                    color: 'white',
                    marginTop: '10px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontFamily: 'Open Sans, sans-serif',
                    borderRadius: '30px',
                    width: '150px',
                    '&:hover': {
                        backgroundColor: '#db5e5e',
                        color: 'white',
                    },
                }}
                onClick={onClick()}
            >
                {text}
            </Button>
        </Box>
    )
}