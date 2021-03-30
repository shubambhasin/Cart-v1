import React from "react";
import { useCart } from "../context/CartContext";

export const ProductDisplay = ({ product }) => {
  const { state, dispatch } = useCart();
  const isNotInCart = (item) => {
    const arr = state.cart.filter((data) => data.id === item.id);
    if (arr.length === 0) {
      return true;
    } else return false;
  };

  const isNotInWishlist = (item) => {
    const arr = state.wishlist.filter((data) => data.id === item.id);
    if (arr.length === 0) return true;
    else return false;
  };

  const addToCart = (product) => {
    console.log(state.cart);

    if (isNotInCart(product)) {
      return dispatch({ type: "ADD_TO_CART", payload: product });
    } else {
      console.log("Already in cart, so increasing quantity");
      return dispatch({ type: "INC_QUANTITY", payload: product });
    }
  };

  const addToWishlist = (product) => {
    if (isNotInWishlist(product))
      return dispatch({ type: "ADD_TO_WISHLIST", payload: product });
    else alert("already in wishlist");
  };
  return (
    <>
      <div className="b1pxgrey p1-rem  m1-rem ">
        <p className="h3">Name: {product.name}</p>
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
        <button className="btn btn-blue" onClick={() => addToCart(product)}>
          Add to cart
        </button>
        <button className="btn btn-blue" onClick={() => addToWishlist(product)}>
          Add to Wishlist
        </button>
      </div>
    </>
  );
};
