import { useState } from "react";
import React from "react";
import Draggable from "react-draggable";

export const Card = ({ player }) => {
  const nodeRef = React.useRef(null);
  return (
    <>
      <Draggable nodeRef={nodeRef}>
        <div ref={nodeRef} style={{ position: "absolute" }}>
          <img src="https://picsum.photos/50/50" />
          <p>{player.name}</p>
        </div>
      </Draggable>
      {/* <div
      draggable="true"
      onDragOver={(e) => {
        e.stopPropagation();
        e.preventDefault();
        const yAxis = e.pageY;
        const xAxis = e.pageX;
        setPosition({ left: yAxis });
      }}
      style={{
        position: "absolute",
        top: position.top + "px",
        left: position.left + "px",
      }}
    >
      <img src="https://picsum.photos/50/50" />
      <p>{player.name}</p>
    </div> */}
    </>
  );
};
