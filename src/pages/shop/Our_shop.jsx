import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./../../components/Hero";

import Bg_image from "../../assets/shop/banner2.jpg";

const Our_shop = () => {
      return (
            <section className="h-screen">
                  <Helmet>
                        <title>Harvest Table | Our Shop</title>
                  </Helmet>
                  <Hero
                        bg_url={Bg_image}
                        title={"Our shop"}
                        subtitle={"Would you like to try a dish?"}
                  />
            </section>
      );
};

export default Our_shop;
