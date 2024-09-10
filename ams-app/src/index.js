import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Layout from './components/pages/Layout';
import PublicRoute from './components/pages/PublicRoutes';
import PrivateRoute from './components/pages/PrivateRoute';
import TableWithSearchBorrower from './components/pages/DashboardBorrower';
import { UserLogin } from './components/pages/Login/index';
import { Layout } from './components/pages/Layout';
import TableWithSearch from './components/pages/Manager/dashboard';
import { AboutUs } from './components/pages/AboutUs';
import { Card3 } from './components/organism/Card/index3';
import { Card2 } from './components/organism/Card/index2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<UserLogin />} />
        </Route>

        {/* Protected routes */}
        <Route element={<PrivateRoute />}>
          <Route element= {<Layout />}>
            {/* <Route path="dashboard" element={<Dashboard2 />} /> */}
            {/* <Route path="formRequest" element={<RequestForm />} /> */}

            {/* Routes that only managers can access */}
            <Route element={<PrivateRoute allowedRoles={[2]} />}>
              {/* <Route path="ManagerApprove" element={<ManagerApprove />} /> */}
              <Route path="dashboardManager" element={<TableWithSearch />} />
              <Route path="cardListManajer" element={<Card3 />} />
              <Route path="about-us" element={<AboutUs />} />
            </Route>

            <Route element={<PrivateRoute allowedRoles={[3]} />}>
              <Route path="cardList" element={<Card2 />} />
              <Route path="about-us-borrower" element={<AboutUs />} />
              {/* <Route path="help" element={<Help />} /> */}
              <Route path="dashboardBorrower" element={<TableWithSearchBorrower />} />
            </Route>
          </Route>
        </Route>


      </Routes>
    </BrowserRouter>
  </Provider>

);

reportWebVitals();
