import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navStyle = {
    color: "black",
    margin: "auto",
    marginLeft: 50
  };

  const linkStyle = {
    display: "flex"
  };

  return (
    <div class="container-fluid ">
      <div class="row">
        <div className="col-12 headerContainer boxy">
          <div className="row">
            <div style={linkStyle} className="col-3 boxy">
              <Link style={navStyle} to="/">
                <h3>Home</h3>
              </Link>
              <Link style={navStyle} to="/about">
                <h3>About</h3>
              </Link>
              <Link style={navStyle} to="contact">
                <h3>Contact</h3>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-3 text-center">
              <h1>Chuck Norris Facts</h1>
            </div>
          </div>

          <div>
            <Link to="/" className="boxy float-right">
              <img src={logo} alt="Smiley face" height="75" width="75" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
