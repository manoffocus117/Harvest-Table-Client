import React from "react";
import useCart from "./useCart";

const useTotalPrice = () => {
      const [cart] = useCart();

      const total_price = cart.reduce((total, item) => total + item.price, 0);
      const formatted_price = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
      }).format(total_price);

      return [formatted_price];
};

export default useTotalPrice;
