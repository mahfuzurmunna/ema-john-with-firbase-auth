import React from "react";
import "./Product.css";

const Product = (props) => {
  const { id, img, name, price, ratings, seller } = props.product;
  const addToCart = props.addToCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div>
        <h4>{name}</h4>
        <p>Price: {price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <div>
        <button onClick={() => addToCart(props.product)} className="btn-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
