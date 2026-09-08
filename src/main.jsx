import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./style.css";

import router from "./routes/router";
import { HelmetProvider } from "react-helmet-async";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
      <HelmetProvider>
            <RouterProvider router={router} />
      </HelmetProvider>,
);
