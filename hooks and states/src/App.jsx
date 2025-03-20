import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  // increas button
  const increase = () => {
    setCount(count + 1);
    setMessage("");
  };
  // decrease
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setMessage("Number can't go in minus there");
    }
  };
  // reset
  const reset = () => {
    setCount(0);
    setMessage("");
  };
  return (
    <>
      <h1>{message || `The Counter is ${count}`}</h1>
      <button onClick={increase}>Increase</button>
      <br />
      <br />
      <button onClick={decrease}>Decrease</button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
