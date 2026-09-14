import React from "react";
import Banner_image from "../assets/home/chef-service.jpg";

const Banner = ({ bg_color, text_color, title, desc }) => {
      return (
            <section
                  className={`p-10 md:p-25 rounded-xl ${text_color}`}
                  style={{
                        backgroundImage: `url("${Banner_image}")`,
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center",
                  }}
            >
                  <div
                        className={`p-10 md:p-25 ${bg_color} rounded-xl space-y-5 text-center`}
                  >
                        <h1 className="text-3xl md:text-5xl">{title}</h1>
                        <p>{desc}</p>
                  </div>
            </section>
      );
};

export default Banner;
