import React from "react";
import { Helmet } from "react-helmet-async";
import Login_bg from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import Login_side_image from "../../assets/others/authentication2.png";
import Login_form from "./sections/Login_form";

const Login = () => {
      return (
            <section
                  className="shadow-md rounded-xl flex flex-col md:flex-row items-center justify-between gap-20 md:gap-0 p-5 md:p-10"
                  style={{
                        backgroundImage: `url(${Login_bg})`,
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center",
                  }}
            >
                  <Helmet>
                        <title>Harvest Table | Login</title>
                  </Helmet>
                  <div className="w-full md:w-8/12 flex flex-row justify-end">
                        <figure>
                              <img src={Login_side_image} alt="" />
                        </figure>
                  </div>
                  <Login_form />
            </section>
      );
};

export default Login;
