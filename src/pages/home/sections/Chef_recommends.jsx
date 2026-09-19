import React, { useEffect, useState } from "react";
import Title from "./../../../components/Title";
import Product_card from "./../../../components/Product_card";

const Chef_recommends = () => {
      // state for recommends
      const [recommends, set_recommends] = useState([]);
      // loading recommends data
      useEffect(() => {
            fetch("http://localhost:3000/menu")
                  .then((res) => res.json())
                  .then((data) => {
                        const recommended_item = data.filter(
                              (item) => item.category === "offered",
                        );
                        set_recommends(recommended_item);
                  });
      }, []);
      return (
            <section>
                  <Title sub_title={"Should Try"} title={"Chef Recommends"} />
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {recommends.map((item) => (
                              <Product_card key={item._id} item={item} />
                        ))}
                  </div>
            </section>
      );
};

export default Chef_recommends;
