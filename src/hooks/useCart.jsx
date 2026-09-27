import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import Auth_context from "../context/Auth_context";

const useCart = () => {
      const axios_secure = useAxiosSecure();
      const { user } = useContext(Auth_context);
      // tanstack query
      const { data: cart = [], refetch } = useQuery({
            queryKey: ["cart", user?.email],
            queryFn: async () => {
                  const res = await axios_secure.get(
                        `/cart?email=${user.email}`,
                  );
                  return res.data;
            },
      });
      return [cart, refetch];
};

export default useCart;
