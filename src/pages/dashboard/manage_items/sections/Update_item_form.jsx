import React, { useRef } from "react";
import { useFormik } from "formik";
import update_item_schema from "../../../../schemas/update_item_schema";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Swal } from "sweetalert2";

const Update_item_form = () => {
      const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
      const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

      const axios_public = useAxiosPublic();
      const axios_secure = useAxiosSecure();

      const image_ref = useRef(null);

      // initial_values
      const initial_values = {
            name: "",
            recipe: "",
            image: null,
            category: "",
            price: "",
      };

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
            validationSchema: update_item_schema,

            onSubmit: async (values, { resetForm }) => {
                  console.log(values);
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
                        console.log("with image url", res.data);

                        // 3. sending item data in database with image url
                        if (res.data.success) {
                              // now send the menu item data to the database / server with the image url
                              const menu_item = {
                                    name: values.name,
                                    recipe: values.recipe,
                                    image: res.data.data.display_url,
                                    category: values.category,
                                    price: parseFloat(values.price),
                              };

                              //
                              const menu_res = await axios_secure.post(
                                    "/menu",
                                    menu_item,
                              );
                              console.log(menu_res.data);
                              if (menu_res.data.insertedId) {
                                    // show success message
                                    Swal.fire({
                                          title: "Success",
                                          text: `${values.name} added successfully on the menu.`,
                                          icon: "success",
                                          showConfirmButton: false,
                                          timer: 2000,
                                    });
                              } else {
                                    Swal.fire({
                                          title: "Error",
                                          text: `Something went wrong:`,
                                          icon: "error",
                                          showConfirmButton: false,
                                          timer: 2000,
                                    });
                              }
                        }
                  } catch (error) {
                        const error_message = error.code;
                        Swal.fire({
                              title: "Error",
                              text: `Something went wrong: ${error_message}`,
                              icon: "error",
                              showConfirmButton: false,
                              timer: 2000,
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
                                    <option value="soup">Soup</option>
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
                  {/* recipe field */}
                  <fieldset className="fieldset">
                        <label htmlFor="recipe">Recipe recipe*</label>
                        <textarea
                              name="recipe"
                              id="recipe"
                              className="textarea w-full outline-none"
                              rows={10}
                              placeholder="recipe"
                              value={values.recipe}
                              onChange={handleChange}
                              onBlur={handleBlur}
                        ></textarea>
                        {errors.recipe && touched.recipe ? (
                              <span className="text-red-500">
                                    {errors.recipe}
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
                        Update Item
                  </button>
            </form>
      );
};

export default Update_item_form;
