import React from "react";
import { useCart } from "../context/CartContext";
import { ProductData } from "./ProductData";
import { ProductDisplay } from "./ProductDisplay";

export const Productlisting = () => {
  const { state, dispatch } = useCart();
  const { products } = state;
  return (
    <div>
      <h1 className="h1">Products</h1>

      <p>Sort by price</p>
      <form>
        <label>High to low</label>
        <input
          onChange={() =>
            dispatch({ type: "HIGH_TO_LOW", payload: ProductData })
          }
          type="radio"
          name="sort"
        />
        <label>Low to high</label>
        <input
          onChange={() =>
            dispatch({ type: "LOW_TO_HIGH", payload: ProductData })
          }
          type="radio"
          name="sort"
        />
      </form>
      <p>filter</p>
      <form>
        <label>Fast delivery only</label>
        <input type="radio" name="filter1" />
        <label>Remove out of stock</label>
        <input type="radio" name="filter2" />
      </form>

      <div className="flex f-wrap">
        {products.map((product) => {
          return <ProductDisplay key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
