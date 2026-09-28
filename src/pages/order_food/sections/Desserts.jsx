import React from "react";
import useMenu from "../../../hooks/useMenu";
import Product_card from "./../../../components/Product_card";
import Loading from "../../../components/Loading";

const Desserts = () => {
      const [menu, loading] = useMenu();
      if (loading) {
            return <Loading />;
      }
      const dessert = menu.filter((item) => item.category === "dessert");
      return (
            <div className="my-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {dessert.map((item) => (
                        <Product_card key={item._id} item={item} />
                  ))}
            </div>
      );
};

export default Desserts;
