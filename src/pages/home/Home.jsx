import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./sections/Hero";
import Category from "./sections/Category";
import Banner from "../../components/Banner";
import Menu from "./sections/Menu";
import Chef_recommends from "./sections/Chef_recommends";
import Featured from "./sections/Featured";
import Testimonials from "./sections/Testimonials";

const Home = () => {
      return (
            <>
                  <Helmet>
                        <title>Harvest Table | Home</title>
                  </Helmet>
                  <Hero />
                  <Category />
                  <Banner bg_color={"bg-white"} />
                  <Menu />
                  <Chef_recommends />
                  <Featured />
                  <Testimonials />
            </>
      );
};

export default Home;
