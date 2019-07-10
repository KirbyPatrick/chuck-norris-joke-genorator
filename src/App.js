import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import JokeCard from "./components/JokeCard";

class App extends Component {
  // getJoke = async e => {
  //   e.preventDefault();
  //   const api_call = await fetch("https://api.chucknorris.io/jokes/random");
  //   const data = await api_call.json();
  //   console.log(data);
  // };

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
