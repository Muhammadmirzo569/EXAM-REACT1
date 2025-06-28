import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import imgs from "../../assets/imgs.png";
import img1 from "../../assets/imgs_1.png";
import img2 from "../../assets/imgs_2.png";
import "./Income.css";

const products = [
  {
    img: imgs,
    title: "Abstract 3D",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: img1,
    title: "Sarphens Illustration",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: imgs,
    title: "Landing Page 3D max",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: img2,
    title: "Collab Illustration",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Income = () => {
  return (
    <div className="income-wrapper">


      <div className="income-content">
        <div className="income-topbar">
          <h1>Product Sell</h1>
          <div className="income-filters">
            <div className="income-search-small">
              <CiSearch size={20} />
              <input type="search" placeholder="Search" />
            </div>
            <button className="income-btn">
              Last 30 days <IoIosArrowDown />
            </button>
          </div>
        </div>

        <div className="income-headings">
          <h4>Product Name</h4>
          <div className="income-columns">
            <p>Stock</p>
            <p>Price</p>
            <p>Total Sales</p>
          </div>
        </div>

        <div className="income-list">
          {products.map((item, i) => (
            <div className="income-item" key={i}>
              <div className="income-item-left">
                <img src={item.img} alt={item.title} />
                <div className="income-item-info">
                  <span>{item.title}</span>
                  <p>{item.desc}</p>
                </div>
              </div>
              <div className="income-item-right">
                <p>32 in stock</p>
                <p>$ 45.99</p>
                <p>20</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Income;
