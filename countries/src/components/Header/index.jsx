import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <h1 className="header-title">Where in the World</h1>
      <h4>DarkMode
        <input type='checkbox' ></input>
      </h4>
    </div>
  );
};

export default Header;
