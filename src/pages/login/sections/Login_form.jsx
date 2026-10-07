import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Sign_in_with from "../../../components/Sign_in_with";
import {
      loadCaptchaEnginge,
      LoadCanvasTemplate,
      validateCaptcha,
} from "react-simple-captcha";
import Auth_context from "../../../context/Auth_context";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import login_schema from "../../../schemas/login_schema";

const Login_form = () => {
      // auth context
      const { sign_in } = useContext(Auth_context);

      // navigate
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";

      // recaptcha
      useEffect(() => {
            loadCaptchaEnginge(8);
      }, []);

      // form initial values
      const initial_values = {
            email: "",
            password: "",
            captcha: "",
      };

      // login form handler
      const {
            values,
            errors,
            handleBlur,
            handleSubmit,
            handleChange,
            touched,
      } = useFormik({
            initialValues: initial_values,
            validationSchema: login_schema,
            onSubmit: async (values, { resetForm }) => {
                  // validating captcha
                  if (!validateCaptcha(values.captcha)) {
                        Swal.fire({
                              title: "Error",
                              text: "Invalid CAPTCHA",
                              icon: "error",
                              confirmButtonColor: "rgb(251, 170, 0)",
                        });
                        resetForm();
                        return;
                  }
                  // sign in
                  try {
                        const result = await sign_in(
                              values.email,
                              values.password,
                        );
                        const user_name = result.user.displayName;
                        await Swal.fire({
                              title: "Success!",
                              text: `Welcome back ${user_name}`,
                              icon: "success",
                              confirmButtonColor: "rgb(251, 170, 0)",
                        });
                        resetForm();
                        navigate(from, { replace: true });
                  } catch (error) {
                        const error_message = error.code.replace("auth/", "");
                        await Swal.fire({
                              title: "Error",
                              text: `Something went wrong: ${error_message}`,
                              icon: "error",
                              confirmButtonColor: "rgb(251, 170, 0)",
                        });
                        resetForm();
                  }
            },
      });

      return (
            <div className="w-full md:w-6/12 bg-white p-5 md:p-10 md:mx-30 md:my-20 rounded-xl">
                  <h1 className="text-4xl text-center mb-10">Login</h1>
                  <form onSubmit={handleSubmit} className="fieldset gap-5">
                        {/* email field */}
                        <fieldset className="fieldset">
                              <label htmlFor="email">Email</label>
                              <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    className="input outline-none w-full"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                              />
                              {errors.email && touched.email ? (
                                    <span className="text-red-500">
                                          {errors.email}
                                    </span>
                              ) : null}
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
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                              />
                              {errors.password && touched.password ? (
                                    <span className="text-red-500">
                                          {errors.password}
                                    </span>
                              ) : null}
                        </fieldset>
                        {/* captcha field */}
                        <fieldset className="fieldset">
                              <label htmlFor="enter-captcha">Recaptcha</label>
                              <fieldset className="fieldset border border-gray-300 rounded p-3 space-y-3">
                                    <LoadCanvasTemplate />
                                    <input
                                          name="captcha"
                                          type="enter-captcha"
                                          id="enter-captcha"
                                          className="input outline-none w-full"
                                          placeholder="Enter the Captcha above"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.captcha}
                                    />
                                    {errors.captcha && touched.captcha ? (
                                          <span className="text-red-500">
                                                {errors.email}
                                          </span>
                                    ) : null}
                              </fieldset>
                        </fieldset>
                        {/* submit button */}
                        <button
                              type="submit"
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
