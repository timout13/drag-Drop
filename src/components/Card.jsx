import { useState } from "react";
import React from "react";
import Draggable from "react-draggable";

export const Card = ({ player, isDraggable }) => {
  const [cardClass, setCardClass] = useState("card");
  const handleClick = (e) => {
    e.preventDefault();
    console.log(isDraggable);
    if (cardClass === "card") {
      console.log("oui");
      setCardClass("");
    }
  };
  const nodeRef = React.useRef(null);
  return (
    <>
      {isDraggable ? (
        <Draggable nodeRef={nodeRef}>
          <div
            onClick={handleClick}
            ref={nodeRef}
            style={{ position: "absolute", top: player.top, left: player.left }}
            className={cardClass}
          >
            <img src="https://picsum.photos/50/50" />
            <p>{player.name}</p>
          </div>
        </Draggable>
      ) : (
        <div
          onClick={handleClick}
          ref={nodeRef}
          style={{ position: "absolute", top: player.top, left: player.left }}
          className={cardClass}
        >
          <img src="https://picsum.photos/50/50" />
          <p>{player.name}</p>
        </div>
      )}

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
