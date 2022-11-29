import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Scene } from "./components/Scene";
import { Test } from "./components/Test";

const data = [
  { id: 1, name: "aaron", top: 0, left: 400 },
  { id: 2, name: "rob", top: 200, left: 300 },
  { id: 3, name: "william", top: 200, left: 500 },
  { id: 4, name: "thomas", top: 300, left: 400 },
  { id: 5, name: "granit", top: 400, left: 300 },
  { id: 6, name: "ben", top: 200, left: 200 },
  { id: 7, name: "alex", top: 200, left: 600 },
  { id: 8, name: "sako", top: 700, left: 200 },
  { id: 9, name: "jesus", top: 750, left: 400 },
  { id: 10, name: "martin", top: 400, left: 600 },
  { id: 11, name: "gabi", top: 0, left: 0 },
];

function App() {
  const [count, setCount] = useState(0);
  const [isDraggable, setIsDragabble] = useState(false);

  return (
    <div className="App">
      <Scene data={data} isDraggable={isDraggable} />
      <button onClick={() => setIsDragabble(!isDraggable)}>{isDraggable===true?'Block':'Drag'}</button>
      {/* <Test /> */}
    </div>
  );
}

export default App;
