import React, { createContext, useContext, useReducer } from "react";
import { ProductData } from "../components/ProductData";

export const CartContext = createContext();

const reducerFunc = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...payload, quantity: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id)
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, payload]
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== payload.id)
      };
    case "INC_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    case "DEC_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };
    case "MOVE_TO_CART":
      return {
        ...state,
        cart: [...state.cart, payload]
      };

    case "HIGH_TO_LOW":
      return {
        ...state,
        products: state.products.sort((a, b) => a.price - b.price)
      };
    case "LOW_TO_HIGH":
      return {};
    case "FAST_DELIVERY_ONLY":
      return {};
    case "REMOVE_OUT_OF_STOCK":
      return {};

    default:
      console.log("unknown event");
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, {
    cart: [],
    wishlist: [],
    products: ProductData
  });
  return (
    <>
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export const useCart = () => useContext(CartContext);
