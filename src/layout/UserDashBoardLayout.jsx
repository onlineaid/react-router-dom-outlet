import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";

const UserDashBoardLayout = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashBoardLayout;
