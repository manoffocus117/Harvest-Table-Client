import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
      RiBookletLine,
      RiCalendarLine,
      RiCalendarScheduleLine,
      RiFeedbackLine,
      RiGroupLine,
      RiHome4Line,
      RiListSettingsLine,
      RiRestaurant2Line,
      RiShoppingCart2Line,
      RiWallet2Line,
} from "@remixicon/react";
import Scroll_to_top from "../components/Scroll_to_top";

const Dashboard = () => {
      // admin permission
      const is_admin = true;

      const user_dashboard_links = (
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

      const admin_dashboard_links = (
            <>
                  <li>
                        <NavLink
                              to={"/dashboard/admin-home"}
                              className="flex items-center gap-2"
                        >
                              <RiHome4Line /> Admin Home
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to={"/dashboard/add-item"}
                              className="flex items-center gap-2"
                        >
                              <RiRestaurant2Line /> Add Item
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to={"/dashboard/manage-items"}
                              className="flex items-center gap-2"
                        >
                              <RiListSettingsLine /> Manage Items
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to={"/dashboard/manage-bookings"}
                              className="flex items-center gap-2"
                        >
                              <RiBookletLine /> Manage Bookings
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to={"/dashboard/all-users"}
                              className="flex items-center gap-2"
                        >
                              <RiGroupLine /> All Users
                        </NavLink>
                  </li>
            </>
      );
      return (
            <>
                  <Scroll_to_top />
                  <Header />
                  <Helmet>
                        <title>Harvest Table | User Dashboard</title>
                  </Helmet>
                  <section className="grid grid-cols-1 md:grid-cols-8">
                        {/* dashboard sidebar */}
                        <div className="col-span-2 h-full p-10 border border-gray-300 border-b-0 md:border-b dashboard-left-border-radius">
                              <menu className="flex flex-col gap-5">
                                    {is_admin
                                          ? admin_dashboard_links
                                          : user_dashboard_links}
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

export default Dashboard;
