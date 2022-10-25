import { makeStyles, withStyles } from '@mui/styles'
import React from "react";
import { Stack } from '@mui/system';
import { Field } from "./field";


const useStyles = makeStyles({
    root:{
        '& label.Mui-focused': {
            color: '#ce1717',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#ce1717',
            },
          },
        '& fieldset': {
            borderRadius: '25px',
        },
        width: '75vh',
        margin:'auto'
    }
})

const Fields = ({ fields }) =>{

    const classes = useStyles();
    return(
        <Stack
            component="form"
            className={ classes.root }
            spacing={3}
        >
            {fields.map((field, index) =>{
                return (
                    <Field field={field} key={index} />
                )
            })}
        </Stack>
    )
}

export default Fields;