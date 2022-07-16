import { URL_DASHBOARD } from '../Helpers/urls';
import Dashboard from "../pages/Dashboard"

const ProtectedRoute = [
    {
        path : URL_DASHBOARD,
        Component : Dashboard,
    }
];

export default ProtectedRoute;