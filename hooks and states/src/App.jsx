import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  // increase by 1
  const increase = () => {
    setCounter(counter + 1);
  };

  // decrease by 1
  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  // reset
  const reset = () => {
    setCounter(counter * 0);
  };
  // ...........
  return (
    <>
      <h1>The Counter is {counter}</h1>
      <button onClick={increase}>Increase by 1</button> <br /> <br />
      <button onClick={decrease}>Decrease by 1</button> <br /> <br />
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
