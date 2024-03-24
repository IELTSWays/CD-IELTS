import React from "react";

import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import LayoutConfirm from "@/layouts/LayoutConfirm";

const ConfirmRoutes = () => {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    localStorage.getItem("token") ? setAuth(true) : setAuth(false);
  }, [])

  return auth ? (
    <>
      <LayoutConfirm>
        <Outlet />
      </LayoutConfirm>
    </>
  ) : (
    <Navigate to="/otp" />
  );
};

export default ConfirmRoutes;