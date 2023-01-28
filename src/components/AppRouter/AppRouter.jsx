import React from "react";
import { Routes, Route, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { privateRoutes, publicRoutes } from "./routes";
export function AppRouter() {
  const { isAuth, authorize } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    isAuth ? navigate("/account") : navigate("/posts");
  }, [isAuth]);
  React.useEffect(() => {
    const auth = localStorage.getItem("auth");
    auth && authorize();
  }, []);

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map(({ path, element }) => {
            return <Route path={path} element={element} />;
          })
        : publicRoutes.map(({ path, element }) => {
            return <Route path={path} element={element} />;
          })}
    </Routes>
  );
}
