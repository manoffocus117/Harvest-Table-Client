import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
      // state for menu
      const [menu, set_menu] = useState([]);

      // state for loader
      const [loading, set_loading] = useState(true);

      const axios_secure = useAxiosSecure();

      // loading menu data
      useEffect(() => {
            axios_secure.get("/menu").then((res) => {
                  set_menu(res.data);
                  set_loading(false);
            });
      }, []);
      return [menu, loading];
};

export default useMenu;
