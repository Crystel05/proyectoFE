import React, { useEffect, useRef } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { color, height } from '@mui/system'

export default function Paypal({price}) {

    return (

        <div>
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
                  onApprove={async (data, actions) => {
                    const details = await actions.order.capture();
                    const name = details.payer.name.given_name;
                    alert("Transaction completed by " + name);
                  }}/>
            </PayPalScriptProvider >
        </div>
    )
}
