import React from "react";
import { useCart } from "../context/CartContext";

export const CartDisplay = ({ item }) => {
  const { dispatch } = useCart();

  const AddToWishlist = (item) => {
    return dispatch({ type: "ADD_TO_WISHLIST", payload: item });
  };

  return (
    <>
      <div className="b1pxgrey mtb1-rem p1-rem">
        <p className="h2">Name: {item.name}</p>
        <p className="h2">Price: {item.price}</p>
        <button
          className="btn btn-blue"
          onClick={() => dispatch({ type: "DEC_QUANTITY", payload: item })}
        >
          {" "}
          -{" "}
        </button>
        <span>{item.quantity}</span>
        <button
          className="btn btn-blue"
          onClick={() => dispatch({ type: "INC_QUANTITY", payload: item })}
        >
          {" "}
          +{" "}
        </button>
        <br />
        <p>
          <strong>Total: </strong> {item.quantity * item.price}
        </p>
        <button className="btn btn-blue mt1-rem" onClick={AddToWishlist}>
          Movie to wishlist
        </button>
      </div>
    </>
  );
};
