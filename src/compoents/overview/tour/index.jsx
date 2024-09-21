import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Space } from "antd";
import React, { useEffect, useState } from "react";
import mixvivu from "../../../image/Mixivivuduthuyen.gif";
import axios from "axios";
import "./tour.scss";
function TourView() {
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
        console.log(result.data.data)
        setTour(result.data.data)
      })
      .catch((error) => console.log(error));
  });
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
      <div className="grid h-screen w-full grid-cols-4 gap-2">
        {tour.map((item,index) => (
            <div className="col-span-1" key={index}>
            <div className=" w-full rounded-2xl bg-[#fff] shadow-xl">
              <div className="h-52 w-full rounded-tl-2xl rounded-tr-2xl bg-black">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TourView;
