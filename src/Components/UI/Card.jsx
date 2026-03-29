import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Card = ({ player, setCoin, coin }) => {
  const [isSelected, setSelected] = useState(false);

  const handleChosePlayer = () => {
    let newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(coin - player.price);
    } else {
      alert("Not enough coin to purchase!!");
      return;
    }

    alert(`${player.playerName} is selected`);
    setSelected(true);
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-6">
        <figure>
          <img src={player.playerImg} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-semibold text-xl">
            <FaUser />
            {player.playerName}
          </h2>
          <div className="flex">
            <p className="flex items-center gap-2 text-gray-400">
              <FaFlag /> {player.playerCountry}
            </p>
            <button className="btn">{player.playerType}</button>
          </div>
          <span className="border-b-2 border-gray-300 py-2"></span>
          <div>
            <h4 className="py-2 font-bold">Rating: {player.rating}</h4>
            <div className="flex">
              <p className="py-2  font-semibold">{player.battingStyle}</p>
              <button className="text-neutral">{player.bowlingStyle}</button>
            </div>
            <div className="flex">
              <p className=" font-semibold">Price: ${player.price}</p>
              <button
                onClick={handleChosePlayer}
                disabled={isSelected}
                className="btn "
              >
                {isSelected ? "Selected" : "Choose Player"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
