import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const NavBar2 = () => {
  return (
    <nav class="container-fluid bg-danger">
      <div class="row">
        <div className="col-md-4 mx-auto">
          <ul className="mt-3">
            <Link to="/">
              <li className="ml-3 mr-3 text-dark">Home</li>
            </Link>
            <Link to="/about">
              <li className="ml-3 mr-3 text-dark">About</li>
            </Link>
            <Link to="/contact">
              <li className="ml-3 mr-3 text-dark">Contact</li>
            </Link>
          </ul>
        </div>

        <div class="col-lg-4 d-none d-xl-block ">
          <h1 className="text-center mt-2">Chuck Norris Facts!</h1>
        </div>

        <div class="col-lg-4 d-none d-xl-block">
          <Link to="/">
            <img
              className="float-right"
              src={logo}
              alt="Smiley face"
              height="75"
              width="75"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar2;
