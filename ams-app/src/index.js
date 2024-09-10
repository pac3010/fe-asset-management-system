import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './components/pages/Register';
import Modals from './components/pages/Modals';
import DashboardAdmin from './components/pages/DashboardAdmin';
import Dashboard from './components/pages/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Register /> */}
    <DashboardAdmin />
    {/* <Dashboard /> */}
    {/* <Modals /> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
