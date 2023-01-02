import React from "react";
import { CartTable } from "../../components/cartTable/CartTable";
import "./checkout.css";

export const Checkout = () => {
  return (
    <>
      <div className="checkoutWrapper">
        <CartTable />
      </div>
    </>
  );
};
