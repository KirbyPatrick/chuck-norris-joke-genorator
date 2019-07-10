import React, { Component } from "react";
import cardImage from "../cardImage.png";
import NewJokeButton from "./NewJokeButton";

class JokeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "asdf"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // getJoke = async e => {
  //   e.preventDefault();
  //   const req = await fetch(`https://api.chucknorris.io/jokes/random`);

  //   const res = await req.json();
  //   this.setState({ joke: res.value });
  //   console.log(this.state.joke);
  // };

  getJoke = async e => {
    e.preventDefault();
    const api_call = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await api_call.json();
    console.log(data);
  };

  handleClick() {
    console.log("click worked!!!!!!!");
    this.setState({
      joke: this.getJoke()
    });
  }

  render() {
    return (
      <div>
        <div className="cardStyle">
          <h1>Card Title</h1>
          <img className="cardImage" src={cardImage} alt="" />
          <p>{this.state.joke}</p>
          <NewJokeButton onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default JokeCard;
