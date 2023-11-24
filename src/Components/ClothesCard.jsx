import React from "react";
import { ShoppingCartContext } from "./App";

function ClothesCard(props) {
  const data = props.mensOuterwearData;
  const shoppingCartContext = React.useContext(ShoppingCartContext);
  const setStateFunction = shoppingCartContext.setShoppingCartData;
  const state = shoppingCartContext.shoppingCartData;

  const handleClick = React.useCallback((title, imageUrl, price) => {

    const newProduct = {
      title: title,
      imageUrl: imageUrl,
      price: price
    } 

    setStateFunction((prevState) => ({
      ...prevState,
      product: [...prevState.product, newProduct],
      count: prevState.count + 1,
    }));
  }, [state]);


  let id = 1;

  const cardContent = data.map((data) => (
    <div key={id++}>
      <div className="card--content">
        <img
          src={`https://shop.polymer-project.org/esm-bundled/${data.largeImage}`}
        />
        <h4>{data.title}</h4>
        <p>${data.price.toFixed(2)}</p>
        <button className="button-2" onClick={() => handleClick(data.title, `https://shop.polymer-project.org/esm-bundled/${data.image}`, data.price.toFixed(2), )}>Add To Cart</button>
      </div>
    </div>
  ));

  return (
    <>
      <div className="page--title">
        <div className="page-title-content">
          <h4>{props.title}</h4>
          <p>({data.length} items)</p>
        </div>
      </div>

      <div className="card">{cardContent}</div>
    </>
  );
}

export default ClothesCard;
