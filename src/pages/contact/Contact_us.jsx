import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero";

import Contact_bg from "../../assets/contact/banner.jpg";
import Location from "./sections/Location";
import Contact_form from "./sections/Contact_form";

const Contact_us = () => {
      return (
            <>
                  <Helmet>
                        <title>Harvest Table | Contact Us</title>
                  </Helmet>
                  <Hero
                        bg_url={Contact_bg}
                        title={"Contact Us"}
                        subtitle={"Would you like to try a dish?"}
                  />
                  <Location />
                  <Contact_form />
            </>
      );
};

export default Contact_us;
