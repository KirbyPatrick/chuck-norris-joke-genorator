import React from "react";

class NewJokeButton extends React.Component {
  render() {
    return (
      <div className="buttonContainer ">
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.props.onClick}
        >
          New Fact
        </button>
      </div>
    );
  }
}
export default NewJokeButton;
