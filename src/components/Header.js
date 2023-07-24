import React, { useContext, useState } from "react";
import { CART_URL, LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import userLoggedI from "../utils/userContext";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const Header = () => {
  const [btn, setBtn] = useState("login");
  const status = useOnlineStatus();
  const LoggedIn = useContext(userLoggedI);
  const cart = useSelector((data) => data.cart.items);
  console.log(cart);

  return (
    <div className="flex justify-between bg-green-100 shadow-lg mb-0">
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
          <li className="px-3 pr-10 pb-2">
            <Link to="/cart">
              <div class="relative py-2 ">
                <div class="t-0 bottom-5 absolute left-5">
                  <p class="flex h-[1px] w-[1px] items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                    {cart.length}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="file:  top-0 h-8 w-8 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </Link>
          </li>
          <li className="w-7 mr-3 pr-5">
            <button
              onClick={() => {
                btn == "login" ? setBtn("logout") : setBtn("login");
              }}
            >
              {btn}
            </button>
          </li>
          <li className="pl-3">{LoggedIn.userLoggedIn}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
