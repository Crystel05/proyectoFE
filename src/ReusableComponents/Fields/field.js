import React from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DATE_PICKER, PASSWORD, TEXT_AREA, TEXT_FIELD } from "../../Util/constants";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Box from '@mui/material/Box';
import stylesContainer from '../../CSS/container.module.css'


export const Field = ({ field }) => {
   
    const id = field.id === null ? field.name : field.id;
    if(field.type === TEXT_FIELD || field.type === PASSWORD){
        return(
            <TextField
                helperText={field.helperText}
                required={field.isRequired}
                value={field?.value}
                label={field.name}
                id={id}
                variant="outlined"
                type={field.type}
                onChange={field.onChange()}
            /> 
        ) 
    }
    else if(field.type === TEXT_AREA){
        return(
            <Box className={stylesContainer.displayColumn}>
                <a>Detalles</a>
                <TextareaAutosize 
                maxRows={4}
                minRows={4}
                id={id}
                required={field.isRequired}
                onChange={field.onChange()}
                placeholder={field.name}
                value={field?.value}
            />
            </Box>
            
        )
    }
    else if(field.type === DATE_PICKER){
        return(
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    label={field.name}
                    inputFormat="dd/MM/YYYY"
                    onChange={field.onChange()}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        )
    }
    else{ 
        return(
            <FormControl fullWidth>
                <InputLabel id={field.name}>{field.name}</InputLabel>
                <Select
                        required={field.isRequired}
                        labelId={field.name}
                        id={field.name}
                        label= {field.name}
                        // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        )
    }
}