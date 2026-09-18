import { useEffect, useState } from "react";

const useMenu = () => {
      // state for menu
      const [menu, set_menu] = useState([]);

      // state for loader
      const [loading, set_loading] = useState(true);
      // loading menu data
      useEffect(() => {
            fetch("http://localhost:3000/menu")
                  .then((res) => res.json())
                  .then((data) => {
                        set_menu(data);
                        set_loading(false);
                  });
      }, []);
      return [menu, loading];
};

export default useMenu;
