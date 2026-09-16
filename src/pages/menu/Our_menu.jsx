import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero";

import Bg_image from "../../assets/menu/banner3.jpg";
import useMenu from "./../../hooks/useMenu";
import Title from "./../../components/Title";
import Menu_category from "./sections/Menu_category";

import Dessert_bg from "../../assets/menu/dessert-bg.jpeg";
import Pizza_bg from "../../assets/menu/pizza-bg.jpg";
import Salad_bg from "../../assets/menu/salad-bg.jpg";
import Soup_bg from "../../assets/menu/soup-bg.jpg";

const Our_menu = () => {
      const [menu] = useMenu();

      const todays_offer = menu.filter((item) => item.category === "offered");
      const desserts = menu.filter((item) => item.category === "dessert");
      const pizza = menu.filter((item) => item.category === "pizza");
      const salad = menu.filter((item) => item.category === "salad");
      const soup = menu.filter((item) => item.category === "soup");

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
                  {/* today's offer */}
                  <Title title={"Today's offer"} sub_title={"Don't miss"} />
                  {/* todays offer items */}
                  <Menu_category items={todays_offer} />

                  {/* desserts items */}
                  <Menu_category
                        items={desserts}
                        bg_img={Dessert_bg}
                        title={"dessert"}
                        subtitle={"this is some desserts"}
                  />

                  {/* pizza items */}
                  <Menu_category
                        items={pizza}
                        bg_img={Pizza_bg}
                        title={"pizza"}
                        subtitle={"this is some pizza"}
                  />

                  {/* salad items */}
                  <Menu_category
                        items={salad}
                        bg_img={Salad_bg}
                        title={"salad"}
                        subtitle={"this is some salad"}
                        button_text={"order salad"}
                  />

                  {/* soup items */}
                  <Menu_category
                        items={soup}
                        bg_img={Soup_bg}
                        title={"soup"}
                        subtitle={"this is some soup"}
                  />
            </>
      );
};

export default Our_menu;
