import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
// import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import Login from 'src/components/custom/Login/Index';
import EInvoicing from 'src/components/custom/E-Invoicing/Index';
import Import from 'src/components/custom/E-Invoicing/Import';
import Mapping from 'src/components/custom/E-Invoicing/Mapping';
import MappingFields from 'src/components/custom/E-Invoicing/MappingFields';
import Test from 'src/views/Test';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'test', element: <Test /> },
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'mappingFields', element: <MappingFields /> },
      { path: 'login', element: <Login /> },
      { path: 'einvoicing', element: <EInvoicing /> },
      { path: 'import', element: <Import /> },
      { path: 'Mapping', element: <Mapping /> },
      // { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
