import React from "react";
import { Navigate } from "react-router";
import useAdmin from "../hooks/useAdmin";
import Loading from "./Loading";

const Dashboard_index = () => {
      const [is_admin, is_admin_loading] = useAdmin();

      if (is_admin_loading) {
            return <Loading />;
      }

      if (is_admin) {
            return <Navigate to="admin-home" replace />;
      }

      return <Navigate to="user-home" replace />;
};

export default Dashboard_index;
