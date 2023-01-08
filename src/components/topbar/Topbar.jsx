import "./topbar.css";
import React from "react";
import SearchBar from "../searchBar/SearchBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import { LoginButton } from "./../buttons/LoginButton";
import { RegisterButton } from "../buttons/RegisterButton";

export default function Topbar({ handleTextSearch, hideSearch }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div
      className={
        hideSearch ? "topbarWrapper topbarWrapper-hidden" : "topbarWrapper"
      }
    >
      <div
        className={"topbar__logo topElement "}
        style={hideSearch ? { flex: "0.5" } : { flex: "1" }}
      >
        <Link to="/">
          <img src={require("../../media/design/logo.png")} className="logo" />
        </Link>
      </div>
      {!hideSearch && (
        <div className="topbar__searchBar topElement">
          <SearchBar handleTextSearch={handleTextSearch} />
        </div>
      )}
      <div className="topbar__icons">
        <div
          className="topbar__basket topElement"
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <ShoppingCartOutlinedIcon sx={{ width: "60%", height: "55%" }} />
          <span>{products.length}</span>
        </div>
        <div className="topbar__buttons topElement">
          <div className="topbar__button">
            <LoginButton />
          </div>
          <div className="topbar__button">
            <RegisterButton />
          </div>
        </div>
        {/* 
           <div className="topbar__profile topElement">
          <Person2OutlinedIcon sx={{ width: "55%", height: "55%" }} />
          <div className="loginBadge">
            {isLogin ? (
              <CheckCircleIcon style={{ color: "green" }} />
            ) : (
              <CancelIcon style={{ color: "red" }} />
            )}  
          </div> 
          </div>*/}
      </div>
      {isCartOpen && <Cart />}
    </div>
  );
}
