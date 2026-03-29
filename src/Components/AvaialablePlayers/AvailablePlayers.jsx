import React from "react";
import Card from "../UI/Card";

const AvailablePlayers = ({ players }) => {
  // console.log(players, "players");
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => {
          console.log(player, "players");
          return <Card player={player} />;
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
