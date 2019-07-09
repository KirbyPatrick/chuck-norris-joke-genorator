import React from "react";
import Button from "@material-ui/core/Button";

class NewJokeButton extends React.Component {
  render() {
    return (
      <div className="buttonContainer">
        <button onClick={this.props.onClick} variant="contained">
          New Fact
        </button>
      </div>
    );
  }
}
export default NewJokeButton;
