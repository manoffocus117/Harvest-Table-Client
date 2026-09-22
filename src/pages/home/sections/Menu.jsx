import React from "react";
import Title from "./../../../components/Title";
import Menu_item from "../../../components/Menu_item";
import { Link } from "react-router";
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
                  <Link
                        to={"/our-menu"}
                        className="btn bg-transparent shadow-none border-0 border-b-2 border-black px-4 py-2 rounded-md capitalize hover:bg-primary hover:text-white hover:border-none"
                  >
                        View full menu
                  </Link>
            </section>
      );
};

export default Menu;
