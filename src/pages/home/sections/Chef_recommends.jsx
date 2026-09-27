import React, { useEffect, useState } from "react";
import Title from "./../../../components/Title";
import Product_card from "./../../../components/Product_card";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";

const Chef_recommends = () => {
      // state for recommends
      const [recommends, set_recommends] = useState([]);

      const axios_secure = useAxiosSecure();

      // loading recommends data
      useEffect(() => {
            axios_secure.get("/menu").then((res) => {
                  const recommended_item = res.data.filter(
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
