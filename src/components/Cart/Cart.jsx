import React from "react";
import "./Cart.css";
import { TrashIcon, CheckIcon } from "@heroicons/react/24/outline";
const Cart = ({ cart, handleClearCart }) => {
  // console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;

  for (const product of cart) {
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div>
      <h2>Order Summery</h2>
      <p>Selected Items {quantity}</p>
      <p>Total Price: {totalPrice} </p>
      <p>Total Shipping Charge: {totalShipping} </p>
      <p>Tax: {tax}</p>
      <h4>Grand Total: {grandTotal} </h4>
      <button onClick={handleClearCart} className="btn-clear-cart">
        CLear Cart <TrashIcon style={{ width: "32px" }} />
      </button>
    </div>
  );
};

export default Cart;
