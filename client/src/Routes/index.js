import React, { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { URL_LOGIN, URL_REGISTER } from "../Helpers/urls";
import ProtectedRoute from "./protected";
import { useSelector } from "react-redux";

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

export const AppRoutes = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={URL_REGISTER} element={<Register />} />
        <Route path={URL_LOGIN} element={<Login />} />
        {ProtectedRoute.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              token ? <Component /> : <Navigate to={Login} replace={true} />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
