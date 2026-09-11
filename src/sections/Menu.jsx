import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Menu_item from "../components/Menu_item";
import Button from "../components/Button";

const Menu = () => {
      // state for menu
      const [menu, set_menu] = useState([]);
      // loading menu data
      useEffect(() => {
            fetch("menu.json")
                  .then((res) => res.json())
                  .then((data) => {
                        const popular_items = data.filter(
                              (item) => item.category === "popular",
                        );
                        set_menu(popular_items);
                  });
      }, []);

      return (
            <section className="flex flex-col items-center">
                  <Title sub_title={"Check it out"} title={"Form our menu"} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {menu.map((item) => (
                              <Menu_item key={item._id} item={item} />
                        ))}
                  </div>
                  <Button name={"View Full Menu"} />
            </section>
      );
};

export default Menu;
