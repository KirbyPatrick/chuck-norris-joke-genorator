import React from "react";
import logo from "../img/logo.png";
import { Link } from 'react-router-dom'

const Header = () => {

const navStyle = {
  color: 'black',
  margin: 'auto',
  marginLeft: 50
}

  return (
    <div className="headerContainer">
    <Link style={navStyle} to='/'> 
      <h3>Home</h3>
    </Link>
    <Link style={navStyle}  to='/about'> 
      <h3>About</h3>
    </Link>
    <Link style={navStyle}  to='contact'> 
      <h3>Contact</h3>
    </Link>

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
