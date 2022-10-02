import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <NavLink className={({ isActive }) =>
              isActive ? 'active' : undefined
            } to="/home">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/friends">FRIENDS</NavLink>
        <NavLink to="/products">PRODUCTS</NavLink>
      </div>
      <h1> Welcome Here!</h1>
    </div>
  );
};

export default Header;
