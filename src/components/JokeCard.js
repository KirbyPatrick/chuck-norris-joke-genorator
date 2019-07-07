import React, { Component } from "react";
import NewJokeButton from "./NewJokeButton";
import cardImage from "../cardImage.png";

class JokeCard extends Component {
  render() {
    return (
      <div>
        <div className="cardStyle">
          <h1>Card Title</h1>
          <img className="cardImage" src={cardImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            magnam eligendi blanditiis qui officia alias doloribus saepe veniam
            atque quae veritatis eum, nihil dicta unde optio in reiciendis?
            Recusandae, laboriosam.
          </p>
          <NewJokeButton />
        </div>
      </div>
    );
  }
}

export default JokeCard;
