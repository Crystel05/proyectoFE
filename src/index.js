import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Common/App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const cors = require('cors')

root.render(

  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();