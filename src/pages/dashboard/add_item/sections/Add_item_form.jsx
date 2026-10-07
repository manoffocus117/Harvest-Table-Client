import React, { useRef } from "react";
import { useFormik } from "formik";
import add_item_schema from "../../../../schemas/add_item_schema";
import useAxiosPublic from "./../../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Add_item_form = () => {
      // image ref
      const image_ref = useRef(null);

      // axios public
      const axios_public = useAxiosPublic();

      // initial_values
      const initial_values = {
            name: "",
            category: "",
            price: "",
            details: "",
            image: null,
      };
      // form
      const {
            errors,
            values,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
            setFieldValue,
            setFieldTouched,
      } = useFormik({
            initialValues: initial_values,

            // validation schema
            validationSchema: add_item_schema,

            onSubmit: async (values, { resetForm }) => {
                  try {
                        // 1. image data in object
                        const image_data = { image: values.image };

                        // 2. posting image in image hosting server
                        const res = await axios_public.post(
                              image_hosting_api,
                              image_data,
                              {
                                    headers: {
                                          "Content-Type": "multipart/form-data",
                                    },
                              },
                        );
                        console.log(res.data);

                        // 3. sending item data in database with image url
                        if (res.data.success) {
                        }
                  } catch (error) {
                        const error_message = error.code;
                        Swal.fire({
                              title: "Error",
                              text: `Something went wrong: ${error_message}`,
                              icon: "error",
                              confirmButtonColor: "rgb(251, 170, 0)",
                        });
                  }

                  resetForm();
                  if (image_ref.current) {
                        image_ref.current.value = "";
                  }
            },
      });
      return (
            <form onSubmit={handleSubmit} className="fieldset gap-5">
                  {/* name field */}
                  <fieldset className="fieldset">
                        <label htmlFor="name">Recipe Name*</label>
                        <input
                              name="name"
                              type="text"
                              id="name"
                              className="input outline-none w-full"
                              placeholder="Recipe Name"
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                        />
                        {errors.name && touched.name ? (
                              <span className="text-red-500">
                                    {errors.name}
                              </span>
                        ) : null}
                  </fieldset>
                  {/* category & price field */}
                  <fieldset className="fieldset grid-cols-1 md:grid-cols-2">
                        {/* category field */}
                        <fieldset className="fieldset">
                              <label htmlFor="category">Category*</label>
                              <select
                                    name="category"
                                    id="category"
                                    className="select outline-none"
                                    value={values.category}
                                    onChange={handleChange}
                                    onBlur={() =>
                                          setFieldTouched("category", true)
                                    }
                              >
                                    <option value="" disabled>
                                          Select a Category
                                    </option>

                                    <option value="desserts">Desserts</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="salad">Salad</option>
                                    <option value="soups">Soups</option>
                              </select>
                              {errors.category && touched.category ? (
                                    <span className="text-red-500">
                                          {errors.category}
                                    </span>
                              ) : null}
                        </fieldset>
                        {/* price field */}
                        <fieldset className="fieldset">
                              <label htmlFor="price">Price*</label>
                              <input
                                    name="price"
                                    type="number"
                                    id="price"
                                    className="input outline-none w-full"
                                    placeholder="Price"
                                    value={values.price}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                              />
                              {errors.price && touched.price ? (
                                    <span className="text-red-500">
                                          {errors.price}
                                    </span>
                              ) : null}
                        </fieldset>
                  </fieldset>
                  {/* details field */}
                  <fieldset className="fieldset">
                        <label htmlFor="details">Recipe Details*</label>
                        <textarea
                              name="details"
                              id="details"
                              className="textarea w-full outline-none"
                              rows={10}
                              placeholder="Details"
                              value={values.details}
                              onChange={handleChange}
                              onBlur={handleBlur}
                        ></textarea>
                        {errors.details && touched.details ? (
                              <span className="text-red-500">
                                    {errors.details}
                              </span>
                        ) : null}
                  </fieldset>
                  {/* item image field */}
                  <fieldset className="fieldset">
                        <input
                              name="image"
                              type="file"
                              ref={image_ref}
                              onChange={(event) => {
                                    setFieldValue(
                                          "image",
                                          event.currentTarget.files?.[0] ??
                                                null,
                                    );
                              }}
                              onBlur={handleBlur}
                              className="file-input file-input-ghost"
                        />
                        {errors.image && touched.image ? (
                              <span className="text-red-500">
                                    {errors.image}
                              </span>
                        ) : null}
                  </fieldset>
                  {/* submit button */}
                  <button
                        type="submit"
                        className="w-40 btn btn-primary text-white shadow-none hover:bg-transparent hover:text-black hover:border-primary"
                  >
                        Add Item
                  </button>
            </form>
      );
};

export default Add_item_form;
