import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
      RiCalendarLine,
      RiCalendarScheduleLine,
      RiFeedbackLine,
      RiHome4Line,
      RiShoppingCart2Line,
      RiWallet2Line,
} from "@remixicon/react";

const User_dashboard = () => {
      const dashboard_links = (
            <>
                  <li>
                        <NavLink
                              to={"/user-dashboard/user-home"}
                              className="flex items-center gap-2"
                        >
                              <RiHome4Line /> User Home
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to={"/user-dashboard/reservation"}
                              className="flex items-center gap-2"
                        >
                              <RiCalendarLine /> Reservation
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to={"/user-dashboard/payment-history"}
                              className="flex items-center gap-2"
                        >
                              <RiWallet2Line /> Payment History
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to={"/user-dashboard/my-cart"}
                              className="flex items-center gap-2"
                        >
                              <RiShoppingCart2Line /> My Cart
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to={"/user-dashboard/add-review"}
                              className="flex items-center gap-2"
                        >
                              <RiFeedbackLine /> Add Review
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to={"/user-dashboard/my-booking"}
                              className="flex items-center gap-2"
                        >
                              <RiCalendarScheduleLine /> My Booking
                        </NavLink>
                  </li>
            </>
      );
      return (
            <>
                  <Header />
                  <Helmet>
                        <title>Harvest Table | User Dashboard</title>
                  </Helmet>
                  <section className="grid grid-cols-1 md:grid-cols-8">
                        {/* dashboard sidebar */}
                        <div className="col-span-2 h-full p-10 border border-gray-300 border-b-0 md:border-b dashboard-left-border-radius">
                              <menu className="flex flex-col gap-5">
                                    {dashboard_links}
                              </menu>
                        </div>
                        {/* dashboard main content */}
                        <div className="col-span-6 bg-base-300 p-4 md:p-10 border border-gray-300 md:border-l-0 dashboard-right-border-radius">
                              <Outlet />
                        </div>
                  </section>
                  <Footer />
            </>
      );
};

export default User_dashboard;
