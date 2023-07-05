import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './Layout';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Cards from './Cards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
