import "./App.css";
import React from "react";
import Button from "./components/button";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("#A6A6A8");
  return (
    <div className="body-parent" style={{ backgroundColor: color }}>
      <div className="navbar">
        <h1>Color Picker</h1>
        <div>
          <Button title="RED" onClick={() => setColor("red")} />
        </div>
      </div>
    </div>
  );
}

export default App;
