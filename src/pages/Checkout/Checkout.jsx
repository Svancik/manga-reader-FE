import React from "react";
import { CartTable } from "../../components/cartTable/CartTable";
import { LoginButton } from "../../components/buttons/LoginButton";
import { RegisterButton } from "../../components/buttons/RegisterButton";
import { ReturnButton } from "../../components/buttons/ReturnButton";
import { OrderInfo } from "../../components/orderInfo/OrderInfo";
import "./checkout.css";

//Toto je komponenta pro dokončení objednávky

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
