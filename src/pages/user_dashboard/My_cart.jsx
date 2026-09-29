import React from "react";
import Title from "../../components/Title";
import useCart from "./../../hooks/useCart";

const My_cart = () => {
      const [cart] = useCart();
      const total_price = cart.reduce((total, item) => total + item.price, 0);
      const formatted_price = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
      }).format(total_price);

      return (
            <div>
                  <Title sub_title={"My cart"} title={"Wanna add more?"} />
                  <div>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                              <h1 className="text-3xl">
                                    Total items: {cart.length}
                              </h1>
                              <h1 className="text-3xl">
                                    Total Price: {formatted_price}
                              </h1>
                              <button className="btn btn-primary text-white">
                                    Pay Now
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default My_cart;
