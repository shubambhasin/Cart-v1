import { useState } from "react";
import { Cart } from "./components/Cart";
import { Wishlist } from "./components/Wishlist";
import { Productlisting } from "./components/Productlisting";
import "./styles.css";
import { useCart } from "./context/CartContext";

export default function App() {
  const [route, setRoute] = useState("products");
  const { state } = useCart();

  return (
    <div className="App">
      <button
        className="btn btn-red m1-rem"
        onClick={() => setRoute("products")}
      >
        Products
      </button>
      <button
        className="btn btn-red m1-rem"
        onClick={() => setRoute("wishlist")}
      >
        Wishlist ({state.wishlist.length})
      </button>

      <button className="btn btn-red m1-rem" onClick={() => setRoute("cart")}>
        Cart ({state.cart.length})
      </button>
      {route === "products" && <Productlisting />}
      {route === "wishlist" && <Wishlist />}
      {route === "cart" && <Cart />}
    </div>
  );
}
