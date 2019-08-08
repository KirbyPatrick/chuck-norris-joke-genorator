import React from "react";
import kickPic from "../img/kickPic.jpg";

const aboutH1Styles = {
  textAlign: "center",
  fontSize: 20
};

const About = () => {
  return (
    <div className="cardStyle col-lg-6 mx-auto">
      <h1>About This App:</h1>
      <img className="cardImage" src={kickPic} alt="Chuck Norris kicking" />
      <p className="mt-4" style={aboutH1Styles}>
        This web app was created using React, React Router, Bootstrap and{" "}
        <a href="https://api.chucknorris.io/">
          <span className="text-danger">chucknorris.io</span>
        </a>{" "}
        as it's API.
      </p>
    </div>
  );
};

export default About;
