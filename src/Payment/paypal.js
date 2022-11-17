import React, { useEffect, useRef } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { color } from '@mui/system'

export default function Paypal() {

    return (

        <div>
            <PayPalScriptProvider options={{"client-id": "AcKi1mnMxsQazlZ2Tv626YV6aY0hMd7mKzx-TAT3Wsx2oaFcB_aENJ6bQNB0iECXU1K3DUqYB3L0yL0H"}}>
                <PayPalButtons style={{
                    "color": "gold",
                    "shape": "pill",
                    "tagline": "false"
                }}/>
            </PayPalScriptProvider >
        </div>
    )
}
