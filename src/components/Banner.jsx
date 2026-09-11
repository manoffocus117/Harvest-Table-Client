import React from "react";
import Banner_image from "../assets/home/chef-service.jpg";

const Banner = () => {
      return (
            <div
                  className="my-25 p-10 md:p-25 rounded-xl"
                  style={{
                        backgroundImage: `url(${Banner_image})`,
                        backgroundRepeat: "no-repeat",
                  }}
            >
                  <div className="p-10 md:p-25 bg-white rounded-xl space-y-5 text-center">
                        <h1 className="text-3xl md:text-5xl">Harvest Table</h1>
                        <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Adipisci doloribus eos, soluta accusamus
                              optio recusandae commodi consequatur? Voluptas,
                              in? Unde vitae ipsum optio aliquid ipsa, nostrum
                              odit perspiciatis ad officia.
                        </p>
                  </div>
            </div>
      );
};

export default Banner;
