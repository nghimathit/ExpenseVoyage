import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Space } from "antd";
import React, { useContext, useEffect, useState } from "react";
import mixvivu from "../../../image/Mixivivuduthuyen.gif";
import axios from "axios";
import "./tour.scss";
import { useParams } from "react-router-dom";
import TourComponent from "./TourComponent";
import currency from "currency.js";
import { ModalContext } from "@Context/ModalProvider";
function Tourbyid() {
  const [tour, setTour] = useState([]);
  const param = useParams("id");
  const {
    startDate,
    endDate,
    setonPriceChange,
    setTotalPrice,
    typeCurreny,
    setInitialPrice,
  } = useContext(ModalContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5096/api/Tour/${param.id}`)
      .then((result) => {
        console.log(result.data.data);
        setTour(result.data.data);
      })
      .catch((error) => console.log(error));
  }, [param.id]);
  const [image, setImage] = useState(tour.imageTour);
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

  return (
    <div className="h-full w-full pl-52">
      <div className="relative mb-5 w-full bg-transparent">
        <div className="relative mb-5 h-80 w-full">
          <img
            className="h-[90%] w-full object-cover"
            src={tour.imageTour}
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
      <div className="w-full text-center">
        <span className="text-[30px] font-bold">Tour {tour.tourName}</span>
      </div>
      <div className="my-4 w-full">
        <TourComponent content={tour.description} />
      </div>
      <div className="w-full my-4 text-end">
        <button className="rounded-full bg-[#FF9903] p-3 text-[#fff]">
          Reference price &emsp; => &emsp;
           {currency(tour.price, {
            symbol: typeCurreny,
            precision: 2,
          }).format()}
        </button>
      </div>
    </div>
  );
}

export default Tourbyid;
