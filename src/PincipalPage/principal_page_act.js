import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ImageHeaderAdmin from '../Users/Admin/header_add_edit.js'
import { Box } from '@mui/material';
import stylesContainer from '../CSS/container.module.css'
import Participation from "../Routes/participation.js";
import RoutesACT from "./routes_act.js";
import News from "./news.js";


export default function ACTPrincipalPage({setValue}){
    const [image, setImage] = useState();
    const [news, setNews] = useState([]);
    const [routes, setRoutes] = useState([]);
    const title = 'El Art City Tour'
    const info = 'Es una experiencia nocturna de recorridos por museos, galerias y centros culturales de la ciudad de San José'
    
    async function getImage(){
        await axios.get('http://localhost:8080/images/getPrincipalPageImage').then(response => { 
            setImage(response.data);
        })
    }
    async function getNews() {
        await axios.get('http://localhost:8080/news/getAll').then(response => { 
            setNews(response.data);
        })
    }
    async function getRoutes() {
        await axios.get('http://localhost:8080/routes/getByCurrent').then(response => { 
            setRoutes(response.data);
        })
    }

    useEffect(() => {
        getImage();
        getNews();
        getRoutes();
    }, [])
    
    return(
        <Box className={stylesContainer.displayColumn} style={{ margin:'auto' }}>
            <ImageHeaderAdmin title={title} info={info} image={image} headerTitle='' />
            <Participation setValue={setValue}/>
            <RoutesACT routes = {routes}/> 
            <News news = {news}/>
        </Box>
        
    )
}
