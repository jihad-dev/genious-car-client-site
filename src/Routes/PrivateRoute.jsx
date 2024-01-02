import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return <h1 className="text-5xl">Loading....</h1>
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
