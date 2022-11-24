import React, { useEffect, useState } from "react";
import { Box } from '@mui/material';
import HeaderUserInfo from "./header";
import styles from '../../CSS/text.module.css';
import PlanDetails from "../../Memberships/plan_details";
import axios from "axios";

export default function MemershipSection(){

    const [membership, setMembership] = useState();

    async function getMembershipByUser() {
        const userId = (JSON.parse(sessionStorage.getItem('userData'))).id;
        const url  = 'http://localhost:8080/membership/getByUserId?userId=' + userId;

        await axios.get(url).then(response => {
            let membership = response.data[0];
            membership.button = 'Renovar';
            setMembership(membership);
        })
    }

    useEffect(() => {
        getMembershipByUser();
    }, [])

    return(
        <Box sx={{ marginLeft: '10vh' }}>
            {membership && 
                <Box>
                    <HeaderUserInfo title='Mis Membresías' subtitle={membership.name} />
                    <PlanDetails data={membership} readOnly={true} />
                </Box>
            }
            {!membership && <h1 className={`${styles.editionTitle} ${styles.kronaText}`} style={{ margin:'auto' }}> No cuenta con membresías, adquiera una en la sección de membresías</h1>}
        </Box>
    )
}