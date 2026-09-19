import React from "react";
import Title from "./../../../components/Title";
import { RiMapPin2Fill, RiPhoneFill, RiTimeFill } from "@remixicon/react";

const Location = () => {
      return (
            <section>
                  <Title title={"Contact Us"} sub_title={"Visit Us"} />
                  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
                        <div className="card border border-gray-200">
                              <figure className="card-title bg-primary p-5">
                                    <RiPhoneFill className="text-white text-2xl w-8 h-8" />
                              </figure>
                              <div className="card-body items-center bg-base-300 p-10 mx-5 mb-5 rounded-b-md">
                                    <h3 className="text-3xl">Phone</h3>
                                    <p className="text-xl">+88 01234567890</p>
                              </div>
                        </div>
                        <div className="card border border-gray-200">
                              <figure className="card-title bg-primary p-5">
                                    <RiMapPin2Fill className="text-white text-2xl w-8 h-8" />
                              </figure>
                              <div className="card-body items-center bg-base-300 p-10 mx-5 mb-5 rounded-b-md">
                                    <h3 className="text-3xl">Address</h3>
                                    <p className="text-xl">
                                          Somewhere in Bangladesh
                                    </p>
                              </div>
                        </div>
                        <div className="card border border-gray-200">
                              <figure className="card-title bg-primary p-5">
                                    <RiTimeFill className="text-white text-2xl w-8 h-8" />
                              </figure>
                              <div className="card-body items-center bg-base-300 p-10 mx-5 mb-5 rounded-b-md">
                                    <h3 className="text-3xl">Phone</h3>
                                    <p className="text-xl">+88 01234567890</p>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default Location;
