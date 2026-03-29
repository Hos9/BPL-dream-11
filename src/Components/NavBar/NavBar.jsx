import React from "react";
import NavImg from "../../assets/dollar.png";

const NavBar = ({ coin }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-11/12 mx-auto">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>{" "}
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost flex gap-2 w-full p-4 font-bold text-xl">
          {coin} Coins
          <img src={NavImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
