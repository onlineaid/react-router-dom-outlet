import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/userDashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/userDashboard/contact">Contact</Link>
        </li>

        
        <li>
          <Link to="/userDashboard/profile">Profile</Link>
        </li>
        {/* Add more links here as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;