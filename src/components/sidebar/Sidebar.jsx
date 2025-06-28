import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import {
  PiCubeBold,
  PiUserCircle,
  PiWallet,
  PiMegaphone,
  PiQuestion,
} from "react-icons/pi";
import "./Sidebar.css"; // CSS faylni import qilamiz

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { path: "/dashboard", icon: <PiCubeBold />, label: "Dashboard" },
    { path: "/product", icon: <AiOutlineProduct />, label: "Product" },
    { path: "/customers", icon: <PiUserCircle />, label: "Customers" },
    { path: "/income", icon: <PiWallet />, label: "Income" },
    { path: "/promote", icon: <PiMegaphone />, label: "Promote" },
    { path: "/help", icon: <PiQuestion />, label: "Help" },
  ];

  return (
    <div className={`sidebar ${open ? "collapsed" : ""}`}>
      <div className="sidebar-inner">
        <h2 className="sidebar-logo" onClick={() => setOpen(!open)}>
          <PiCubeBold />
          {!open && "Dashboard"}
        </h2>

        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                {item.icon}
                {!open && <span className="link-label">{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
