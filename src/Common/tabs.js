import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import EditionPage from '../Edition/principal_page_edition';
import MainRoutes from '../Routes/main';
import Memberships from '../Memberships/memberships';
import Paypal from '../Payment/paypal';
import PrincipalItineraryPage from '../Itinerary/principal_itinerary';
import MainReserve from '../Reserve/main_reserve';
import Paywall from '../Payment/paywall';

export default function Tabs({value, setValue}) {

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setPaywall(false);
    };
    const [paywall, setPaywall] = useState(false);
    const [priceToPay, setPriceToPay] = useState(0);
    


    const tabColor = value !== 'membresias' ? '#ce1717' :' #2a1463';
    return (
    <Box sx={{ width: '100%' }} >
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}} >
                <TabList 
                        onChange={handleChange} 
                        style={{marginLeft:'10%', fontSize:'13px'}}
                        TabIndicatorProps={{
                            hidden: true
                        }}
                        sx={{
                            '& button.Mui-selected': {backgroundColor: tabColor, color: 'white', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}
                        }}
                    >
                    <Tab label="La Edición" value="edicion" />
                    <Tab label="Rutas" value="rutas" />
                    <Tab label="Planear Itinerario" value="itinerario" />
                    <Tab label="Membresías" value="membresias" />
                </TabList>
            </Box>
            <TabPanel value="principal" style={{padding: 0}} index={0} >
                Pagina Principal
            </TabPanel>
            <TabPanel value="reserva" style={{padding: 0}} index={0}>
                <MainReserve />
            </TabPanel>
            <TabPanel value="edicion" style={{padding: 0}} index={1} >
                <EditionPage />
            </TabPanel>

            <TabPanel value="rutas" style={{padding: 0}} index={2} >
                <MainRoutes />
            </TabPanel>

            <TabPanel value="itinerario" style={{padding: 0}} index={3} >
                <PrincipalItineraryPage />
            </TabPanel>

            <TabPanel value="membresias" style={{padding: 0}} index={4} >
                {paywall && value === "membresias" ? <Paywall prices={priceToPay} /> : <Memberships isPay={setPaywall} setPrice={setPriceToPay}/>}
            </TabPanel>
        </TabContext>
    </Box>
  );
}
