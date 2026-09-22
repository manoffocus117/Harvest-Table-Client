import React from "react";
import { Helmet } from "react-helmet-async";
import Register_bg from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import Register_side_image from "../../assets/others/authentication2.png";
import Register_form from "./sections/Register_form";

const Register = () => {
      return (
            <section
                  className="shadow-md rounded-xl flex flex-col-reverse md:flex-row items-center justify-between gap-20 md:gap-0 p-5 md:p-10"
                  style={{
                        backgroundImage: `url(${Register_bg})`,
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center",
                  }}
            >
                  <Helmet>
                        <title>Harvest Table | Register</title>
                  </Helmet>
                  <Register_form />
                  <div className="w-full md:w-8/12 flex flex-row justify-end">
                        <figure>
                              <img src={Register_side_image} alt="" />
                        </figure>
                  </div>
            </section>
      );
};

export default Register;
