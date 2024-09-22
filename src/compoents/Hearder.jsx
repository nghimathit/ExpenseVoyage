import React, { Fragment, useContext, useEffect, useState } from "react";
import "./header/headers.scss";
import logo from "../image/logo.jpeg";
import { ModalContext } from "@Context/ModalProvider";
import Login from "./Login";
import Register from "./Register";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
const Hearder = () => {
  const {
    setisShow,
    setContent,
    totalPrice,
    setMoney,
    typeCurreny,
    setTypeCurreny,
    originalMoney,
    setTotalPrice,
    initialPrice,
    userid,
  } = useContext(ModalContext);
  const [checkPathLogin, setcheckPathLogin] = useState(true);
  //const [userInfo, setUserInfo] = useState({});
  const location = useLocation();

  const userInfo = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState({});

  useEffect(() => {
    if (userid) {
      axios
        .get(`http://localhost:5096/api/User/${userid.id}`)
        .then((result) => {
          setUser(result.data.data);
          console.log("user header", result.data.data);
        })
        .catch((err) => console.error(err));
    }
  }, [userid]);
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setcheckPathLogin(false);
    } else {
      setcheckPathLogin(true);
    }
  }, [location.pathname]);
  // đổi tiền tệ
  const handleCurrencyChange = () => {
    const selectedCurrency = document.getElementById("currency").value;
    if (selectedCurrency === "VND") {
      const usd = initialPrice * 24615;
      setTypeCurreny("đ");
      setTotalPrice(usd);
    } else if (selectedCurrency === "EURO") {
      const euro = initialPrice * 0.96;
      setTypeCurreny("€");
      setTotalPrice(euro);
    } else if (selectedCurrency === "GBP") {
      const euro = initialPrice * 0.75;
      setTypeCurreny("€");
      setTotalPrice(euro);
    } else {
      setTypeCurreny("$");
      setTotalPrice(initialPrice);
    }
    console.log(selectedCurrency);
  };

  return (
    <div>
      <header className="wrapper">
        <Link to={""}>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="inner-flex">
          <div className="menu">
            <Link to={"/home"}>
              <li className="list">Home</li>
            </Link>
            <Link to={"/overview"}>
              <li className="list">Overview</li>
            </Link>
            <Link to={"/tour"}>
              <li className="list">Tour</li>
            </Link>
          </div>

          <div className="user">
            <div className="currency">
              <select id="currency" onChange={handleCurrencyChange}>
                <option value="USD">USD</option>
                <option value="VND">VND</option>
                <option value="EURO">EURO</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            {userInfo ? (
              <div className="avatar-username relative">
                <div className="circle">
                  <div className="avatar">
                    <img
                      src="https://zpsocial2-f7-org.zadn.vn/677ef46d4c81acdff590.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="username flex items-center justify-center whitespace-nowrap">
                  {" "}
                  <span className="mr-1">Welcome</span> {user.name}
                </div>
              </div>
            ) : (
              <Link to={"/login"}>
                <div
                  className="login"
                  // onClick={() => {
                  //   if (checkPathLogin) {
                  //     setisShow(true);
                  //     setContent(<Login />);
                  //   }
                  // }}
                >
                  <button className="w-full">Login</button>
                </div>
              </Link>
            )}
            {userInfo ? (
              <Fragment />
            ) : (
              <div
                className="register"
                onClick={() => {
                  if (checkPathLogin) {
                    setisShow(true);
                    setContent(<Register />);
                  }
                }}
              >
                <button>Register</button>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

Hearder.propTypes = {};

export default Hearder;
