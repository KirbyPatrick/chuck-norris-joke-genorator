import React, { Component } from "react";
import cardImage from "../img/cardImage.png";
import NewJokeButton from "./NewJokeButton";

class JokeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke:
        "What's the difference between Jam and Jelly? Chuck Norris CANNOT Jelly his fist up your ass"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getJoke = async e => {
    e.preventDefault();
    const api_call = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await api_call.json();
    console.log(data.value);
    this.setState({
      joke: data.value
    });
  };

  handleClick() {
    this.setState({
      joke: this.getJoke()
    });
  }

  render() {
    return (
      <div>
        <div className="cardStyle">
          <h1>FACT:</h1>
          <img className="cardImage" src={cardImage} alt="" />
          <div className="paragraphContainer ">
            <p className="mt-2">{this.state.joke}</p>
          </div>
        </div>
        <div className="mt-3">
          <NewJokeButton onClick={this.getJoke} />
        </div>
      </div>
    );
  }
}

export default JokeCard;
