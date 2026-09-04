import React from "react";
import { createBrowserRouter } from "react-router";
import Root_layout from "../layout/Root_layout";
import Home_page from "../pages/Home_page";

const router = createBrowserRouter([
      {
            path: "/",
            Component: Root_layout,
            children: [
                  {
                        index: true,
                        Component: Home_page,
                  },
            ],
      },
]);

export default router;
