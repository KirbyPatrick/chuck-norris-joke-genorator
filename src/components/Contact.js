import React from "react";
import githubLogo from "../img/githubLogo.png";
import linkedinLogo from "../img/linkedinLogo.png";
import codewarsLogo from "../img/codewarsLogo.png";
import twitterLogo from "../img/twitterLogo.png";
import emailLogo from "../img/emailLogo.png";

const flexContainer = {
  display: "flex",
  justifyContent: "space-evenly",
  alignContent: "center"
};

const imgStyles = {
  width: 100,
  height: 100,
};

const Contact = () => {
  return (
    <div className="cardStyle">
      <div>
        <h1>Connect With Me:</h1>
      </div>
      <div style={flexContainer}>
        <a href="https://github.com/KirbyPatrick" target="_blank">
          <img style={imgStyles} src={githubLogo} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/patrick-d-kirby/" target="_blank">
          <img style={imgStyles} src={linkedinLogo} alt="" />
        </a>
        <a href="https://www.codewars.com/users/KirbyPatrick" target="_blank">
          <img style={imgStyles} src={codewarsLogo} alt="" />
        </a>
        <a href="https://twitter.com/Kirby_Patrick" target="_blank">
          <img style={imgStyles} src={twitterLogo} alt="" />
        </a>
        <a href="mailto:pKirbyInAtx@gmail.com">
          <img style={imgStyles} src={emailLogo} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
