import React from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { PASSWORD, TEXT_FIELD } from "../../Util/constants";
import sx from "mui-sx";

export const Field = ({ field }) => {

    if(field.type === TEXT_FIELD || field.type === PASSWORD){
        return(
            <TextField
                required={field.isRequired}
                label={field.name}
                id={field.name}
                variant="outlined"
                type={field.type}
                onChange={field.onChange()}
            /> 
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