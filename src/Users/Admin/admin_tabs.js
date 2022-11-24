import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";
import AdminCRUD from "./admin_principal_generic";
import { PLACES, SPONSORS, EDITIONS, NEWS, USERS, EVENTS, ROUTES } from "../../Util/constants";
import AddEditPlace from "./Places/add_edit_place";
import AddEditSponsor from "./Sponsors/add_edit_sponsor";
import AddEditEdition from "./Editions/add_edit_editions";
import AddEditNews from "./News/add_edit_news";
import CreateAccount from "../create_account";
import AddEditEvent from "./Events/add_edit_event";
import AddEditRoute from "./Routes/add_edit_route";

export default function AdminTabs(){

    const [value, setValue] = useState('lugares')
    const [row, setRow] = useState({})
    const [isEditing, setEditing] = useState(false)
    const [isNew, setIsNew] = useState(false)

    const handleChange = (_, newValue) => {
        setValue(newValue)
        setEditing(false) 
        setIsNew(false)
    };
    return(
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
                            '& button.Mui-selected': {backgroundColor: '#2a1463', color: 'white', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}
                        }}
                    >
                    <Tab label="Lugares" value="lugares" />
                    <Tab label="Eventos" value="eventos" />
                    <Tab label="Rutas" value="rutas" />
                    <Tab label="Patrocinadores" value="patrocinadores" />
                    <Tab label="Ediciones" value="ediciones" />
                    <Tab label="Noticias" value="noticias" />
                    <Tab label="Usuarios" value="usuarios" />
                </TabList>
            </Box>
            <TabPanel value="lugares" style={{padding: 0}} index={0} >
                {isEditing && value === 'lugares' ? <AddEditPlace isNew={isNew} type={PLACES} id={row}/> :
                    <AdminCRUD type={PLACES} setValue={setEditing} setIsNew={setIsNew} setRow={setRow}/>
                }
            </TabPanel>
            <TabPanel value="eventos" style={{padding: 0}} index={0} >
                {isEditing && value === 'eventos' ? <AddEditEvent isNew={isNew} type={EVENTS} /> :
                    <AdminCRUD type={EVENTS} setValue={setEditing} setIsNew={setIsNew} setRow={setRow}/>
                }
            </TabPanel>
            <TabPanel value="rutas" style={{padding: 0}} index={0} >
                {isEditing && value === 'rutas' ? <AddEditRoute isNew={isNew} type={ROUTES} /> :
                    <AdminCRUD type={ROUTES} setValue={setEditing} setIsNew={setIsNew} setRow={setRow}/>
                }
            </TabPanel>
            <TabPanel value="patrocinadores" style={{padding: 0}} index={1}>
                {isEditing && value === 'patrocinadores' ? <AddEditSponsor  isNew={isNew} type={SPONSORS} id={row} /> :
                    <AdminCRUD type={SPONSORS} setValue={setEditing} setIsNew={setIsNew} setRow={setRow}/>
                }
            </TabPanel>
            <TabPanel value="ediciones" style={{padding: 0}} index={2} >
                {isEditing && value === 'ediciones' ? <AddEditEdition type={EDITIONS} /> :
                    <AdminCRUD type={EDITIONS} setValue={setEditing} setIsNew={setIsNew} setRow={setRow}/>
                }
            </TabPanel>
            <TabPanel value="noticias" style={{padding: 0}} index={3} >
                {isEditing && value === 'noticias' ? <AddEditNews isNew={isNew} type={NEWS}/> :
                    <AdminCRUD type={NEWS} setValue={setEditing} setIsNew={setIsNew} setRow={setRow}/>
                }
            </TabPanel>
            <TabPanel value="usuarios" style={{padding: 0}} index={4} >
                {isEditing && value === 'usuarios' ? <CreateAccount isAdmin={true} isNew={isNew}/> :
                    <AdminCRUD type={USERS} setValue={setEditing} setIsNew={setIsNew} setRow={setRow}/>
                }
            </TabPanel>
        </TabContext>
        </Box>
    )
}