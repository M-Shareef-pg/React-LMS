import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <Card title="Spiderman" />
      <Card title="Spiderman" />
      <Card title="Spiderman" />
    </div>
  );
}

export default App;
