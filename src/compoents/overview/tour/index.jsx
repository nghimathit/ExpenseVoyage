import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Space } from "antd";
import React, { useContext, useEffect, useState } from "react";
import mixvivu from "../../../image/Mixivivuduthuyen.gif";
import axios from "axios";
import "./tour.scss";
import currency from "currency.js";
import { ModalContext } from "@Context/ModalProvider";
import { Link } from "react-router-dom";
function TourView() {
  const {
    startDate,
    endDate,
    setonPriceChange,
    setTotalPrice,
    typeCurreny,
    setInitialPrice,
  } = useContext(ModalContext);
  const [image, setImage] = useState(mixvivu);
  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview);
    };
  }, [image]);
  const handleImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };
  const [tour, setTour] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5096/api/Tour")
      .then((result) => {
        console.log(result.data.data);
        setTour(result.data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="h-full w-full pl-52">
      <div className="relative mb-5 w-full bg-transparent">
        <div className="relative mb-5 h-80 w-full">
          <img
            className="h-[90%] w-full object-cover"
            src={typeof image === "string" ? image : image.preview}
            alt=""
          />
          <label
            htmlFor="image"
            className="absolute right-5 top-3 cursor-pointer rounded-full bg-[#000]/40 px-[10px] py-[5px] hover:bg-[#000]/90"
          >
            <FontAwesomeIcon icon={faPen} color="#fff" />
          </label>
          <input type="file" id="image" hidden onChange={handleImage} />
        </div>
      </div>
      <div className="grid w-full grid-cols-4 gap-2 my-2 mb-4">
        {tour.map((item, index) => (
        <Link to={`/tour/${item.id}`} key={index}>
          <div className="col-span-1">
            <div className="w-full cursor-pointer rounded-2xl bg-[#fff] shadow-xl">
              <div className="h-52 w-full rounded-tl-2xl rounded-tr-2xl">
                <img
                  className="h-full w-full rounded-tl-2xl rounded-tr-2xl object-cover"
                  src={item.imageTour}
                  alt=""
                />
              </div>
              <div className="w-full p-3">
                <span className="text-[20px] font-light">{item.tourName}</span>
                <div className="three-lines text-[14px] text-[#6c757d]">
                  {item.description}
                </div>
                <span className="text-[red]">
                  {currency(item.price, {
                    symbol: typeCurreny,
                    precision: 2,
                  }).format()}
                </span>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TourView;
