import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {Testcontext }from './Testcontext.jsx';
import { Provider } from 'react-redux';
import appstore from './Appstore.js';

const message="hello you are in"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appstore}>
    <Testcontext value={{message}}>
   <App></App></Testcontext>
   </Provider>
  </StrictMode>
);
