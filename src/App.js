import React from "react";
import "./App.css";
import Header from "./components/Header";
import JokeCard from "./components/JokeCard";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="gridWrapper">
        <JokeCard />
      </div>
    </div>
  );
}

export default App;
