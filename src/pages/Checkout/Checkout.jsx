import React from "react";
import { CartTable } from "../../components/cartTable/CartTable";
import "./checkout.css";
import { LoginButton } from "../../components/buttons/LoginButton";
import { RegisterButton } from "../../components/buttons/RegisterButton";
import { ReturnButton } from "../../components/buttons/ReturnButton";
import { OrderInfo } from "../../components/orderInfo/OrderInfo";
//TODO: Vedle return shoping zahrnout tlačítko LOGIN a REGISTER

export const Checkout = () => {
  return (
    <>
      <div className="checkoutWrapper">
        <ReturnButton />
        <LoginButton />
        <RegisterButton />
        <CartTable />
        <OrderInfo />
      </div>
    </>
  );
};
