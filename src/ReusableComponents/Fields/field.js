import React from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { CHECKBOX, DATE_PICKER, MULTIPLE, PASSWORD, SELECTMULTIPLE, TEXT_AREA, TEXT_FIELD } from "../../Util/constants";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {Box, IconButton }from '@mui/material';
import stylesContainer from '../../CSS/container.module.css'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import OutlinedInput from '@mui/material/OutlinedInput';

export const Field = ({ field, color }) => {
   
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
    }else if(field.type === CHECKBOX){
        return(
            <FormControlLabel control={<Checkbox 
                sx={{
                    color: color,
                    '&.Mui-checked': {
                      color: color,
                    },
                  }}
            />} label={field.name} />
        )
    }else if(field.type === MULTIPLE){
        return(
            <FormControl style={{ display: 'flex', flexDirection: 'row'}}>
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
                <IconButton onClick={field.onAdd()}>
                    <AddIcon sx={{ color: color}}/>
                </IconButton>
                <a>Se han agregado {field.saved.length} imágenes</a>
            </FormControl>
        )
    }
    else if(field.type === SELECTMULTIPLE){
        const names =['luis', 'juan', 'pedro']
        return(
            <FormControl fullWidth>
                <InputLabel id={field.name}>{field.name}</InputLabel>
                <Select
                    labelId={field.name}
                    id={field.id}
                    multiple
                    value={field.value}
                    onChange={field.onChange()}
                    input={<OutlinedInput label={field.name} />}
                >
                {names.map((name) => (
                    <MenuItem
                    key={name}
                    value={name}
                    //style={getStyles(name, personName, theme)}
                    >
                    {name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
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
                        onChange={field.onChange()}
                >
                {field.values.map((value, index)=>{
                    return <MenuItem value={value.id} key={index}>{value.name ? value.name : value} </MenuItem>
                })}
                </Select>
            </FormControl>
        )
    }
}