import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PrincipalPage from './Common/principal_page';
import reportWebVitals from './reportWebVitals';
import ImageCarousel from './Edition/Carousel/carrousel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrincipalPage/>
    {/* <ImageCarousel></ImageCarousel> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();