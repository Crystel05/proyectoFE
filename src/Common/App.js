import '../App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrincipalPage from './principal_page';
import Login from '../Users/login';
import CreateAccount from '../Users/create_account';
import { useState } from 'react';
import ResetPassword from '../Users/reset_password';

function App(){
    const [authorizationLogin, setAuthorizationLogin] = useState(false);
    const [authorizationResetPass, setAuthorizationResetPass] = useState(false);
    const [passwordChanged, setPasswordChanged] = useState(false);

    const giveAuthorizationLogin = () => {
        setAuthorizationLogin(true);
    }

    const giveAuthorizationResetPass = () => {
        setAuthorizationResetPass(true);
    }

    const passwordReset = () =>{
        setPasswordChanged(true)
    }
    
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Login setAuthorizationLogin={() => giveAuthorizationLogin()} passwordChanged={passwordChanged} setAuthorizationResetPass={() => giveAuthorizationResetPass()} />} />
                <Route exact path='/application' element={<PrincipalPage authorization={ authorizationLogin } />}/>
                <Route exact path='/createAccount' element={<CreateAccount />} />
                <Route exact path='/resetPassword' element={<ResetPassword passwordReset={() => passwordReset()} authorization={authorizationResetPass} />} />
             </Routes> 
        </Router>
    )
}

export default App;