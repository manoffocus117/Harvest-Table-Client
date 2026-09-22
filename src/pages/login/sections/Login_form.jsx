import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import Sign_in_with from "../../../components/Sign_in_with";
import {
      loadCaptchaEnginge,
      LoadCanvasTemplate,
      validateCaptcha,
} from "react-simple-captcha";
import Auth_context from "../../../context/Auth_context";
import Swal from "sweetalert2";

const Login_form = () => {
      // state for submit button disabled
      const [disabled, set_disabled] = useState(true);

      // ref for captcha
      const captcha_ref = useRef(null);

      // auth context
      const { sign_in } = useContext(Auth_context);

      // navigate
      const navigate = useNavigate();

      // recaptcha
      useEffect(() => {
            loadCaptchaEnginge(8);
      }, []);

      // login form handler
      const handle_login_submit = (event) => {
            event.preventDefault();

            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            const captcha = captcha_ref.current.value;

            // sign in user
            sign_in(email, password)
                  .then((result) => {
                        const user = result.user;
                        Swal.fire({
                              title: "Success!",
                              text: "Login success",
                              icon: "success",
                              confirmButtonColor: "rgb(251, 170, 0)",
                        });
                        navigate("/");
                  })
                  .catch((error) => {
                        Swal.fire({
                              title: "Error",
                              text: `Something went wrong : ${error}`,
                              icon: "error",
                              confirmButtonColor: "rgb(251, 170, 0)",
                        });
                  });

            event.target.reset();
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
            <div className="w-full md:w-6/12 bg-white p-5 md:p-10 md:mx-30 md:my-20 rounded-xl">
                  <h1 className="text-4xl text-center mb-10">Login</h1>
                  <form
                        onSubmit={handle_login_submit}
                        className="fieldset gap-5"
                  >
                        {/* email field */}
                        <fieldset className="fieldset">
                              <label htmlFor="email">Email</label>
                              <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    className="input outline-none w-full"
                                    placeholder="Email"
                              />
                        </fieldset>
                        {/* password field */}
                        <fieldset className="fieldset">
                              <label htmlFor="password">Password</label>
                              <input
                                    name="password"
                                    type="password"
                                    id="password"
                                    className="input outline-none w-full"
                                    placeholder="Password"
                              />
                        </fieldset>
                        {/* recaptcha field */}
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
                        {/* submit button */}
                        <button
                              type="submit"
                              disabled={disabled}
                              className="btn btn-primary text-white shadow-none hover:bg-transparent hover:text-black hover:border-primary"
                        >
                              Sign In
                        </button>
                  </form>
                  {/* navigate to sign up page */}
                  <p className="mt-5 text-primary">
                        Don't have an account?{" "}
                        <Link to={"/register"} className="underline">
                              Sign Up
                        </Link>
                  </p>
                  <Sign_in_with />
            </div>
      );
};

export default Login_form;
