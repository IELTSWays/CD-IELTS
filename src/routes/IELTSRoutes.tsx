import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import LayoutIELTS from "@/layouts/LayoutIELTS";

const IELTSRoutes = () => {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    localStorage.getItem("token") ? setAuth(true) : setAuth(false);
  }, [])

  return auth ? (
    <>
      <LayoutIELTS>
        <Outlet />
      </LayoutIELTS>
    </>
  ) : (
    <Navigate to="/otp" />
  );
};

export default IELTSRoutes;