import React from "react";
import useCart from "./useCart";

const useTotalPrice = () => {
      const [cart] = useCart();

      const total_price = cart.reduce((total, item) => total + item.price, 0);

      return [total_price];
};

export default useTotalPrice;
