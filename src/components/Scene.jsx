import React from "react";
import { Card } from "./Card";

export const Scene = ({ data }) => {
  return (
    <>
      <h2>Scene</h2>
      <div className="scene">
        {data.map((player) => (
          <Card key={player.id} player={player} />
        ))}
      </div>
    </>
  );
};
