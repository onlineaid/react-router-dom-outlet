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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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