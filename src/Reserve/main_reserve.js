import { Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import stylesContainer from '../CSS/container.module.css'
import styles from '../CSS/text.module.css';
import stylesButton from '../CSS/button.module.css'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { SELECT, TEXT_FIELD, NONE } from "../Util/constants";
import Fields from "../ReusableComponents/Fields/fields";
import GenericRoundButton from "../ReusableComponents/Buttons/generic_button";

export default function MainReserve(){

    const [onStep, setOnStep] = useState(false);
    const steps = ['1 Datos Personales', '2 Agregar Acompañantes', '3 Punto de Inicio', '4 Enviar Formulario']
    const desing = onStep ? stylesButton.stepOn : stylesButton.steps;
    const fieldsCol1 = [
        {name:'Cedula', type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => {}},
        {name:'Nombre', type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => {}},
        {name:'Correo', type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => {}}
    ]
    const fieldsCol2 = [
        {name:'Edad', type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => {}},
        {name:'Apellidos', type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => {}},
        {name:'Telefono', type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => {}},
    ]
    const field1 = 
        [{name:'Punto de Inicio', type: SELECT, isRequired:true, helperText:'', onChange: () => {}}]
    const field2 =
        [{name:'Ya he asistido al Art City Tour', type: TEXT_FIELD, isRequired:true, helperText:'', onChange: () => {}}]
    
    function handleClick(){
        setOnStep(true);
    }

    return (
        <Box className={stylesContainer.displayRow}>
            <Box style={{marginTop:'2vh', width:'30vh'}}>
                <a className={`${styles.kronaText} ${styles.editionTitle}`} style ={{marginLeft:'12%'}} > Pasos </a>
                <Stack direction="column" spacing={2} style={{ marginTop:'5%', marginRight:'10%'}}>
                    {steps.map((step, index) => {
                        return( 
                            <button 
                                key={index}
                                className={index === 0 ? stylesButton.stepOn : stylesButton.steps}
                                style={{ marginLeft:'15%' }}
                            // onClick={handleClick()}
                            >
                                {step}
                            </button>
                        )
                    })}
                </Stack>
            </Box>
            <Box style={{marginTop:'2vh', marginLeft:'17vh'}}>
                <a className={`${styles.kronaText} ${styles.editionTitle}`} > Reserva de cupo </a>
                <div className={stylesContainer.displayRow} style={{marginTop:'1vh'}}>
                    <ErrorOutlineOutlinedIcon />
                    <a> Información Obligatoria </a>
                </div>
                <Box className={stylesContainer.displayRow}>
                    <div className={ stylesContainer.spaceBetween } >
                        <Fields fields={fieldsCol1} />
                    </div>
                    <Fields fields={fieldsCol2} />
                </Box>
                <TextField variant="standard" />
                <Box className={ stylesContainer.displayRow } style={{ marginTop:'3vh' }} >
                    <div className={stylesContainer.spaceBetween}>
                        <Fields fields={field1} />
                    </div>   
                    <Fields fields={field2} sx={{width:'75vh'}} />
                </Box>
                <div>
                <GenericRoundButton Icon={<></>} text='Enviar Formulario' backgroundColor='#ce1717' iconPosition={NONE} onClick={() => {}} />
                </div>
            </Box>
        </Box>
    )
}