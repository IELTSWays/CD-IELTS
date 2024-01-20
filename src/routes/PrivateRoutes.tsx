import { useState, useEffect } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import LayoutIELTS from "@/layouts/LayoutIELTS";
import LayoutDashborad from "@/layouts/LayoutDashborad";

const PrivateRoutes = () => {
  const [auth, setAuth] = useState(true);
  const [pathIELTS, setPathIELTS] = useState(false)

  const location = useLocation();

  useEffect(() => {
    localStorage.getItem("token") ? setAuth(true) : setAuth(false);
  }, [])

  useEffect(() => {
    setPathIELTS(location.pathname.includes('IELTS'))
  }, [])

  return auth ? (
    <>
      {pathIELTS ?
      <LayoutIELTS>
        <Outlet />
      </LayoutIELTS>
      :
      <LayoutDashborad>
        <Outlet />
      </LayoutDashborad>
      }
    </>
  ) : (
    <Navigate to="/otp" />
  );
};

export default PrivateRoutes;