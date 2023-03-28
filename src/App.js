import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const cards = ["봄", "여름", "가을", "겨울"];
  const cardlist = cards.map((card, index) => (
    <div className="card" key={index}>
      {card}
    </div>
  ));
  return (
    <div className="wrap">
      <header className="header">헤더부분</header>
      <main>
        <div className="content">{cardlist}</div>
      </main>
    </div>
  );
}

export default App;
