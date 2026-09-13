import React from "react";
import Title from "../components/Title";
import Featured_image from "../assets/home/featured.jpg";
import Button from "../components/Button";

const Featured = () => {
      return (
            <section
                  className="hero min-h-screen rounded-xl"
                  style={{
                        backgroundImage: `url(${Featured_image})`,
                  }}
            >
                  <div className="hero-overlay rounded-xl"></div>
                  <div className="hero-content w-full md:w-8/12 flex-col text-neutral-content">
                        <Title
                              sub_title={"Check it out"}
                              title={"Featured item"}
                        />
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
                                    <Button name={"Read more"} />
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default Featured;
