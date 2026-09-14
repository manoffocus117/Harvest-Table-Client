import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero";

import Bg_image from "../../assets/menu/banner3.jpg";
import useMenu from "./../../hooks/useMenu";
import Todays_offer from "./sections/Todays_offer";

const Our_menu = () => {
      const [menu] = useMenu();

      const todays_offer = menu.filter((item) => item.category === "offered");
      const dessert = menu.filter((item) => item.category === "dessert");
      const pizza = menu.filter((item) => item.category === "pizza");
      const salad = menu.filter((item) => item.category === "salad");
      const soup = menu.filter((item) => item.category === "soup");
      const drinks = menu.filter((item) => item.category === "drinks");

      return (
            <>
                  <Helmet>
                        <title>Harvest Table | Our Menu</title>
                  </Helmet>
                  <Hero
                        bg_url={Bg_image}
                        title={"Our menu"}
                        subtitle={"Would you like to try a dish?"}
                  />
                  <Todays_offer todays_offer={todays_offer} />
            </>
      );
};

export default Our_menu;
