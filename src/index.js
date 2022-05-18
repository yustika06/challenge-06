import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageAdmin } from './Pages/PageAdmin/PageAdmin';
import { App } from './Routes/App';
import { Pageuser } from './Pages/PageUser/Pageuser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

