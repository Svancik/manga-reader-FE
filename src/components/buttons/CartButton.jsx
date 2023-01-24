import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";

export const CartButton = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = useSelector((state) => state.cart.products);
  return (
    <div className="cartButton" onClick={() => setIsCartOpen(!isCartOpen)}>
      {" "}
      <ShoppingCartOutlinedIcon
        sx={{ width: "100%", height: "100%", color: "goldenrod" }}
      />
      <span>{products.length}</span>
      {isCartOpen && <Cart />}
    </div>
  );
};
