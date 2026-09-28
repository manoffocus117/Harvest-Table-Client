import React from "react";
import useMenu from "../../../hooks/useMenu";
import Product_card from "../../../components/Product_card";
import Loading from "../../../components/Loading";

const Soups = () => {
      const [menu, loading] = useMenu();
      if (loading) {
            return <Loading />;
      }
      const soup = menu.filter((item) => item.category === "soup");

      return (
            <div className="my-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {soup.map((item) => (
                        <Product_card key={item._id} item={item} />
                  ))}
            </div>
      );
};

export default Soups;
