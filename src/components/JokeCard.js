import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import NewJokeButton from "./NewJokeButton";

class JokeCard extends Component {
  render() {
    return (
      <div>
        <Card className="cardStyle">
          <h1>Card Title</h1>
          <img src="https://via.placeholder.com/250x250" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            magnam eligendi blanditiis qui officia alias doloribus saepe veniam
            atque quae veritatis eum, nihil dicta unde optio in reiciendis?
            Recusandae, laboriosam.
          </p>
          <NewJokeButton />
        </Card>
      </div>
    );
  }
}

export default JokeCard;
