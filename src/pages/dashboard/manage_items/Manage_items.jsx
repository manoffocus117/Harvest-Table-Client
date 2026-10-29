import React from "react";
import { Outlet, useLocation } from "react-router";
import Items_list from "./sections/Items_list";

const Manage_items = () => {
      const location = useLocation();

      return (
            <>
                  {location.pathname.startsWith(
                        "/dashboard/manage-items/update-item/",
                  ) ? (
                        <Outlet />
                  ) : (
                        <Items_list />
                  )}
            </>
      );
};

export default Manage_items;
