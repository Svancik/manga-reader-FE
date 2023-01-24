import React from "react";
import "./productTopbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import { LoginButton } from "./../buttons/LoginButton";
import { RegisterButton } from "../buttons/RegisterButton";
import { ReturnButton } from "../buttons/ReturnButton";

export const ProductTopbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className={"productTopbarWrapper"}>
      <div className="ptopElement">
        <ReturnButton />
      </div>

      <div className="ptopbar__icons">
        <div
          className="ptopbar__basket ptopElement"
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <ShoppingCartOutlinedIcon sx={{ width: "90%", height: "55%" }} />
          <span>{products.length}</span>
        </div>
        <div className="ptopElement">
          <LoginButton />
          <RegisterButton />
        </div>
      </div>
      {isCartOpen && <Cart />}
    </div>
  );
};
