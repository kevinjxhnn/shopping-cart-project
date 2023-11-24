import React from "react";
import { useNavigate } from "react-router-dom";

export function NavigateButtons() {
  const navigate = useNavigate();

  return (
    <div className="button-div">
      <button className="sub" onClick={() => navigate("/")}>
        Men's Outerwear
      </button>
      <button className="sub" onClick={() => navigate("/ladies-outerwear")}>
        Ladies Outerwear
      </button>
      <button className="sub" onClick={() => navigate("/mens-tshirts")}>
        Men's T-shirts
      </button>
      <button className="sub" onClick={() => navigate("/ladies-tshirts")}>
        Ladies T-shirts
      </button>
    </div>
  );
}
