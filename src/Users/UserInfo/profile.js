import React from "react";
import { Box } from '@mui/material';
import stylesContainer from '../../CSS/container.module.css'
import Fields from "../../ReusableComponents/Fields/fields";
import { NONE, TEXT_AREA, TEXT_FIELD } from "../../Util/constants";
import stylesText from '../../CSS/text.module.css';
import GenericRoundButton from "../../ReusableComponents/Buttons/generic_button";

export default function ProfileSection(){
    const col1 = [
        {name:'Nombre', type: TEXT_FIELD, isRequired:false, helperText:'', onChange: () => {}},
        {name:'Correo', type: TEXT_FIELD, isRequired:false, helperText:'', onChange: () => {}},
        {name:'Edad', type: TEXT_FIELD, isRequired:false, helperText:'', onChange: () => {}},
        {name:'Dirección', type: TEXT_AREA, isRequired:false, helperText:'', onChange: () => {}},
    ]
    const col2 = [
        {name:'Apellidos', type: TEXT_FIELD, isRequired:false, helperText:'', onChange: () => {}},
        {name:'Cédula', type: TEXT_FIELD, isRequired:false, helperText:'', onChange: () => {}},
        {name:'Número de teléfono', type: TEXT_FIELD, isRequired:false, helperText:'', onChange: () => {}},
    ]
    return(
        <Box className={stylesContainer.displayColumn} sx={{ marginLeft: '10vh' }}>
            <Box className={stylesContainer.displayRow}>
                <h1 className={ `${stylesText.editionTitle} ${stylesText.kronaText}` } style={{ marginLeft: '1vh', marginTop: '5vh'}} > HOLA NOMBRE </h1>
            </Box>
            <Box className={stylesContainer.displayRow} style={{margin:'auto', marginTop: '5vh'}}>
                <Box style={{ marginRight:'5vh' }}>
                    <Fields fields={col1} />
                </Box> 
                <Fields fields={col2} />
            </Box>
            <GenericRoundButton Icon={<></>} backgroundColor='#ce1717' text='Guardar Cambios' iconPosition={NONE} onClick={() =>{}}/>
        </Box>
    )
}