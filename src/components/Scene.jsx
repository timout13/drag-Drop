import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import { Card } from "./Card";

export const Scene = ({ data, isDraggable }) => {
  const ref = useRef(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, {
      cacheBust: true,

      width: 800,
      height: 800,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "test.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);
  return (
    <>
      <h2>Scene</h2>
      <div
        className="scene"
        ref={ref}
        style={{
          position: "relative",
        }}
      >
        {data.map((player) => (
          <Card key={player.id} player={player} isDraggable={isDraggable} />
        ))}
      </div>
      <button onClick={onButtonClick}>Click me</button>
    </>
  );
};
