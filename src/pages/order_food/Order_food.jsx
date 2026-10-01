import React from "react";
import { NavLink, Outlet } from "react-router";
import { Helmet } from "react-helmet-async";
import Hero from "./../../components/Hero";
import Bg_image from "../../assets/shop/banner2.jpg";

const Order_food = () => {
      const food_menu_links = (
            <>
                  <li>
                        <NavLink
                              to={"/order-food/desserts"}
                              className="hover:underline"
                        >
                              Desserts
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to={"/order-food/pizza"}
                              className="hover:underline"
                        >
                              Pizza
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to={"/order-food/salad"}
                              className="hover:underline"
                        >
                              Salad
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to={"/order-food/soups"}
                              className="hover:underline"
                        >
                              Soups
                        </NavLink>
                  </li>
            </>
      );

      return (
            <>
                  <Helmet>
                        <title>Harvest Table | Order Food </title>
                  </Helmet>
                  <Hero
                        bg_url={Bg_image}
                        title={"Order Food"}
                        subtitle={"Would you like to try a dish?"}
                  />
                  <section>
                        {/* menu links */}
                        <menu className="w-full md:w-6/12 mx-auto flex items-center justify-between">
                              {food_menu_links}
                        </menu>
                        {/* main content */}
                        <Outlet />
                  </section>
            </>
      );
};

export default Order_food;
