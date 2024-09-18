import React from "react";
import "./header/headers.scss";
import logo from "../image/logovivu.webp";
const Hearder = (props) => {
  return (
    <header className="wrapper">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      <div className="inner-flex">
        <div className="menu">
          <li className="list">Find a Cruise</li>
          <li className="list">Find Flights</li>
          <li className="list">About us</li>
        </div>
        <div className="user">
            <div className="login">
                <button>Login</button>
            </div>
            <div className="register">
                <button>Register</button>
            </div>
        </div>
      </div>
    </header>
  );
};

Hearder.propTypes = {};

export default Hearder;
