import { lazy } from 'react';
import { URL_DASHBOARD,URL_HOME } from '../Helpers/urls';
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
// const Dashboard = lazy(()=> import('../pages/Dashboard'));
// const Home = lazy(()=> import('../pages/Home'));


const ProtectedRoute = [
    {
        path : URL_DASHBOARD,
        Component : Dashboard,
    }
];

export default ProtectedRoute;