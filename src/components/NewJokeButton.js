import React from "react";
import Button from "@material-ui/core/Button";

class NewJokeButton extends React.Component {
  render() {
    return (
      <div className="buttonContainer ">
        <Button
          variant="contained"
          color="secondary"
          onClick={this.props.onClick}
        >
          New Fact
        </Button>
      </div>
    );
  }
}
export default NewJokeButton;
