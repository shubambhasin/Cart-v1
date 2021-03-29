import React from "react";

export const WishlistDisplay = ({ item }) => {
  return (
    <>
      <div className="b1pxgrey mtb1-rem p1-rem">
        <p>Name: {item.name}</p>
        <p>price: {item.price}</p>
      </div>
    </>
  );
};
