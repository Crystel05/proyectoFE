import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { withStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useState } from 'react';
import { EDITIONS, ERROR, SUCCESS } from '../../Util/constants';
import Box from '@mui/material/Box';
import { Alert, Snackbar } from "@mui/material";

export default function GenericGrid({columns, rows, handleSeeDetails, type}) {


    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState(SUCCESS);
    const [message, setMessage] = useState("");

    const TableHeadStyled = withStyles(theme => ({
        root: {
            backgroundColor: '#2a1463',
            color:'white'
        }
    }))(TableHead);

    const TableClickableTableCell = (index, value) =>{
        if(index === 0 && type !== EDITIONS){
            return(
                <TableCell 
                    key={index}
                    onClick={() =>  handleSeeDetails(value)}
                    component="th" 
                    scope="row"
                    align="center"
                    sx={{
                        borderRight: "2px solid #2a1463",
                        borderLeft: "2px solid #2a1463",
                        borderBottom: "2px solid #2a1463",
                        "&:hover": {
                            color: "#2a1463 !important",
                            fontSize: '2rem',
                            cursor: "pointer"
                        }
                    }}
                > 
                    {value} 
                </TableCell>
            )
        }else{
            return(
                <TableCell 
                    key={index}
                    component="th" 
                    scope="row"
                    align="center"
                    sx={{
                        borderRight: "2px solid #2a1463",
                        borderLeft: "2px solid #2a1463",
                        borderBottom: "2px solid #2a1463",
                    }}
                > 
                    {value} 
                </TableCell>
            )
        }
    }

    const handleDelete = (value) => {
        console.log('delete ', value, " ", type)
        axios.delete('http://localhost:8080/admin/deleteFromGrids', {params:{type: type, valueId:value}}).then(response =>{
            if(response.data){
                setMessage('Se eliminó el item exitosamente, cambie de tab para ver el cambio')
                setSeverity(SUCCESS)
                setOpen(true)
            }else{
                setMessage('Hubo un error eliminando el item')
                setSeverity(ERROR)
                setOpen(true)
            }
        })
    }

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    return (
        <Box>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert severity={severity}>{message}</Alert>
            </Snackbar>
            <TableContainer 
                component={Paper} 
            >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHeadStyled>
                    <TableRow
                        sx={{
                            borderBottom: "2px solid #2a1463",
                            borderRight: "2px solid #2a1463",
                            borderLeft: "2px solid #2a1463",
                            "& th": {
                                fontSize: "1rem",
                                color: "rgba(255, 255, 255)",
                                fontFamily: 'Krona One'
                            }
                        }}
                        >
                        {columns.map((column, index) => {
                            return <TableCell key={index} align="center"> {column} </TableCell>
                        })}
                        <TableCell> Acciones </TableCell>
                    </TableRow>
                </TableHeadStyled>
                <TableBody>
                {rows.map((row, index) => (
                    
                    <TableRow
                        key={index}
                    >
                    {row.map((value, index) =>{
                        return( TableClickableTableCell(index, value))
                    })}
                    <TableCell
                        scope="row"
                        align="center"
                        sx={{
                            borderRight: "2px solid #2a1463",
                            borderLeft: "2px solid #2a1463",
                            borderBottom: "2px solid #2a1463",
                        }}
                        onClick={() => handleDelete(row[0])}
                    > 
                        <DeleteIcon sx={{
                            "&:hover": {
                                color: "#94212e !important",
                                cursor: "pointer",
                                fontSize:'30px'
                            }
                        }}/> 
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Box>
    );
}