import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./../../components/Hero";

import Bg_image from "../../assets/shop/banner2.jpg";
import useMenu from "./../../hooks/useMenu";
import Desserts from "./sections/Desserts";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Salad from "./sections/Salad";
import Pizza from "./sections/Pizza";
import Soups from "./sections/Soups";
import { useParams } from "react-router";

const Our_shop = () => {
      const categories = ["dessert", "pizza", "salad", "soup"];
      const { category } = useParams();
      const initial_index = categories.indexOf(category);

      const [menu] = useMenu();
      const [tab_index, set_tab_index] = useState(initial_index);

      const desserts = menu.filter((item) => item.category === "dessert");
      const pizza = menu.filter((item) => item.category === "pizza");
      const salad = menu.filter((item) => item.category === "salad");
      const soup = menu.filter((item) => item.category === "soup");

      return (
            <>
                  <Helmet>
                        <title>Harvest Table | Order </title>
                  </Helmet>
                  <Hero
                        bg_url={Bg_image}
                        title={"Order Food"}
                        subtitle={"Would you like to try a dish?"}
                  />
                  <section>
                        <Tabs
                              defaultIndex={tab_index}
                              onSelect={(index) => set_tab_index(index)}
                        >
                              <TabList>
                                    <Tab>Dessert</Tab>
                                    <Tab>Pizza</Tab>
                                    <Tab>Salad</Tab>
                                    <Tab>Soups</Tab>
                              </TabList>
                              <TabPanel>
                                    <Desserts desserts={desserts} />
                              </TabPanel>
                              <TabPanel>
                                    <Pizza pizza={pizza} />
                              </TabPanel>
                              <TabPanel>
                                    <Salad salad={salad} />
                              </TabPanel>
                              <TabPanel>
                                    <Soups soup={soup} />
                              </TabPanel>
                        </Tabs>
                  </section>
            </>
      );
};

export default Our_shop;
