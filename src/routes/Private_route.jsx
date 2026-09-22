import React, { useContext } from "react";
import Auth_context from "../context/Auth_context";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

const Private_route = ({ children }) => {
      const { user, loading } = useContext(Auth_context);
      const location = useLocation();

      if (loading) {
            return <Loading />;
      }

      if (user && user?.email) {
            return children;
      }

      return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default Private_route;
