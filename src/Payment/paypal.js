import React, { useState} from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { ERROR, PAYPAL_CLIENTID, SUCCESS } from '../Util/constants';
import { Alert, Snackbar } from '@mui/material'
import axios from 'axios';

export default function Paypal({price, membership}) {

    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    async function finalizePayment(){
        const membershipId = membership;
        const userId = (JSON.parse(sessionStorage.getItem('userData'))).id;

        
        const url = HOST + '/membership/createMembershipByUser?userId='+userId+'&membershipId='+membershipId;
        await axios.get(url)
        .then(response => {
            if (response.data === 1) {
                setOpen(true);
                setMessage("Usted ha adquirido una membresía correctamente.");
                setSeverity(SUCCESS);
            } else {
                setMessage("Ha ocurrido un error, por favor intente de nuevo.");
                setSeverity(ERROR);
                setOpen(true);
            }
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
            <PayPalScriptProvider options={{"client-id": PAYPAL_CLIENTID}}>
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