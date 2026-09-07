import React from "react";
import { Helmet } from "react-helmet-async";
import Login_bg from "../assets/reservation/wood-grain-pattern-gray1x.png";
import Login_side_image from "../assets/others/authentication2.png";
import { Link } from "react-router";
import Sign_in_with from "../components/Sign_in_with";

const Login = () => {
      return (
            <section
                  className="shadow-xl rounded-xl flex flex-col md:flex-row items-center justify-between gap-20 md:gap-0 p-5 md:p-10"
                  style={{ backgroundImage: `url(${Login_bg})` }}
            >
                  <Helmet>
                        <title>Harvest Table | Login</title>
                  </Helmet>
                  <div className="w-full md:w-8/12 flex flex-row justify-end">
                        <figure>
                              <img src={Login_side_image} alt="" />
                        </figure>
                  </div>
                  <div className="w-full md:w-6/12 bg-white p-5 md:p-10 md:mx-30 md:my-20 rounded-xl">
                        <h1 className="text-4xl text-center mb-10">Login</h1>
                        <form className="fieldset gap-5">
                              <fieldset className="fieldset">
                                    <label htmlFor="email">Email</label>
                                    <input
                                          type="email"
                                          id="email"
                                          className="input outline-none w-full"
                                          placeholder="Email"
                                    />
                              </fieldset>
                              <fieldset className="fieldset">
                                    <label htmlFor="password">Password</label>
                                    <input
                                          type="password"
                                          id="password"
                                          className="input outline-none w-full"
                                          placeholder="Password"
                                    />
                              </fieldset>
                              <fieldset className="fieldset">
                                    <label htmlFor="recaptcha">Recaptcha</label>
                                    <input
                                          type="text"
                                          id="recaptcha"
                                          className="input outline-none w-full"
                                          placeholder="Recaptcha"
                                    />
                              </fieldset>
                              <fieldset className="fieldset">
                                    <input
                                          type="text"
                                          className="input outline-none w-full"
                                          placeholder="Enter Recaptcha"
                                    />
                              </fieldset>
                              <button
                                    type="submit"
                                    className="btn btn-primary text-black"
                              >
                                    Sign In
                              </button>
                        </form>
                        <p className="mt-5 text-primary">
                              Don't have an account?{" "}
                              <Link to={"/register"} className="underline">
                                    Sign Up
                              </Link>
                        </p>
                        <Sign_in_with />
                  </div>
            </section>
      );
};

export default Login;
