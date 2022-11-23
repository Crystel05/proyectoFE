import React, { useState} from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { ERROR, SUCCESS } from '../Util/constants';
import { Alert, Snackbar } from '@mui/material'
import axios from 'axios';

export default function Paypal({price, membership}) {

  const [isCorrect, setIsCorrect] = useState();
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    function getCurrentDate() {
        var today = new Date();
        var day = today.getDate();
        var year = today.getFullYear();
        var month = today.getMonth()+1;

        if (month == 13) {
            month = 1;
        }

        return year+'-'+month+'-'+day;
    }

    function getEndDate() {
        var date = new Date();
        var month = date.getMonth()+2;

        if(month == 13) {
            month = 1; 
        }
        if (month == 14) {
            month = 2;
        }
        
        return date.getFullYear()+'-'+month+'-'+date.getDate();
    }

    async function finalizePayment(){
        const membershipId = membership;
        const userId = 1; // de donde se saca?
        const startDate = getCurrentDate();
        const endDate = getEndDate();
        
        const url = 'http://localhost:8080/membership/createMembershipByUser?userId='+userId+'&membershipId='+membershipId;
        await axios.get(url)
        .then(response => {
            setIsCorrect(response.data);
            if (response.data == 1) {
                setOpen(true);
                setMessage("Usted ha adquirido una membresía correctamente.");
                setSeverity(SUCCESS);
            } else {
                setMessage("Ha ocurrido un error, por favor intente de nuevo.");
                setSeverity(ERROR);
            }
            setOpen(true);
        })
    }

    return (

        <div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert severity={severity}>{message}</Alert>
            </Snackbar>
            <PayPalScriptProvider options={{"client-id": "AcKi1mnMxsQazlZ2Tv626YV6aY0hMd7mKzx-TAT3Wsx2oaFcB_aENJ6bQNB0iECXU1K3DUqYB3L0yL0H&currency=USD"}}>
                <PayPalButtons 
                style={{
                    color: 'gold',
                    shape: 'pill',
                    tagline: "false",
                    height: 50
                }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: price,
                            
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={async () => finalizePayment()}/>
            </PayPalScriptProvider >
        </div>
    )
}
