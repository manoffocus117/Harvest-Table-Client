import React from "react";

const Add_item_form = () => {
      return (
            <form className="fieldset gap-5">
                  {/* name field */}
                  <fieldset className="fieldset">
                        <label htmlFor="name">Recipe Name*</label>
                        <input
                              name="name"
                              type="text"
                              id="name"
                              className="input outline-none w-full validator"
                              placeholder="Recipe Name"
                              pattern="[A-Za-z_ ]*"
                              minLength="3"
                              maxLength="50"
                              required
                        />
                        <p className="validator-hint hidden">
                              Must be 3 to 50 characters, including
                              <br />
                              Capital and small letters
                        </p>
                  </fieldset>
                  {/* category & price field */}
                  <fieldset className="fieldset grid-cols-1 md:grid-cols-2">
                        <fieldset className="fieldset">
                              <label htmlFor="category">Category*</label>
                              <select
                                    defaultValue="Select a Category"
                                    className="select outline-none"
                              >
                                    <option disabled={true}>
                                          Select a Category
                                    </option>
                                    <option>Crimson</option>
                                    <option>Amber</option>
                                    <option>Velvet</option>
                              </select>
                        </fieldset>
                        <fieldset className="fieldset">
                              <label htmlFor="name">Price*</label>
                              <input
                                    name="price"
                                    type="number"
                                    id="price"
                                    className="input outline-none w-full"
                                    placeholder="Price"
                                    pattern="[A-Za-z_ ]*"
                                    minLength="3"
                                    maxLength="30"
                                    required
                              />
                        </fieldset>
                  </fieldset>
                  {/* details */}
                  <fieldset className="fieldset">
                        <label htmlFor="category">Recipe Details*</label>
                        <textarea
                              className="textarea w-full outline-none"
                              rows={10}
                              placeholder="Details"
                              required
                        ></textarea>
                  </fieldset>
                  <fieldset className="fieldset">
                        <input
                              type="file"
                              className="file-input file-input-ghost"
                              required
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
