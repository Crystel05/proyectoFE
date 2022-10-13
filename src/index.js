import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Common/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ImageUploader from './ReusableComponents/Fields/image_uploader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <ImageUploader />
  </React.StrictMode>
);

reportWebVitals();