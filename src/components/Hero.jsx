import React from "react";

const Hero = ({ bg_url, title, subtitle }) => {
      return (
            <section
                  className="hero py-25 rounded-xl"
                  style={{
                        backgroundImage: `url("${bg_url}")`,
                        backgroundAttachment: "fixed",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                  }}
            >
                  <div className="hero-content w-9/12 py-35 rounded-xl bg-black/60 text-white text-center">
                        <div className="max-w-md">
                              <h1 className="mb-5 text-8xl font-bold">
                                    {title}
                              </h1>
                              <p className="mb-5 text-2xl">{subtitle}</p>
                        </div>
                  </div>
            </section>
      );
};

export default Hero;
