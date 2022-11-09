import React from "react";
import "./ViewImage.css";
const ViewImage = ({ item }) => {
  const { name, img } = item;
  return (
    <div className="item">
      <img className="w-100" src={img} alt="" />
      <h2>{name}</h2>
    </div>
  );
};

export default ViewImage;
