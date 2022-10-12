import '../App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrincipalPage from '../Common/principal_page';
import Login from '../Users/login';
import CreateAccount from '../Users/create_account';
import { useState } from 'react';

function App(){
    const [authorization, setAuthorization] = useState(false);

    const giveAuthorization = () => {
        setAuthorization(true);
    }
    
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Login setAuthorization={() => giveAuthorization()}/>} />
                <Route exact path='/application' element={<PrincipalPage authorization={ authorization } />}/>
                <Route exact path='/createAccount' element={<CreateAccount />} />
            </Routes> 
        </Router>
    )
}

export default App;