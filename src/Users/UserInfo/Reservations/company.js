import React from "react";
import { Box } from '@mui/material';
import stylesContainer from '../../../CSS/container.module.css'
import DataInfo from "./info";
import ReservationsForm from "./form";

export default function Company({people}){

    function createFields(data, indexRow){
        const fields = []
        if(indexRow ===1){
            fields.push({title:'Cédula', info: data.identification})
            fields.push({title: 'Nombre', info: data.name})
        }else{
            fields.push({title: 'Edad' , info: data.age})
            fields.push({title: 'Apellidos', info: data.lastName})
        }
        return fields
    }
    return(
        <Box className={stylesContainer.displayColumn} sx={{ marginLeft:'5vh', marginTop: '2vh'}} >
            {people.map((person, index) =>{
                 const number = 'Acompañante ' + (index+1)
                 return(
                    <Box>
                        <DataInfo title={number}/>
                        <Box className={stylesContainer.displayRow}>
                            <ReservationsForm fields={createFields(person, 1)}/>
                            <ReservationsForm fields={createFields(person, 2)} margin='15vh' right={true} />
                        </Box>
                    </Box>
                 )
            })}
        </Box>
    )
}