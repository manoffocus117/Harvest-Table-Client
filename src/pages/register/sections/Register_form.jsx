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

const Register_form = () => {
      // state for submit button disabled
      const [disabled, set_disabled] = useState(true);

      // ref for captcha
      const captcha_ref = useRef(null);

      // auth context
      const { create_user } = useContext(Auth_context);

      // navigate
      const navigate = useNavigate();

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

            // sign up user
            create_user(email, password)
                  .then((result) => {
                        const user = result.user;
                        Swal.fire({
                              title: "Success!",
                              text: "Registration success",
                              icon: "success",
                              confirmButtonColor: "rgb(251, 170, 0)",
                        });
                        navigate("/");
                  })
                  .catch((error) => {
                        Swal.fire({
                              title: "Error",
                              text: "Something went wrong",
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
                  alert("captcha is not correct");
            }
      };

      return (
            <div className="w-full md:w-6/12 bg-white p-5 md:p-10 md:mx-30 md:my-20 rounded-xl">
                  <h1 className="text-4xl text-center mb-10">Register</h1>
                  <form
                        onSubmit={handle_register_submit}
                        className="fieldset gap-5"
                  >
                        {/* name field */}
                        <fieldset className="fieldset">
                              <label htmlFor="name">Name</label>
                              <input
                                    name="name"
                                    type="text"
                                    id="name"
                                    className="input outline-none w-full validator"
                                    placeholder="Enter your Name"
                                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                                    minLength="3"
                                    maxLength="30"
                                    required
                              />
                              <span className="validator-hint hidden">
                                    Must be 3 to 30 characters
                              </span>
                        </fieldset>
                        {/* email field */}
                        <fieldset className="fieldset">
                              <label htmlFor="email">Email</label>
                              <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    className="input outline-none w-full validator"
                                    placeholder=" Enter your Email"
                                    required
                              />
                              <span className="validator-hint hidden">
                                    Enter valid email address
                              </span>
                        </fieldset>
                        {/* password field */}
                        <fieldset className="fieldset">
                              <label htmlFor="password">Password</label>
                              <input
                                    name="password"
                                    type="password"
                                    id="password"
                                    className="input outline-none w-full validator"
                                    placeholder="Enter your Password"
                                    required
                                    minLength="8"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                              />
                              <p className="validator-hint hidden">
                                    Must be more than 8 characters, including
                                    <br />
                                    At least one number
                                    <br />
                                    At least one lowercase letter
                                    <br />
                                    At least one uppercase letter
                              </p>
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
                              Sign Up
                        </button>
                  </form>
                  {/* navigate to sign in page */}
                  <p className="mt-5 text-primary">
                        Already have an account?{" "}
                        <Link to={"/login"} className="underline">
                              Sign In
                        </Link>
                  </p>
                  <Sign_in_with />
            </div>
      );
};

export default Register_form;
