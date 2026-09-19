import React, { use, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Login_bg from "../assets/reservation/wood-grain-pattern-gray1x.png";
import Login_side_image from "../assets/others/authentication2.png";
import { Link } from "react-router";
import Sign_in_with from "../components/Sign_in_with";
import {
      loadCaptchaEnginge,
      LoadCanvasTemplate,
      validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
      // state for submit button disabled
      const [disabled, set_disabled] = useState(true);

      // ref for captcha
      const captcha_ref = useRef(null);

      // recaptcha
      useEffect(() => {
            loadCaptchaEnginge(8);
      }, []);

      // login form handler
      const handle_login_submit = (event) => {
            event.preventDefault();
      };

      // verify captcha
      const handle_verify_captcha = () => {
            const captcha_value = captcha_ref.current.value;
            if (validateCaptcha(captcha_value)) {
                  set_disabled(false);
            } else {
                  set_disabled(true);
            }
      };

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
                  <div className="w-full md:w-6/12 bg-white p-5 md:p-10 md:mx-30 md:my-20 rounded-xl">
                        <h1 className="text-4xl text-center mb-10">Login</h1>
                        <form
                              onSubmit={handle_login_submit}
                              className="fieldset gap-5"
                        >
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
                              <fieldset className="fieldset space-y-3">
                                    <label htmlFor="recaptcha">Recaptcha</label>
                                    <LoadCanvasTemplate />
                                    <fieldset className="join">
                                          <input
                                                type="enter-captcha"
                                                id="enter-captcha"
                                                ref={captcha_ref}
                                                className="join-item input outline-none w-full"
                                                placeholder="Enter the Captcha above"
                                          />
                                          <button
                                                onClick={handle_verify_captcha}
                                                className="join-item btn btn-primary text-white shadow-none hover:bg-transparent hover:text-black hover:border-primary"
                                          >
                                                Verify
                                          </button>
                                    </fieldset>
                              </fieldset>
                              <button
                                    type="submit"
                                    disabled={disabled}
                                    className="btn btn-primary text-white shadow-none hover:bg-transparent hover:text-black hover:border-primary"
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
