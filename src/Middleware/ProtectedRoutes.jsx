import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const isAuth = localStorage.getItem("token");
  if (!isAuth || isAuth === null) {
    return false;
  }
  return true;
};
function ProtectedRoutes() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to={"/signin"} />;
}

export default ProtectedRoutes;
