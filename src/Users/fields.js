import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { Stack } from '@mui/system';

const Fields = ({ fields }) =>{
    const Field = ({field}) => field.type === 'textField' ? <TextField
    label={field.name}
    id={field.name}
    variant="outlined"
    // onChange={handleEmailChange()}
    /> : 
    <FormControl fullWidth>
        <InputLabel id={field.name}>{field.name}</InputLabel>
        <Select
                labelId={field.name}
                id={field.name}
                // value={age}
                label= '{field.name}'
                // onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl>
    return(
        <Stack
            component="form"
            sx={{
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
                marginRight:'10vh'

            }}
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