import React from "react";
import Menu_item from "../../../components/Menu_item";
import Hero from "../../../components/Hero";
import Button from "../../../components/Button";
import { Link } from "react-router";

const Menu_category = ({ items, title, subtitle, bg_img }) => {
      return (
            <>
                  {title && (
                        <Hero
                              bg_url={bg_img}
                              title={title}
                              subtitle={subtitle}
                        />
                  )}
                  <section className="flex flex-col items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                              {items.map((item) => (
                                    <Menu_item key={item._id} item={item} />
                              ))}
                        </div>
                        {title ? (
                              <Link
                                    to={`/order/${title}`}
                                    className="btn bg-transparent shadow-none border-0 border-b-2 border-black px-4 py-2 rounded-md capitalize hover:bg-primary hover:text-white hover:border-none"
                              >
                                    {`Order ${title}`}
                              </Link>
                        ) : (
                              <Link className="btn bg-transparent shadow-none border-0 border-b-2 border-black px-4 py-2 rounded-md capitalize hover:bg-primary hover:text-white hover:border-none">
                                    {"Checkout today's offer"}
                              </Link>
                        )}
                  </section>
            </>
      );
};

export default Menu_category;
