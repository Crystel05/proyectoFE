import React from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import styles from '../../CSS/images.module.css'
import axios from "axios";
import { useEffect } from "react";
import { NONE } from "../../Util/constants";
import GenericGrid from "./generic_grid";
import GenericRoundButton from "../../ReusableComponents/Buttons/generic_button";
import stylesContainer from '../../CSS/container.module.css'

export default function AdminCRUD({type, setValue, setRow}){
    const [image, setImage] = useState()
    const [columns, setColumns] = useState([])
    const [rows, setRows] = useState([])

    useEffect(() =>{
        getImage()
        getGrid()
    },[])

    async function getImage(){
        await axios.get('http://localhost:8080/images/getAdminPH', {params:{sectionPH: type}}).then(response => {
            setImage(response.data);
        })
    }

    async function getGrid(){
        await axios.get('http://localhost:8080/admin/getAdminGrid', {params:{adminSection: type}}).then(response =>{
            setColumns(response.data.columns)
            setRows(response.data.rows)
        })
    }
    
    function handleSeeDetails(row){
        setValue(true);
        setRow(row);
    }

    return(
        <Box className={ stylesContainer.displayColumn }>
            <img src={image} alt={'Image Place Holder'} className={styles.adminImages}/>
            <Box style={{ marginLeft: '5vh', marginRight: '5vh', marginTop:'10vh' }} >
                <GenericGrid columns={columns} rows={rows} handleSeeDetails={handleSeeDetails}/>
            </Box>
            <GenericRoundButton Icon={<></>} backgroundColor='#2a1463' text='AGREGAR NUEVO' iconPosition={NONE} onClick={() => {}}/>
        </Box>
    )
}