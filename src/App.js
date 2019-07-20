import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Error from "./components/Error";

// import JokeCard from "./components/JokeCard";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/error" component={Error} />
          {/* <div className="gridWrapper">
            <JokeCard getjoke={this.getjoke} />
          </div> */}
        </div>
      </Router>
    );
  }
}

export default App;
