import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ArtCityTourButton } from "../Common/button_principal_page";

import styles from '../CSS/text.module.css'
import stylesButton from '../CSS/button.module.css'

import DivederAddress from "./dividerAddress";
import Fields from "./fields";

const CreateAccount = () => {
    const fieldsColumn1 = [
        {name:'Cedula', type: 'textField'},
        {name:'Nombre', type:'textField'},
        {name:'Correo', type:'textField'}, 
        {name:'Contraseña', type:'textField'}
    ]
    const fieldsColumn2 = [
        {name:'Edad', type: 'select'},
        {name:'Apellidos', type: 'textField'}, 
        {name:'Número de teléfono', type: 'textField'}, 
        {name:'Confirmación de contraseña', type: 'textField'}
    ]
    const addressCol1 = [
        {name:'Provincia', type: 'select'}, 
        {name:'Cantón', type: 'select'}
    ]
    const addressCol2 = [
        {name:'Distrito', type: 'select'}, 
        {name:'Señas',type: 'textField'}
    ]

    return(
        <Box style={{ display:'flex', flexDirection:'column'}}>
            <div style={{ display:'flex', flexDirection:'row'}} >
                <h1 className={styles.editionTitle} style={{ marginLeft:'10vh', marginTop:'5vh', marginBottom:'5vh'}} >Crear cuenta</h1>
                <ArtCityTourButton className={stylesButton.principalCreateUser}/>
            </div>
            <div            
                style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}
            >
                <Fields fields={fieldsColumn1}/>
                <Fields fields={fieldsColumn2}/>
            </div> 
            <DivederAddress/>
            <Box style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <Fields fields={addressCol1}/>
                <Fields fields={addressCol2}/>
            </Box>
            <Button sx={{
                width: '200px',
                height: '32px',
                backgroundColor:'#ce1717',
                border: 'none',
                color: 'white',
                padding: '10px',
                textAlign: 'center',
                fontSize: '15px',
                margin: 'auto',
                marginTop: '3%',
                cursor: 'pointer',
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: 'bold',
                borderRadius: '15px',
            }}
            // onClick={login()}
            > 
                Crear cuenta 
            </Button>
        </Box>
    )
}

export default CreateAccount;