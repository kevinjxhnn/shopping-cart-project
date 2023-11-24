import React from "react";
import { ShoppingCartContext } from "./App";


function ShoppingCart() {
  const shoppingCartContext = React.useContext(ShoppingCartContext);
  const state = shoppingCartContext.shoppingCartData;


  return (
    <>
      <div className="count">{state.count}</div>
      <span className="material-symbols-outlined">shopping_cart</span>
    </>
  );
}

export default ShoppingCart;
