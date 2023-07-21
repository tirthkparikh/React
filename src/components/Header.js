import React, { useState } from "react";
import { CART_URL, LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("login");
  const status = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div>
        <img className=" p-3 w-40" src={LOGO_URL} />
      </div>
      <div className="w-180">
        <ul className="flex justify-center align-middle text-center w-180 p-5 m-4">
          <li className="px-3">online status: {status ? "🟢" : "🔴"}</li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3">
            <img className="w-6" src={CART_URL} height="20px" />
          </li>
          <li className="w-7 px-3 pr-5">
            <button
              onClick={() => {
                btn == "login" ? setBtn("logout") : setBtn("login");
              }}
            >
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
