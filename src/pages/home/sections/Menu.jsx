import React from "react";
import Title from "./../../../components/Title";
import Menu_item from "../../../components/Menu_item";
import Button from "../../../components/Button";
import useMenu from "../../../hooks/useMenu";

const Menu = () => {
      const [menu] = useMenu();
      const popular_item = menu.filter((item) => item.category === "popular");
      return (
            <section className="flex flex-col items-center">
                  <Title sub_title={"Check it out"} title={"Form our menu"} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                        {popular_item.map((item) => (
                              <Menu_item key={item._id} item={item} />
                        ))}
                  </div>
                  <Button name={"View Full Menu"} />
            </section>
      );
};

export default Menu;
