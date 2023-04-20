import React from "react";
import "./ReviewItem.css";

import { TrashIcon } from "@heroicons/react/24/outline";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  // console.log(product);
  const { id, name, img, price, quantity, shipping } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="review-title">{name}</p>
        <p>
          Price: <span className="orange-text">{price}</span>
        </p>
        <p>
          Shipping: <span className="orange-text">{shipping}</span>
        </p>
      </div>
      <button className="btn-dlt" onClick={() => handleRemoveFromCart(id)}>
        <TrashIcon className="dlt-icon" />
      </button>
    </div>
  );
};

export default ReviewItem;
