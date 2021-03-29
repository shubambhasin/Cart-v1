import React from "react";
import { useCart } from "../context/CartContext";

export const WishlistDisplay = ({ item }) => {
  const { state, dispatch } = useCart();

  const { cart } = state;

  const removeFromWishlist = (item) => {
    return dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
  };
  const moveToCart = (item) => {
    const arr = cart.filter((data) => data.id === item.id);
    if (arr.length === 0) {
      dispatch({ type: "MOVE_TO_CART", payload: item });

      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
    } else {
      alert("Already in cart");
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
    }
  };
  return (
    <>
      <div className="b1pxgrey mtb1-rem p1-rem">
        <p>Name: {item.name}</p>
        <p>price: {item.price}</p>
        <button className="btn btn-blue" onClick={() => moveToCart(item)}>
          Move to cart
        </button>
        <button
          className="btn btn-red"
          onClick={() => removeFromWishlist(item)}
        >
          Remove
        </button>
      </div>
    </>
  );
};
