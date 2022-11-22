import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Scene } from "./components/Scene";

const data = [
  { id: 1, name: "aaron" },
  { id: 2, name: "rob" },
  { id: 3, name: "william" },
  { id: 4, name: "thomas" },
  { id: 5, name: "granit" },
  { id: 6, name: "ben" },
  { id: 7, name: "alex" },
  { id: 8, name: "sako" },
  { id: 9, name: "jesus" },
  { id: 10, name: "martin" },
  { id: 11, name: "gabi" },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Scene data={data} />
    </div>
  );
}

export default App;
