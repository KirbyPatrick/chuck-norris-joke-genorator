import React from "react";
import githubLogo from "../img/githubLogo.png";
import linkedinLogo from "../img/linkedinLogo.png";
import codewarsLogo from "../img/codewarsLogo.png";
import twitterLogo from "../img/twitterLogo.png";
import emailLogo from "../img/emailLogo.png";

const imgStyles = {
  width: 100,
  height: 100
};

const Contact = () => {
  return (
    <div className="cardStyle">
      <div>
        <h1 className="mb-5">Connect With Me:</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-2 mt-4 mx-auto">
            <a
              href="https://github.com/KirbyPatrick/chuck-norris-joke-genorator"
              target="_blank"
            >
              <img style={imgStyles} src={githubLogo} alt="github link" />
            </a>
          </div>

          <div className="col-md-2 mt-4 mx-auto">
            <a
              href="https://www.linkedin.com/in/patrick-d-kirby/"
              target="_blank"
            >
              <img style={imgStyles} src={linkedinLogo} alt="Linkedin link" />
            </a>
          </div>

          <div className="col-md-2 mt-4 mx-auto">
            <a
              href="https://www.codewars.com/users/KirbyPatrick"
              target="_blank"
            >
              <img style={imgStyles} src={codewarsLogo} alt="Codewars link" />
            </a>
          </div>

          <div className="col-md-2 mt-4 mx-auto">
            <a href="https://twitter.com/Kirby_Patrick" target="_blank">
              <img style={imgStyles} src={twitterLogo} alt="twitter link" />
            </a>
          </div>

          <div className="col-md-2 mt-4 mx-auto">
            <a href="mailto:pKirbyInAtx@gmail.com">
              <img style={imgStyles} src={emailLogo} alt="email link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
