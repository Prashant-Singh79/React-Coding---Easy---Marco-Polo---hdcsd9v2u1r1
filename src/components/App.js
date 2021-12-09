import React from 'react'
import '../styles/App.css';
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, updateData] = useState("Marco");
  const [btn, updateButton] = useState("Polo");
  function change(e) {
    if (e.target.id === "marco-polo-toggler") {
      updateData(btn);
      updateButton(data);
    }
  }
  return (
    <div className="App">
      <h1 id="marco-polo">{data}</h1>
      <button id="marco-polo-toggler" onClick={change}>
        {btn}
      </button>
    </div>
  );
}
