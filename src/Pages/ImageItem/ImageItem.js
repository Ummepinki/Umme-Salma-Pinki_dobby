import React, { useEffect, useState } from "react";
import ViewImage from "../ViewImage/ViewImage";
import "./ImageItem.css";
const ImageItem = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="container">
      <div>
        <h2 className="text-center mt-4 mb-2">IMAGE ITEMS</h2>
        <div className="item-container">
          {items.map((item) => (
            <ViewImage key={item._id} item={item}></ViewImage>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
