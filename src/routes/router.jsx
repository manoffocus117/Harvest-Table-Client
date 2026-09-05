import React from "react";
import { createBrowserRouter } from "react-router";
import Root_layout from "../layout/Root_layout";
import Home from "../pages/Home";

const router = createBrowserRouter([
      {
            path: "/",
            Component: Root_layout,
            children: [
                  {
                        index: true,
                        Component: Home,
                  },
            ],
      },
]);

export default router;
