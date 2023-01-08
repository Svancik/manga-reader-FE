import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";

export const CartButton = ({ numberOfProducts }) => {
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="cartButton">
      {" "}
      <ShoppingCartOutlinedIcon
        sx={{ width: "100%", height: "100%", color: "goldenrod" }}
      />
      <span>{products.length}</span>
      <Cart />
    </div>
  );
};
