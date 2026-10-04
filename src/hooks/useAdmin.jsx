import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Auth_context from "../context/Auth_context";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
      const { user } = useContext(Auth_context);
      const axios_secure = useAxiosSecure();

      const { data: is_admin, isPending: is_admin_loading } = useQuery({
            queryKey: [user?.email, "is_admin"],
            queryFn: async () => {
                  const res = await axios_secure.get(
                        `users/admin/${user.email}`,
                  );
                  console.log(res.data);
                  return res.data?.admin;
            },
      });
      return [is_admin, is_admin_loading];
};

export default useAdmin;
