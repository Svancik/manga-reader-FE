import React from "react";
import { CartTable } from "../../components/cartTable/CartTable";
import "./checkout.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { ContactInfo } from "../../components/contactInfo/ContactInfo";

//TODO: Vedle return shoping zahrnout tlačítko LOGIN a REGISTER 

export const Checkout = () => {
  return (
    <>
      <div className="checkoutWrapper">
        <CartTable />
        <ContactInfo />
      </div>
    </>
  );
};
