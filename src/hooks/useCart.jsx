import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
      const axios_secure = useAxiosSecure();
      // tanstack query
      const { data: cart = [] } = useQuery({
            queryKey: ["cart"],
            queryFn: async () => {
                  const res = await axios_secure.get("/cart");
                  return res.data;
            },
      });
      return [cart];
};

export default useCart;
