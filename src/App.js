import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import JokeCard from "./components/JokeCard";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="gridWrapper">
          <JokeCard getjoke={this.getjoke} />
        </div>
      </div>
    );
  }
}

export default App;
