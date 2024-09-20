import Login from "@compoents/Login";
import React, { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isShow, setisShow] = useState(false);
  const [content, setContent] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [countries, setCountries] = useState();
  const [typeCurreny, setTypeCurreny] = useState("$");
  const [originalMoney] = useState(500000);
  const [onPriceChange, setonPriceChange] = useState();
  const [initialPrice, setInitialPrice] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (onPriceChange) {
      setTotalPrice((prevTotal) => prevTotal + onPriceChange);
    }
  }, [onPriceChange]);
  //   không cho cuộn trang web
  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isShow]);
  return (
    <ModalContext.Provider
      value={{
        setisShow,
        setContent,
        startDate,
        endDate,
        setStartDate,
        setEndDate,
        countries,
        setCountries,
        typeCurreny,
        setTypeCurreny,
        originalMoney,
        onPriceChange,
        setInitialPrice,
        totalPrice,
        setonPriceChange,
        initialPrice,
        setTotalPrice,
      }}
    >
      {children}
      {isShow && (
        <div className="fixed inset-0 z-10">
          <div
            className="absolute inset-0 flex items-center justify-center bg-slate-600/60"
            onClick={() => setisShow(false)}
          >
            <div className="z-20" onClick={(e) => e.stopPropagation()}>
              {content}
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
