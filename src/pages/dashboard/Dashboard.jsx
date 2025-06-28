import React from "react";
import { CiSearch } from "react-icons/ci";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Hello Evano 👋🏼</h1>

        <div className="dashboard-search-box">
          <CiSearch className="search-icon" />
          <input
            type="search"
            placeholder="Search"
            className="dashboard-search-input"
          />
        </div>
      </header>
    </div>
  );
};

export default Dashboard;
