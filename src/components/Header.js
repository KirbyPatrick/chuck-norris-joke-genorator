import React from "react";
import logo from "../logo.png";

const Header = () => {
  return (
    <div className="headerContainer">
      <h3>Home</h3>
      <h3>About</h3>
      <h3>Contact</h3>
      <div className="titleContainer">
        <h1>Chuck Norris Facts</h1>
      </div>
      <div className="logoContainer">
        <img src={logo} alt="Smiley face" height="75" width="75" />
      </div>
    </div>
  );
};

export default Header;
