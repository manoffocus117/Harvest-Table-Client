import React from "react";
import Featured_image from "../../../assets/home/featured.jpg";

const Featured = () => {
      return (
            <section
                  className="hero min-h-screen rounded-xl"
                  style={{
                        backgroundImage: `url("${Featured_image}")`,
                        backgroundAttachment: "fixed",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                  }}
            >
                  <div className="hero-overlay rounded-xl"></div>
                  <div className="hero-content w-full md:w-8/12 flex-col text-neutral-content">
                        <div className="my-12 w-full md:w-4/12 mx-auto">
                              <h3 className="text-xl text-center text-primary">
                                    --- Check it out ---
                              </h3>
                              <span className="divider before:bg-white after:bg-white"></span>
                              <h1 className="text-3xl md:text-5xl text-center">
                                    From our menu
                              </h1>
                              <span className="divider before:bg-white after:bg-white"></span>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-10">
                              <figure className="w-full md:w-162">
                                    <img
                                          src={Featured_image}
                                          alt="featured item"
                                          className="rounded-md"
                                    />
                              </figure>
                              <div className="w-8/12">
                                    <p className="mb-5 text-justify">
                                          <span>March 20, 2023</span> <br />
                                          <span>
                                                WHERE CAN I GET SOME?
                                          </span>{" "}
                                          <br /> Lorem ipsum dolor sit amet
                                          consectetur adipisicing elit. Error
                                          voluptate facere, deserunt dolores
                                          maiores quod nobis quas quasi. Eaque
                                          repellat recusandae ad laudantium
                                          tempore consequatur consequuntur omnis
                                          ullam maxime tenetur.
                                    </p>
                                    <button className="btn bg-transparent shadow-none border-0 border-b-2 border-white text-white px-4 py-2 rounded-md capitalize hover:bg-primary hover:border-none">
                                          Read more
                                    </button>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default Featured;
