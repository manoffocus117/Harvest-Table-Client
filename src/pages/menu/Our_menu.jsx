import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero";

import Bg_image from "../../assets/menu/banner3.jpg";

const Our_menu = () => {
      return (
            <section>
                  <Helmet>
                        <title>Harvest Table | Our Menu</title>
                  </Helmet>
                  <Hero
                        bg_url={Bg_image}
                        title={"Our menu"}
                        subtitle={"Would you like to try a dish?"}
                  />
            </section>
      );
};

export default Our_menu;
