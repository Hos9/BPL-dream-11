import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const AvailablePlayers = ({ players }) => {
  console.log(players, "players");
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser />
          Card Title
        </h2>
        <div className="flex justify-between">
          <p className="flex items-center gap-2">
            <FaFlag /> Country
          </p>
          <button className="btn">Type of Players</button>
        </div>
        <div>
          <h4>Rating</h4>
          <div className="flex justify-between">
            <p>Left-Hand-Bat</p>
            <p className="text-neutral">Left-Hand-Bat</p>
          </div>
          <div className="flex justify-between">
            <p>Price: $00</p>
            <button>Chose Player</button>
          </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;
