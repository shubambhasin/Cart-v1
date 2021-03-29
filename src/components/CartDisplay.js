import React from "react";
import { useCart } from "../context/CartContext";

export const CartDisplay = ({ item }) => {
  const { state, dispatch } = useCart();

  const isNotInWishlist = (item) => {
    const arr = state.wishlist.filter((data) => data.id === item.id);
    if (arr.length === 0) return true;
    else return false;
  };

  const AddToWishlist = (data) => {
    if (isNotInWishlist(data)) {
      dispatch({ type: "ADD_TO_WISHLIST", payload: data });
      dispatch({ type: "REMOVE_FROM_CART", payload: item });
    } else alert("already in wishlist");
  };

  const RemoveItem = (item) => {
    return dispatch({ type: "REMOVE_FROM_CART", payload: item });
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
        <button
          className="btn btn-blue mt1-rem"
          onClick={() => AddToWishlist(item)}
        >
          Move to wishlist
        </button>
        <button
          className="btn btn-blue mt1-rem"
          onClick={() => RemoveItem(item)}
        >
          Remove
        </button>
      </div>
    </>
  );
};
