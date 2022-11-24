import { makeStyles, withStyles } from '@mui/styles'
import React from "react";
import { Stack } from '@mui/system';
import { Field } from "./field";


const useStyles = makeStyles({
    root:{
        '& label.Mui-focused': {
            color: '#2a1463',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#2a1463',
            },
          },
        '& fieldset': {
            borderRadius: '25px',
        },
        width: '75vh',
        margin:'auto'
    }
})

const FieldsAdmin = ({ fields }) =>{

    const classes = useStyles();
    return(
        <Stack
            component="form"
            className={ classes.root }
            spacing={3}
        >
            {fields.map((field, index) =>{
                return (
                    <Field field={field} key={index} color='#2a1463'/>
                )
            })}
        </Stack>
    )
}

export default FieldsAdmin;