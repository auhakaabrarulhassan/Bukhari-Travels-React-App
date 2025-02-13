import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Structure from "./Components/Structure";
import AboutUs from "./Components/AboutUs.jsx/AboutUs";
import Packages from "./Components/Packages/Packages";
import Home from "./Components/Home/Home";
import Hotels from "./Components/Hotels/Hotels";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Structure></Structure>,
    children: [
      { path: '/', element: <Home></Home> },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/packages",
        element: <Packages></Packages>,
      },
      {
        path: "/hotels",
        element: <Hotels></Hotels>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
