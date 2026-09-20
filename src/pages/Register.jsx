import React, { use, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Register_bg from "../assets/reservation/wood-grain-pattern-gray1x.png";
import Register_side_image from "../assets/others/authentication2.png";
import { Link } from "react-router";
import Sign_in_with from "../components/Sign_in_with";
import {
      loadCaptchaEnginge,
      LoadCanvasTemplate,
      validateCaptcha,
} from "react-simple-captcha";

const Register = () => {
      // state for submit button disabled
      const [disabled, set_disabled] = useState(true);

      // ref for captcha
      const captcha_ref = useRef(null);

      // recaptcha
      useEffect(() => {
            loadCaptchaEnginge(8);
      }, []);

      // handler for register form submit
      const handle_register_submit = (event) => {
            event.preventDefault();

            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const captcha = captcha_ref.current.value;

            event.target.reset();
      };

      // verify captcha
      const handle_verify_captcha = () => {
            const captcha_value = captcha_ref.current.value;
            if (validateCaptcha(captcha_value)) {
                  set_disabled(false);
            } else {
                  set_disabled(true);
                  alert("captcha is not correct");
            }
      };

      return (
            <section
                  className="shadow-md rounded-xl flex flex-col-reverse md:flex-row items-center justify-between gap-20 md:gap-0 p-5 md:p-10"
                  style={{
                        backgroundImage: `url(${Register_bg})`,
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center",
                  }}
            >
                  <Helmet>
                        <title>Harvest Table | Register</title>
                  </Helmet>
                  <div className="w-full md:w-6/12 bg-white p-5 md:p-10 md:mx-30 md:my-20 rounded-xl">
                        <h1 className="text-4xl text-center mb-10">Register</h1>
                        <form
                              onSubmit={handle_register_submit}
                              className="fieldset gap-5"
                        >
                              <fieldset className="fieldset">
                                    <label htmlFor="name">Name</label>
                                    <input
                                          name="name"
                                          type="text"
                                          id="name"
                                          className="input outline-none w-full"
                                          placeholder="Enter your Name"
                                    />
                              </fieldset>
                              <fieldset className="fieldset">
                                    <label htmlFor="email">Email</label>
                                    <input
                                          name="email"
                                          type="email"
                                          id="email"
                                          className="input outline-none w-full"
                                          placeholder=" Enter your Email"
                                    />
                              </fieldset>
                              <fieldset className="fieldset">
                                    <label htmlFor="password">Password</label>
                                    <input
                                          name="password"
                                          type="password"
                                          id="password"
                                          className="input outline-none w-full"
                                          placeholder="Enter your Password"
                                    />
                              </fieldset>
                              <fieldset className="fieldset space-y-3 border border-gray-300 rounded p-3">
                                    <legend className="fieldset-legend">
                                          Recaptcha
                                    </legend>
                                    <LoadCanvasTemplate />
                                    <fieldset className="join">
                                          <input
                                                type="enter-captcha"
                                                id="enter-captcha"
                                                ref={captcha_ref}
                                                className="join-item input outline-none w-full"
                                                placeholder="Enter the Captcha above"
                                          />
                                          {/* verify captcha button */}
                                          <input
                                                type="button"
                                                value={"Verify"}
                                                onClick={handle_verify_captcha}
                                                className="join-item btn btn-primary text-white shadow-none hover:bg-transparent hover:text-black hover:border-primary"
                                          />
                                    </fieldset>
                              </fieldset>
                              <button
                                    type="submit"
                                    disabled={disabled}
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
