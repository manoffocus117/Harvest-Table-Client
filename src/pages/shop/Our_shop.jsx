import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./../../components/Hero";

import Bg_image from "../../assets/shop/banner2.jpg";
import useMenu from "./../../hooks/useMenu";
import Desserts from "./sections/Desserts";

const Our_shop = () => {
      const [menu] = useMenu();
      const desserts = menu.filter((item) => item.category === "dessert");

      return (
            <>
                  <Helmet>
                        <title>Harvest Table | Our Shop</title>
                  </Helmet>
                  <Hero
                        bg_url={Bg_image}
                        title={"Our shop"}
                        subtitle={"Would you like to try a dish?"}
                  />
                  <Desserts desserts={desserts} />
            </>
      );
};

export default Our_shop;
