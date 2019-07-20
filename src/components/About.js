import React from "react";
import kickPic from "../img/kickPic.jpg";

const aboutDivStyles = {
  margin: 'auto',
  marginTop: '5%',
  background: '#28a6dc',
  height: '33%',
  width: '50%'
}

const aboutH1Styles = {
  textAlign: 'center',
  fontSize: 20
}


const About = () => {
  return (
    <div className='cardStyle'>
    <h1>About This App:</h1>
      <img className="cardImage" src={kickPic} alt="Picture of Chuck Norris kicking" />
      <p style={aboutH1Styles}>
        This web app was created using React, React Router, and <a href="https://api.chucknorris.io/">chucknorris.io</a> as it's API.
      </p>
    </div>
  );
};

export default About;