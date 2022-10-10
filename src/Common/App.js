import '../App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrincipalPage from '../Common/principal_page';
import Login from '../Users/login';
import CreateAccount from '../Users/create_account';

function App(){
    return(
        <Router>
            <Routes>
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/application' element={<PrincipalPage />}/>
                <Route exact path='/createAccount' element={<CreateAccount  />} />
            </Routes> 
        </Router>
    )
}

export default App;