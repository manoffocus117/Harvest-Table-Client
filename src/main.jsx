import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import "./style.css";
import router from "./routes/router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
