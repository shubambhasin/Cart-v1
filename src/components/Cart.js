import React from "react";
import { useCart } from "../context/CartContext";
import { CartDisplay } from "./CartDisplay";

export const Cart = () => {
  const { state } = useCart();
  const { cart } = state;
  return (
    <>
      <div>
        <h1 className="h1">Cart</h1>
        <p className="h4">
          <strong>Total: </strong>{" "}
        </p>

        {cart.map((item) => {
          return (
            <div key={item.id}>
              <CartDisplay item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};
