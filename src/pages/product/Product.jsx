import React from "react";
import { TiArrowUp, TiArrowDown } from "react-icons/ti";
import product_img from "../../assets/Group 10.png";
import product_img1 from "../../assets/Group 10 (1).png";
import product_img2 from "../../assets/Group 10 (2).png";
import "./Product.css";

function Product() {
  return (
    <div className="product-container">
      <div className="product-wrapper">
        <div className="product-card">
          <img src={product_img} alt="Earning" />
          <div className="product-info">
            <span className="product-title">Earning</span>
            <h3 className="product-amount">$198k</h3>
            <p className="product-change">
            </p>
          </div>
        </div>

        <div className="product-card">
          <img src={product_img1} alt="Balance" />
          <div className="product-info">
            <span className="product-title">Balance</span>
            <h3 className="product-amount">$2.4k</h3>
            <p className="product-change">
            </p>
          </div>
        </div>

        <div className="product-card">
          <img src={product_img2} alt="Total Sales" />
          <div className="product-info">
            <span className="product-title">Total Sales</span>
            <h3 className="product-amount">$89k</h3>
            <p className="product-change">
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
