import React from "react";
import Error_404 from "../assets/404.gif";

const Not_found = () => {
      return (
            <section className="w-full h-screen mx-auto my-0! flex items-center justify-center">
                  <figure>
                        <img src={Error_404} alt="" />
                  </figure>
            </section>
      );
};

export default Not_found;
