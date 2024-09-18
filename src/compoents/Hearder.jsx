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
          <div className="currency">
            <select id="currency">
              <option value="VND">VND</option>
              <option value="USD">USD</option>
              <option value="EURO">EURO</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
          {/* <div className="login">
            <button>Login</button>
          </div>
          <div className="register">
            <button>Register</button>
          </div> */}
          <div className="avatar-username">
            <div className="circle">
              <div className="avatar">
                <img
                  src="https://zpsocial2-f7-org.zadn.vn/677ef46d4c81acdff590.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="username">Van Nghi</div>
          </div>
        </div>
      </div>
    </header>
  );
};

Hearder.propTypes = {};

export default Hearder;
