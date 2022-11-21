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


export default function GenericGrid({columns, rows, handleSeeDetails}) {

    const TableHeadStyled = withStyles(theme => ({
        root: {
            backgroundColor: '#2a1463',
            color:'white'
        }
    }))(TableHead);

    const TableClickableTableCell = (index, value) =>{
        if(index === 0){
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

    function handleDelete(value){
        console.log('delete')
    }
    return (
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
                    onClick={() => handleDelete(row)}
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
    );
}