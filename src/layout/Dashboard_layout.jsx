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

const Dashboard_layout = () => {
      const dashboard_links = (
            <>
                  <li>
                        <NavLink
                              to={"/dashboard/user-home"}
                              className="flex items-center gap-2"
                        >
                              <RiHome4Line /> User Home
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to={"/dashboard/reservation"}
                              className="flex items-center gap-2"
                        >
                              <RiCalendarLine /> Reservation
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to={"/dashboard/payment-history"}
                              className="flex items-center gap-2"
                        >
                              <RiWallet2Line /> Payment History
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to={"/dashboard/my-cart"}
                              className="flex items-center gap-2"
                        >
                              <RiShoppingCart2Line /> My Cart
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to={"/dashboard/add-review"}
                              className="flex items-center gap-2"
                        >
                              <RiFeedbackLine /> Add Review
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to={"/dashboard/my-booking"}
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
                        <title>Harvest Table | Dashboard</title>
                  </Helmet>
                  <section className="grid grid-cols-8">
                        {/* dashboard sidebar */}
                        <div className="col-span-2 h-full bg-primary p-10 rounded-l-2xl">
                              <menu className="flex flex-col gap-5">
                                    {dashboard_links}
                              </menu>
                        </div>
                        {/* dashboard main content */}
                        <div className="col-span-6 bg-base-300 p-10 rounded-r-2xl">
                              <h1>dashboard right side</h1>
                              <Outlet />
                        </div>
                  </section>
                  <Footer />
            </>
      );
};

export default Dashboard_layout;
