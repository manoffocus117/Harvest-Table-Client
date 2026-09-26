import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "@smastrom/react-rating/style.css";
import "react-tabs/style/react-tabs.css";
import "./style.css";

import router from "./routes/router";
import { HelmetProvider } from "react-helmet-async";
import Auth_provider from "./providers/Auth_provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const query_client = new QueryClient();

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
      <Auth_provider>
            <QueryClientProvider client={query_client}>
                  <HelmetProvider>
                        <RouterProvider router={router} />
                  </HelmetProvider>
            </QueryClientProvider>
      </Auth_provider>,
);
