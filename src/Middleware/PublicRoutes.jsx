import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const isAuth = localStorage.getItem("token");
  if (!isAuth) {
    return false;
  }
  return true;
};
function PublicRoutes() {
  const auth = useAuth();
  return auth ? <Navigate to={"/dashboard"} /> : <Outlet />;
}

export default PublicRoutes;
