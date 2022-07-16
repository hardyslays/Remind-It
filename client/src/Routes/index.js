import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protected";
import unauthorizedRoutes from "./unauthorized";
import { useSelector } from "react-redux";
import { URL_HOME, URL_LOGIN, URL_DASHBOARD } from "../Helpers/urls";
import Navbar from "../Components/Navbar/Navbar";

import Home from "../pages/Home";

export const AppRoutes = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <BrowserRouter>

      <Routes>
        <Route path={URL_HOME} element={<Home />} exact />

        {unauthorizedRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              !token ? (
                <Component />
              ) : (
                <Navigate to={URL_DASHBOARD} replace={true} />
              )
            }
          />
        ))}

        {ProtectedRoute.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              token ? <Component /> : <Navigate to={URL_LOGIN} replace={true} />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
