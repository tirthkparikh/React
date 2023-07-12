import React from "react";
import { CART_URL, LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <img src={CART_URL} height="20px" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
