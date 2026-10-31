import React from "react";
import { Outlet, useLocation } from "react-router";
import My_cart_items from "./sections/My_cart_items";

const My_cart = () => {
      const location = useLocation();

      return (
            <>
                  {location.pathname.startsWith(
                        "/dashboard/my-cart/payment",
                  ) ? (
                        <Outlet />
                  ) : (
                        <My_cart_items />
                  )}
            </>
      );
};

export default My_cart;
