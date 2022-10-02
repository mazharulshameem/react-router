import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <Link to="/home">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/friends">FRIENDS</Link>
        <Link to="/products">PRODUCTS</Link>
      </div>
      <h1> Welcome Here!</h1>
    </div>
  );
};

export default Header;
