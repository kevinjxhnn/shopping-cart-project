import React from "react";
import { ShoppingCartContext } from "./App";

function ShoppingCart() {
  const shoppingCartContext = React.useContext(ShoppingCartContext);
  const state = shoppingCartContext.shoppingCartData;

  return (
    <div className="cart-wrapper-icon">
      {state.count != 0 && <div className="count">{state.count}</div>}
      <span className="material-symbols-outlined header">shopping_cart</span>
    </div>
  );
}

export default ShoppingCart;
