import React from "react";
import { useCart } from "../context/CartContext";
import { WishlistDisplay } from "./WishlistDisplay";

export const Wishlist = () => {
  const { state } = useCart();
  const { wishlist } = state;
  return (
    <>
      <div>
        <h1 className="h1">Wishlist</h1>
        <button onClick={() => console.log(wishlist)}>onClick</button>
        {wishlist.map((item) => {
          return(
            <div key={item.id}>
               <WishlistDisplay item={item} />
            </div>
          )
        })}
      </div>
    </>
  );
};
