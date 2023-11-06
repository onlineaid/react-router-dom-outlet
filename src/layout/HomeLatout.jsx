import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
