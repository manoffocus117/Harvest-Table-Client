import React from "react";
import Product_card from "../../../components/Product_card";

const Soups = ({ soup }) => {
      return (
            <section>
                  <h1>{soup.category}</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {soup.map((item) => (
                              <Product_card key={item._id} item={item} />
                        ))}
                  </div>
            </section>
      );
};

export default Soups;
