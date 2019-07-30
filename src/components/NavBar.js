import React from "react";
import logo from "../img/logo.png";
import { Link } from 'react-router-dom'

const NavBar = () => {

const navStyle = {
  color: 'black',
  margin: 'auto',
  marginLeft: 50
}

const linkStyle = {
  display: 'flex'
}

  return (

    <div className="headerContainer boxy">
      <div style={linkStyle} className="boxy">
      <Link style={navStyle} to='/'> 
        <h3>Home</h3>
      </Link>
      <Link style={navStyle}  to='/about'> 
        <h3>About</h3>
      </Link>
      <Link style={navStyle}  to='contact'> 
        <h3>Contact</h3>
      </Link>
      </div>
      <div className="titleContainer boxy">
        <h1>Chuck Norris Facts</h1>
      </div>
      <div className="logoContainer">
      <Link to='/'> 
        <img src={logo} alt="Smiley face" height="75" width="75" />
              </Link>
      </div>
    </div>
  );
};

export default NavBar;
