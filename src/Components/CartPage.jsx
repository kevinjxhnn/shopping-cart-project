import React from "react";
import { ShoppingCartContext } from "./App";

function CartPage() {
  const shoppingCartContext = React.useContext(ShoppingCartContext);
  const state = shoppingCartContext.shoppingCartData;
  const listOfProducts = state.product;

  const productsElement = listOfProducts.map((product) => (
    <div className="cart-wrapper">
      <img src={product.imageUrl} alt={product.title} />
      <div className="cart-content">
        <h4>{product.title}</h4>
        <p>${product.price}</p>
      </div>
    </div>
  ));

  return listOfProducts.length == 0 ? (
    <div className="no-items"><h3>No Items In Cart</h3></div>
  ) : (
    <div className="cart-container">{productsElement}</div>
  );
}

export default CartPage;
