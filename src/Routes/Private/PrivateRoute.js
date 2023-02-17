import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MyContext } from "../../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(MyContext);

  let location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
