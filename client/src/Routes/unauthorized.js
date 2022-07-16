import { URL_LOGIN, URL_REGISTER} from "../Helpers/urls";
import Login from "../pages/Login"
import Register from "../pages/Register"

const unauthorizedRoutes = [
    {
        path: URL_REGISTER,
        Component: Register
    },
    {
        path: URL_LOGIN,
        Component: Login
    }
]

export default unauthorizedRoutes;