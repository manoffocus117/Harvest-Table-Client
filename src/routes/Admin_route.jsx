import React, { useContext } from "react";
import Auth_context from "../context/Auth_context";
import useAdmin from "../hooks/useAdmin";
import Loading from "./../components/Loading";
import { Navigate, useLocation } from "react-router";

const Admin_route = ({ children }) => {
      const { user, loading } = useContext(Auth_context);
      const [is_admin, is_admin_loading] = useAdmin();
      const location = useLocation();

      if (loading || is_admin_loading) {
            return <Loading />;
      }
      if (user && is_admin) {
            return children;
      }
      return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default Admin_route;
