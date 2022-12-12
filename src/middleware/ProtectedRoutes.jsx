import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../layouts/Layout/Header";

const useAuth = () => {
  const isAuth = localStorage.getItem("token");
  if (!isAuth || isAuth === null) {
    return false;
  }
  return true;
};
function ProtectedRoutes() {
  const auth = useAuth();
  return (
    <>
      <Header />

      {auth ? <Outlet /> : <Navigate to={"/auth/signin"} />
      }

    </>
  );
}

export default ProtectedRoutes;
