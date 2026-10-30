import React, { useRef } from "react";
import { useFormik } from "formik";
import update_item_schema from "../../../../schemas/update_item_schema";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Title from "../../../../components/Title";
import { useLoaderData } from "react-router";

const Update_item_form = () => {
      const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
      const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

      // loading single item data using loader
      const {
            _id,
            name,
            recipe,
            image: existing_image,
            category,
            price,
      } = useLoaderData();

      const axios_public = useAxiosPublic();
      const axios_secure = useAxiosSecure();

      const image_ref = useRef(null);

      // initial_values
      const initial_values = {
            name: name,
            recipe: recipe,
            image: "",
            category: category,
            price: price,
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
                  try {
                        let image_url = existing_image;

                        // 1. Upload a new image only if one was selected
                        if (values.image instanceof File) {
                              const image_data = new FormData();
                              image_data.append("image", values.image);

                              const image_res = await axios_public.post(
                                    image_hosting_api,
                                    image_data,
                              );

                              console.log("ImgBB response:", image_res.data);

                              if (!image_res.data.success) {
                                    throw new Error("Image upload failed.");
                              }

                              image_url = image_res.data.data.display_url;
                        }

                        // 2. Prepare updated menu item data
                        const menu_item = {
                              name: values.name,
                              recipe: values.recipe,
                              image: image_url,
                              category: values.category,
                              price: parseFloat(values.price),
                        };

                        // 3. Update the item in your database
                        const menu_res = await axios_secure.patch(
                              `/menu/${_id}`,
                              menu_item,
                        );

                        // 4. Show the appropriate message
                        if (menu_res.data.modifiedCount > 0) {
                              await Swal.fire({
                                    title: "Success",
                                    text: `${values.name} updated successfully on the menu.`,
                                    icon: "success",
                                    showConfirmButton: false,
                                    timer: 2000,
                              });

                              resetForm();
                        } else {
                              await Swal.fire({
                                    title: "No Changes",
                                    text: "No changes were made to the menu item.",
                                    icon: "info",
                              });
                        }
                  } catch (error) {
                        console.error("Update item error:", error);

                        const error_message =
                              error.response?.data?.message ||
                              error.message ||
                              "An unexpected error occurred.";

                        await Swal.fire({
                              title: "Error",
                              text: error_message,
                              icon: "error",
                        });
                  } finally {
                        if (image_ref.current) {
                              image_ref.current.value = "";
                        }
                  }
            },
      });
      return (
            <>
                  <Title sub_title={"What's new"} title={"Update Item"} />
                  <div className="bg-white p-4 md:p-10 rounded-2xl">
                        <form
                              onSubmit={handleSubmit}
                              className="fieldset gap-5"
                        >
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
                                          // defaultValue={name}
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
                                          <label htmlFor="category">
                                                Category*
                                          </label>
                                          <select
                                                name="category"
                                                id="category"
                                                className="select outline-none"
                                                value={values.category}
                                                onChange={handleChange}
                                                onBlur={() =>
                                                      setFieldTouched(
                                                            "category",
                                                            true,
                                                      )
                                                }
                                          >
                                                <option value="" disabled>
                                                      Select a Category
                                                </option>

                                                <option value="desserts">
                                                      Desserts
                                                </option>
                                                <option value="pizza">
                                                      Pizza
                                                </option>
                                                <option value="salad">
                                                      Salad
                                                </option>
                                                <option value="soup">
                                                      Soup
                                                </option>
                                          </select>
                                          {errors.category &&
                                          touched.category ? (
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
                                    <label htmlFor="recipe">
                                          Recipe recipe*
                                    </label>
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
                                                      event.currentTarget
                                                            .files?.[0] ?? null,
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
                  </div>
            </>
      );
};

export default Update_item_form;
