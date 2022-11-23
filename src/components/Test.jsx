import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";

export const Test = () => {
  const ref = useRef(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, {
      cacheBust: true,
      backgroundColor: "#fff",
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
      <div ref={ref}>
        <img src="https://picsum.photos/50/50" />
        <p style={{ backgroundColor: "red" }}>TEst</p>
      </div>
      <button onClick={onButtonClick}>Click me</button>
    </>
  );
};
