import React from "react";
import { createBrowserRouter, Navigate } from "react-router";
import Root_layout from "../layout/Root_layout";
import Home from "../pages/home/Home";
import Our_menu from "../pages/menu/Our_menu";
import Order_food from "../pages/order_food/Order_food";
import Contact_us from "../pages/contact/Contact_us";
import Error from "../pages/Not_found";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Profile from "../pages/Profile";
import Private_route from "./Private_route";
import Dashboard_layout from "../layout/Dashboard_layout";
import My_cart from "../pages/user_dashboard/My_cart";
import User_home from "./../pages/user_dashboard/User_home";
import Reservation from "./../pages/user_dashboard/Reservation";
import Payment_history from "./../pages/user_dashboard/Payment_history";
import Add_review from "./../pages/user_dashboard/Add_review";
import My_booking from "./../pages/user_dashboard/My_booking";
import Desserts from "../pages/order_food/sections/Desserts";
import Pizza from "../pages/order_food/sections/Pizza";
import Salad from "../pages/order_food/sections/Salad";
import Soups from "../pages/order_food/sections/Soups";

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
                        path: "order-food",
                        Component: Order_food,
                        children: [
                              {
                                    index: true,
                                    Component: () => (
                                          <Navigate to={"desserts"} replace />
                                    ),
                              },
                              {
                                    path: "desserts",
                                    Component: Desserts,
                              },
                              {
                                    path: "pizza",
                                    Component: Pizza,
                              },
                              {
                                    path: "salad",
                                    Component: Salad,
                              },
                              {
                                    path: "soups",
                                    Component: Soups,
                              },
                        ],
                  },
                  {
                        path: "contact-us",
                        Component: Contact_us,
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
            path: "dashboard",
            element: (
                  <Private_route>
                        <Dashboard_layout />
                  </Private_route>
            ),
            children: [
                  {
                        index: true,
                        Component: () => <Navigate to="user-home" replace />,
                  },
                  {
                        path: "user-home",
                        Component: User_home,
                  },
                  {
                        path: "reservation",
                        Component: Reservation,
                  },
                  {
                        path: "payment-history",
                        Component: Payment_history,
                  },
                  {
                        path: "my-cart",
                        Component: My_cart,
                  },
                  {
                        path: "add-review",
                        Component: Add_review,
                  },
                  {
                        path: "my-booking",
                        Component: My_booking,
                  },
            ],
      },
      {
            path: "*",
            Component: Error,
      },
]);

export default router;
