import axios from 'axios';


export default function get(url){
    axios.get(url)
    .then(response =>{
        return response.data;
    })
    .catch(e=>{
        console.log("Hubo un error cargando los datos");
        console.log(e);
    })
}

function post(url, params){

}