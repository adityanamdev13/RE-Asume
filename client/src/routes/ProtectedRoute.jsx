import React from "react";
import { useAuth } from "../context/auth.jsx";
import LoginRequired from "../components/LoginRequired.jsx";
import { Outlet } from "react-router-dom";

const ProtectedRoute = ({handleOpenLogin}) => {
  const [auth] = useAuth();

  if (!auth?.user) {
    return (
      <LoginRequired
        content="Please log in to access this page."
        title="Login Required"
        handleOpenLogin={handleOpenLogin}
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
