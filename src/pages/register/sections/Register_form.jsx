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
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useFormik } from "formik";
import registration_schema from "./../../../schemas/registration_schema";

const Register_form = () => {
      // axios public instance
      const axios_public = useAxiosPublic();

      // auth context
      const { create_user, update_user_profile } = useContext(Auth_context);

      // navigate
      const navigate = useNavigate();

      // recaptcha
      useEffect(() => {
            loadCaptchaEnginge(8);
      }, []);

      // form initial values
      const initial_values = {
            name: "",
            photo_url: "",
            email: "",
            password: "",
            confirm_password: "",
            captcha: "",
      };

      // handler for register form submit
      const {
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
      } = useFormik({
            initialValues: initial_values,
            // validation
            validationSchema: registration_schema,
            // submit
            onSubmit: async (values, { resetForm }) => {
                  const { name, photo_url, email, password } = values;
                  // captcha validation
                  if (!validateCaptcha(values.captcha)) {
                        Swal.fire({
                              title: "Error!",
                              text: "Invalid captcha",
                              icon: "error",
                              confirmButtonColor: "rgb(251, 170, 0)",
                        });
                        resetForm();
                        return;
                  }
                  try {
                        // 1. create user in firebase
                        const result = await create_user(email, password);
                        const user_name = result.user.displayName;

                        // 2. update profile in firebase
                        await update_user_profile(name, photo_url);

                        // 3. save user data in database
                        const user_info = {
                              name: name,
                              email: email,
                        };
                        const res = await axios_public.post(
                              "/users",
                              user_info,
                        );

                        // 4. show success message
                        if (res.data.insertedId) {
                              await Swal.fire({
                                    title: "Success!",
                                    text: "Registration success",
                                    icon: "success",
                                    confirmButtonColor: "rgb(251, 170, 0)",
                              });
                              // 5. reset form
                              resetForm();
                              // 6. navigate to hame page
                              navigate("/");
                        }
                  } catch (error) {
                        const error_message = error.code.replace("auth/", "");
                        Swal.fire({
                              title: "Error",
                              text: `Something went wrong: ${error_message}`,
                              icon: "error",
                              confirmButtonColor: "rgb(251, 170, 0)",
                        });
                  }
            },
      });

      return (
            <div className="w-full md:w-6/12 bg-white p-5 md:p-10 md:mx-30 md:my-20 rounded-xl">
                  <h1 className="text-4xl text-center mb-10">Register</h1>
                  <form onSubmit={handleSubmit} className="fieldset gap-5">
                        {/* name field */}
                        <fieldset className="fieldset">
                              <label htmlFor="name">Name</label>
                              <input
                                    name="name"
                                    type="text"
                                    id="name"
                                    className="input outline-none w-full validator"
                                    placeholder="Enter your Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                              />
                              {errors.name && touched.name ? (
                                    <span className="text-red-500">
                                          {errors.name}
                                    </span>
                              ) : null}
                        </fieldset>
                        {/* photo url field */}
                        <fieldset className="fieldset">
                              <label htmlFor="photo_url">Photo URL</label>
                              <input
                                    name="photo_url"
                                    type="url"
                                    id="photo_url"
                                    className="input outline-none w-full validator"
                                    placeholder="https://"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.photo_url}
                              />
                              {errors.photo_url && touched.photo_url ? (
                                    <span className="text-red-500">
                                          {errors.photo_url}
                                    </span>
                              ) : null}
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
                                    className="input outline-none w-full validator"
                                    placeholder="Enter your Password"
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
                        {/* confirm password field */}
                        <fieldset className="fieldset">
                              <label htmlFor="confirm_password">
                                    Confirm Password
                              </label>
                              <input
                                    name="confirm_password"
                                    type="password"
                                    id="confirm_password"
                                    className="input outline-none w-full validator"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirm_password}
                              />
                              {errors.confirm_password &&
                              touched.confirm_password ? (
                                    <span className="text-red-500">
                                          {errors.confirm_password}
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
                                                {errors.captcha}
                                          </span>
                                    ) : null}
                              </fieldset>
                        </fieldset>
                        {/* submit button */}
                        <button
                              type="submit"
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
