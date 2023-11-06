import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const routes = [
  {
    path: "/userDashboard",
    label: "User",
  },
  {
    path: "/product",
    label: "Product",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/fetch",
    label: "Fetch",
  },
  {
    path: "/cart",
    label: "Cart",
  },
];

export default function Header() {
  const location = useLocation();

  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            style={({ isActive, isPending, isTransitioning }) => {
                console.log(isActive, isPending, isTransitioning )
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
          >
            {route.label}
          </NavLink>
        ))}
      </div>
      <hr />
    </div>
  );
}
