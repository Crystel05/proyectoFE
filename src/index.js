import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Common/App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <App/>
    {/* <Map latitude={9.9046} longitude={-83.6835} places={placesPlaceHolder}/> */}
  </React.StrictMode>
);

reportWebVitals();