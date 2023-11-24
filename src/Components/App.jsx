import "../index.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import mensOuterwear from "../Data/mensOuterwear";
import ladiesOuterwear from "../Data/ladiesOuterwear";
import mensTshirt from "../Data/mensTshirt";
import ladiesTshirt from "../Data/ladiesTshirt";
import ClothesCard from "./ClothesCard";
import ShoppingCart from "./ShoppingCart";
import CartPage from "./CartPage";
import React from "react";

export const ShoppingCartContext = React.createContext();

function App() {
  const navigate = useNavigate();

  const [shoppingCartData, setShoppingCartData] = React.useState({
    product: [],
    count: 0,
  });

  return (
    <div className="App">
      <ShoppingCartContext.Provider
        value={{ shoppingCartData, setShoppingCartData }}
      >
        <header className="App-header">
          <div>
            <h4 className="heading">SHOP</h4>
          </div>
        </header>

        <div onClick={() => navigate("shopping-cart")} className="shopping-cart-container">
          <ShoppingCart />
        </div>

        <div className="button-div">
          <button className="sub" onClick={() => navigate("/")}>
            Men's Outerwear
          </button>
          <button className="sub" onClick={() => navigate("ladies-outerwear")}>
            Ladies Outerwear
          </button>
          <button className="sub" onClick={() => navigate("mens-tshirts")}>
            Men's T-shirts
          </button>
          <button className="sub" onClick={() => navigate("ladies-tshirts")}>
            Ladies T-shirts
          </button>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <img
                  src="./images/mens_outerwear.jpg"
                  className="image--main"
                />
                <ClothesCard
                  mensOuterwearData={mensOuterwear}
                  title={"Men's Outerwear"}
                />
              </>
            }
          ></Route>
          <Route
            path="ladies-outerwear"
            element={
              <>
                <img
                  src="./images/ladies_outerwear.jpg"
                  className="image--main"
                />
                <ClothesCard
                  mensOuterwearData={ladiesOuterwear}
                  title={"Ladies Outerwear"}
                />
              </>
            }
          ></Route>
          <Route
            path="mens-tshirts"
            element={
              <>
                <img
                  src="./images/ladies_tshirts.jpg"
                  className="image--main"
                />
                <ClothesCard
                  mensOuterwearData={mensTshirt}
                  title={"Men's T-shirts"}
                />
              </>
            }
          ></Route>
          <Route
            path="ladies-tshirts"
            element={
              <>
                <img
                  src="./images/mens_outerwear.jpg"
                  className="image--main"
                />
                <ClothesCard
                  mensOuterwearData={ladiesTshirt}
                  title={"Ladies T-shirts"}
                />
              </>
            }
          ></Route>
          <Route path="shopping-cart" element={
          <>
          <CartPage />
          </>
          }></Route>
        </Routes>
      </ShoppingCartContext.Provider>
    </div>
  );
}

export default App;
