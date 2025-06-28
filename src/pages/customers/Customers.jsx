import React from 'react';
import './Customers.css';
import { IoIosArrowDown } from 'react-icons/io'; 
import custumors from "../../assets/diagramma65.png";

function Customers() {
  return (
    <div className='banner'>
      <div className="diagramma">
        <div className="diagramma-header">
          <div className="diagramma-header-text">
            <h1>Overview</h1>
            <p>Monthly Earning</p>
          </div>
          <button className="diagramma-button">
            Quarterly <IoIosArrowDown />
          </button>
        </div>

        <div className="diagramma-chart">
          <div className="box"><div className="bar" style={{ height: "80px" }}></div><span className="month">Jan</span></div>
          <div className="box"><div className="bar" style={{ height: "200px" }}></div><span className="month">Feb</span></div>
          <div className="box"><div className="bar" style={{ height: "90px" }}></div><span className="month">Mar</span></div>
          <div className="box"><div className="bar" style={{ height: "100px" }}></div><span className="month">Apr</span></div>
          <div className="box"><div className="bar" style={{ height: "70px" }}></div><span className="month">May</span></div>
          <div className="box"><div className="bar" style={{ height: "110px" }}></div><span className="month">Jun</span></div>
          <div className="box"><div className="bar" style={{ height: "100px" }}></div><span className="month">Jul</span></div>
          <div className="box"><div className="bar" style={{ height: "180px" }}></div><span className="month">Aug</span></div>
          <div className="box"><div className="bar" style={{ height: "150px" }}></div><span className="month">Sep</span></div>
          <div className="box"><div className="bar" style={{ height: "120px" }}></div><span className="month">Oct</span></div>
          <div className="box"><div className="bar" style={{ height: "80px" }}></div><span className="month">Nov</span></div>
          <div className="box"><div className="bar" style={{ height: "130px" }}></div><span className="month">Dec</span></div>
        </div>
      </div>

      <div className='imgs'>
        <h3>Customers</h3>
        <p>Customers that buy products</p>
        <img src={custumors} alt="customers chart" />
      </div>
    </div>
  );
}

export default Customers;
