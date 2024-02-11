import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./Styles/global.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />}></Route>)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
