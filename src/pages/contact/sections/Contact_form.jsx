import React from "react";
import Title from "../../../components/Title";
import { RiSendInsFill } from "@remixicon/react";

const Contact_form = () => {
      return (
            <section>
                  <Title
                        title={"Contact Form"}
                        sub_title={"Send us a message"}
                  />
                  <form className="fieldset gap-5 w-full md:w-8/12 mx-auto bg-base-200 p-10 rounded-md">
                        <fieldset className="fieldset grid-cols-1 md:grid-cols-2">
                              <fieldset className="fieldset">
                                    <label htmlFor="name">Name*</label>
                                    <input
                                          type="text"
                                          id="name"
                                          className="input outline-none w-full"
                                          placeholder="Enter your Name"
                                          required
                                    />
                              </fieldset>
                              <fieldset className="fieldset">
                                    <label htmlFor="email">Email*</label>
                                    <input
                                          type="email"
                                          id="email"
                                          className="input outline-none w-full"
                                          placeholder=" Enter your Email"
                                          required
                                    />
                              </fieldset>
                        </fieldset>
                        <fieldset className="fieldset">
                              <label htmlFor="phone-number">
                                    Phone Number*
                              </label>
                              <input
                                    type="number"
                                    id="phone-number"
                                    className="input outline-none w-full"
                                    placeholder="Enter your Phone Number"
                                    required
                              />
                        </fieldset>
                        <fieldset className="fieldset">
                              <label htmlFor="message">Message*</label>
                              <textarea
                                    id="message"
                                    className="textarea w-full"
                                    placeholder="Bio"
                                    rows={10}
                                    required
                              ></textarea>
                        </fieldset>

                        <button
                              type="submit"
                              className="btn btn-primary text-white shadow-none hover:bg-transparent hover:text-black hover:border-primary"
                        >
                              Send Message <RiSendInsFill />
                        </button>
                  </form>
            </section>
      );
};

export default Contact_form;
