import React from "react";
import { Helmet } from "react-helmet-async";
import Register_bg from "../assets/reservation/wood-grain-pattern-gray1x.png";
import Register_side_image from "../assets/others/authentication2.png";
import { Link } from "react-router";
import Sign_in_with from "../components/Sign_in_with";

const Register = () => {
      return (
            <section
                  className="shadow-xl rounded-xl flex flex-col md:flex-row items-center justify-between gap-20 md:gap-0 p-5 md:p-10"
                  style={{ backgroundImage: `url(${Register_bg})` }}
            >
                  <Helmet>
                        <title>Harvest Table | Register</title>
                  </Helmet>
                  <div className="w-full md:w-6/12 bg-white p-5 md:p-10 md:mx-30 md:my-20 rounded-xl">
                        <h1 className="text-4xl text-center mb-10">Register</h1>
                        <form className="fieldset gap-5">
                              <fieldset className="fieldset">
                                    <label htmlFor="name">Name</label>
                                    <input
                                          type="text"
                                          id="name"
                                          className="input outline-none w-full"
                                          placeholder="Enter your Name"
                                    />
                              </fieldset>
                              <fieldset className="fieldset">
                                    <label htmlFor="email">Email</label>
                                    <input
                                          type="email"
                                          id="email"
                                          className="input outline-none w-full"
                                          placeholder=" Enter your Email"
                                    />
                              </fieldset>
                              <fieldset className="fieldset">
                                    <label htmlFor="password">Password</label>
                                    <input
                                          type="password"
                                          id="password"
                                          className="input outline-none w-full"
                                          placeholder="Enter your Password"
                                    />
                              </fieldset>
                              <button
                                    type="submit"
                                    className="btn btn-primary text-white shadow-none hover:bg-transparent hover:text-black hover:border-primary"
                              >
                                    Sign Up
                              </button>
                        </form>
                        <p className="mt-5 text-primary">
                              Already have an account?{" "}
                              <Link to={"/login"} className="underline">
                                    Sign In
                              </Link>
                        </p>
                        <Sign_in_with />
                  </div>
                  <div className="w-full md:w-8/12 flex flex-row justify-end">
                        <figure>
                              <img src={Register_side_image} alt="" />
                        </figure>
                  </div>
            </section>
      );
};

export default Register;
