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
import "./Sidebar.css";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <h2 className="sidebar-toggle" onClick={() => setOpen(!open)}>
          <PiCubeBold />
          <span>Dashboard</span>
        </h2>

        <ul className="sidebar-menu">
          <li>
            <NavLink to="/dashboard" className="sidebar-link">
              <PiCubeBold />
              <span className="sidebar-label">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className="sidebar-link">
              <AiOutlineProduct />
              <span className="sidebar-label">Product</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/customers" className="sidebar-link">
              <PiUserCircle />
              <span className="sidebar-label">Customers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/income" className="sidebar-link">
              <PiWallet />
              <span className="sidebar-label">Income</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/promote" className="sidebar-link">
              <PiMegaphone />
              <span className="sidebar-label">Promote</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/help" className="sidebar-link">
              <PiQuestion />
              <span className="sidebar-label">Help</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
