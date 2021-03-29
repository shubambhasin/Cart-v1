import React, { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

const reducerFunc = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...payload, quantity: 1 }] };
    case "REMOVE_FROM_CART":
      return console.log("remove from cart", type, payload);
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [ ...state.wishlist, payload ]
      };
    case "REMOVE_FROM_WISHLIST":
      return console.log("remove from wishlist", type, payload);
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

    default:
      break;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, { cart: [], wishlist: [] });
  return (
    <>
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export const useCart = () => useContext(CartContext);
