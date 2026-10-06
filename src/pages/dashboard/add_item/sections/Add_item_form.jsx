import React from "react";
import { useFormik } from "formik";
import add_item_schema from "../../../../schemas/add_item_schema";

const Add_item_form = () => {
      const {
            errors,
            values,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
      } = useFormik({
            initialValues: {
                  name: "",
                  category: "",
                  price: "",
                  details: "",
            },

            // validation schema
            validationSchema: add_item_schema,

            onSubmit: (values, action) => {
                  action.resetForm();
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
                                    id="category"
                                    name="category"
                                    className="select outline-none"
                                    value={values.category}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                              >
                                    <option value="" disabled={true}>
                                          Select a Category
                                    </option>
                                    <option value="Desserts">Desserts</option>
                                    <option value="Pizza">Pizza</option>
                                    <option value="Salad">Salad</option>
                                    <option value="Soups">Soups</option>
                              </select>
                        </fieldset>
                        {/* price field */}
                        <fieldset className="fieldset">
                              <label htmlFor="name">Price*</label>
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
                        </fieldset>
                  </fieldset>
                  {/* details field */}
                  <fieldset className="fieldset">
                        <label htmlFor="category">Recipe Details*</label>
                        <textarea
                              name="details"
                              className="textarea w-full outline-none"
                              rows={10}
                              placeholder="Details"
                              value={values.details}
                              onChange={handleChange}
                              onBlur={handleBlur}
                        ></textarea>
                  </fieldset>
                  {/* item image field */}
                  <fieldset className="fieldset">
                        <input
                              type="file"
                              className="file-input file-input-ghost"
                        />
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
