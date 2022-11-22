import React from "react";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Login from "../pages/Login";
import AppRouter from "./AppRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const LoginRouter = () => {
  const { log } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute auth={log}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute auth={log}>
              <AppRouter />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default LoginRouter;
