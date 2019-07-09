import React, { Component } from "react";
import cardImage from "../cardImage.png";
import NewJokeButton from "./NewJokeButton";

class JokeCard extends Component {
  state = {
    joke: "lorem ipasdf asdf asdf asdf asdf asdf asdfasdfasdf asdf asdfasdf "
  };

  handleClick() {
    console.log("handleClick is working");
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
