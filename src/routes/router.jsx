import React from "react";
import { createBrowserRouter } from "react-router";
import Root_layout from "../layout/Root_layout";
import Home from "../pages/Home";
import Our_menu from "../pages/Our_menu";
import Our_shop from "../pages/Our_shop";
import Contact_us from "../pages/Contact_us";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Not_found";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
      {
            path: "/",
            Component: Root_layout,
            children: [
                  {
                        index: true,
                        Component: Home,
                  },
                  {
                        path: "our-menu",
                        Component: Our_menu,
                  },
                  {
                        path: "our-shop",
                        Component: Our_shop,
                  },
                  {
                        path: "contact-us",
                        Component: Contact_us,
                  },
                  {
                        path: "dashboard",
                        Component: Dashboard,
                  },
                  {
                        path: "login",
                        Component: Login,
                  },
                  {
                        path: "register",
                        Component: Register,
                  },
            ],
      },
      {
            path: "*",
            Component: Error,
      },
]);

export default router;
