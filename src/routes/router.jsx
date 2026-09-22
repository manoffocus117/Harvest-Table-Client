import React from "react";
import { createBrowserRouter } from "react-router";
import Root_layout from "../layout/Root_layout";
import Home from "../pages/home/Home";
import Our_menu from "../pages/menu/Our_menu";
import Order from "../pages/order/Order";
import Contact_us from "../pages/contact/Contact_us";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Not_found";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Profile from "../pages/Profile";
import Private_route from "./Private_route";

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
                        path: "order/:category",
                        Component: Order,
                  },
                  {
                        path: "contact-us",
                        Component: Contact_us,
                  },
                  {
                        path: "dashboard",
                        element: (
                              <Private_route>
                                    <Dashboard />
                              </Private_route>
                        ),
                  },
                  {
                        path: "login",
                        Component: Login,
                  },
                  {
                        path: "register",
                        Component: Register,
                  },
                  {
                        path: "profile",
                        element: (
                              <Private_route>
                                    <Profile />
                              </Private_route>
                        ),
                  },
            ],
      },
      {
            path: "*",
            Component: Error,
      },
]);

export default router;
