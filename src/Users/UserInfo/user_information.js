import React from "react";
import Box from '@mui/material/Box';
import stylesContainer from '../../CSS/container.module.css'
import ActionsBar from "./actions";
import { useState } from "react";
import { PROFILE } from "../../Util/constants";
import ShowUserInfoAction from "./show_data";

export default function UserInformation(){
    const [action, setAction] = useState(PROFILE)

    return(
        <Box className={stylesContainer.displayRow} style={{ marginLeft: '3vh', marginTop: '5vh'}}>
            <ActionsBar setAction={setAction} action={action} />
            <ShowUserInfoAction action={action}/>
        </Box>
    )
}