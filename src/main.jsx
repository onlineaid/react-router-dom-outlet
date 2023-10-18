import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./ErrorPage";
import Contact from "./page/Contact";
import UserDashboard from "./page/UserDashboard";
import Profile from "./page/Profile";
import Success from "./page/Success";
import "react-image-gallery/styles/css/image-gallery.css";
import Land from "./page/Land";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/success",
    element: <Success />,
  },

  {
    path: "/product",
    element: <Land />,
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