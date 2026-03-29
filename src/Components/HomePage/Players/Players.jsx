import React, { use, useState } from "react";
import AvailablePlayers from "../../AvaialablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoin, coin }) => {
  console.log(playersPromise);

  const players = use(playersPromise);
  // console.log(players);

  const [selectedType, setSelectedType] = useState("available");
  // console.log(selectedType, "selectedType");

  return (
    <div className="max-w-11/12 mx-auto">
      <div className="flex justify-between items-center my-5">
        {selectedType === "available" ? (
          <h2 className="font-bold text-xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-xl">Selected Players (4/6)</h2>
        )}

        <div>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn rounded-l-xl ${selectedType === "available" ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-r-xl`}
          >
            Selected (0)
          </button>
        </div>
      </div>

      {selectedType === "available" ? (
        <AvailablePlayers players={players} setCoin={setCoin} coin={coin} />
      ) : (
        <SelectedPlayers />
      )}
    </div>
  );
};

export default Players;
