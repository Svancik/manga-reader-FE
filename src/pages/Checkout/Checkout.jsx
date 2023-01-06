import React from "react";
import { CartTable } from "../../components/cartTable/CartTable";
import "./checkout.css";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
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
