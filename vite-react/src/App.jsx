import React from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <div className="parent-card-div">
      <Card
        title="OWL"
        desc="Silent watcher of the midnight sky,
Wisdom gleams within its golden eye."
        img="src/assets/one.jpg"
      />
      <Card
        title="CROW"
        desc="Dark-winged shadow, sharp and sly,
A voice that echoes through the sky."
        img="src/assets/four.png"
      />
      <Card
        title="EAGLE"
        desc="Majestic hunter, fierce and free,
Ruler of the sky and sea."
        img="src/assets/two.jpg"
      />
      <Card
        title="PEGION"
        desc="Gentle wings in peaceful flight,
A symbol of love in soft moonlight."
        img="src/assets/three.jpg"
      />
    </div>
  );
}

export default App;
