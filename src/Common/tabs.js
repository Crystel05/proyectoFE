import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import EditionPage from '../Edicion/principal_page_edition';
import MainRoutes from '../Rutas/main';
import Memberships from '../Membresías/memberships';

export default function LabTabs() {
    const [value, setValue] = React.useState('membresias');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabColor = value !== 'membresias' ? '#ce1717' :' #2a1463';
    return (
    <Box sx={{ width: '100%' }} >
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}} >
            <TabList 
                    onChange={handleChange} 
                    aria-label="lab API tabs example" 
                    style={{marginLeft:'175px', fontSize:'13px'}}
                    TabIndicatorProps={{
                        hidden: true
                    }}
                    sx={{
                        '& button.Mui-selected': {backgroundColor: tabColor, color: 'white', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}
                    }}
                >
                <Tab label="La Edicición" value="edicion" />
                <Tab label="Rutas" value="rutas" />
                <Tab label="Planear Itinerario" value="itinerario" />
                <Tab label="Membresías" value="membresias" />
            </TabList>
            </Box>
            <TabPanel value="edicion" style={{padding: 0}} index={0} >
                <EditionPage/>
            </TabPanel>

            <TabPanel value="rutas" style={{padding: 0}} index={1} >
                <MainRoutes/>
            </TabPanel>

            <TabPanel value="itinerario" style={{padding: 0}} index={2} >
                Item Three
            </TabPanel>

            <TabPanel value="membresias" style={{padding: 0}} index={3} >
                <Memberships/>
            </TabPanel>
            
        </TabContext>
    </Box>
  );
}
