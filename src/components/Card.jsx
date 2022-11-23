import { useState } from "react";
import React from "react";
import Draggable from "react-draggable";

export const Card = ({ player }) => {
  const [cardClass, setCardClass] = useState("card");
  const handleClick = () => {
    if (cardClass === "card") {
      console.log("oui");
      setCardClass("");
    }
  };
  const nodeRef = React.useRef(null);
  return (
    <>
      <Draggable nodeRef={nodeRef}>
        <div
          onPointerOver={handleClick}
          ref={nodeRef}
          style={{ position: "absolute", top: player.top, left: player.left }}
          className={cardClass}
        >
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
