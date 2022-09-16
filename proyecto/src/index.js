import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <BrowserRouter>
   <App />
  </BrowserRouter>

);
