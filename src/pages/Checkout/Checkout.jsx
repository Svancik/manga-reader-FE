import React from "react";
import { CartTable } from "../../components/cartTable/CartTable";
import "./checkout.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export const Checkout = () => {
  return (
    <>
      <div className="checkoutWrapper">       
        <CartTable />
      </div>
    </>
  );
};
