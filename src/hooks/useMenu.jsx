import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
      // state for menu
      // const [menu, set_menu] = useState([]);

      // state for loader
      // const [loading, set_loading] = useState(true);

      const axios_public = useAxiosPublic();

      // loading menu data
      // useEffect(() => {
      //       axios_secure.get("/menu").then((res) => {
      //             set_menu(res.data);
      //             set_loading(false);
      //       });
      // }, [axios_secure]);

      const {
            data: menu = [],
            isPending: loading,
            refetch,
      } = useQuery({
            queryKey: ["menu"],
            queryFn: async () => {
                  const res = await axios_public.get("/menu");
                  return res.data;
            },
      });

      return [menu, refetch, loading];
};

export default useMenu;
