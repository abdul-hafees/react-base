import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Login from './components/auth/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Register from './components/auth/Register';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import GuestRoute from './components/auth/GuestRoute';
import AuthProvider from './components/context/AuthContext';
// import "@fortawesome/fontawesome-free/css/all.min.css";
const router = createBrowserRouter([
  {
    path: "/login",
    element:<GuestRoute><Login /></GuestRoute>,
  },
  {
    path: "/register",
    element:<GuestRoute><Register /></GuestRoute>,
  },
  {
    path: "/",
    element:<ProtectedRoute><Dashboard /></ProtectedRoute>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
