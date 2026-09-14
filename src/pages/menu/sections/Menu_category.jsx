import React from "react";
import Menu_item from "../../../components/Menu_item";
import Hero from "../../../components/Hero";
import Button from "../../../components/Button";

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
                        <Button name={`Order ${title}`} />
                  </section>
            </>
      );
};

export default Menu_category;
