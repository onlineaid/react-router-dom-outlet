import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./ErrorPage";
import Contact from "./page/Contact";
import UserDashboard from "./page/UserDashboard";
import Profile from "./page/Profile";
import Success from "./page/Success";
import "react-image-gallery/styles/css/image-gallery.css";
import Product from "./page/Product";
import About from "./page/About";
import Cart from "./page/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/success",
        element: <Success />,
      },

      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/about",
        element: <About />,
      },
    ],
  },

  {
    path: "/userDashboard",
    element: <UserDashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
