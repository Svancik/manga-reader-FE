import React from "react";
import { CartTable } from "../../components/cartTable/CartTable";
import "./checkout.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { ContactInfo } from "../../components/contactInfo/ContactInfo";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
//TODO: Vedle return shoping zahrnout tlačítko LOGIN a REGISTER

export const Checkout = () => {
  return (
    <>
      <div className="checkoutWrapper">
        <button className="returnShopping">
          <Link className="link" to="/">
            <ArrowBackIcon
              sx={{ width: "15%", height: "150%", margin: "5px" }}
            />{" "}
            RETURN SHOPPING
          </Link>
        </button>
        <button className="loginUser">
          <AccountBoxIcon
            sx={{ width: "35%", height: "180%", margin: "5px" }}
          />{" "}
          LOGIN
        </button>
        <button className="registerUser">
          <PersonAddAltIcon
            sx={{ width: "25%", height: "180%", margin: "5px" }}
          />
          REGISTER
        </button>
        <CartTable />
        <ContactInfo />
      </div>
    </>
  );
};
