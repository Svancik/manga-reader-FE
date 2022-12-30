import "./topbar.css";
import React from "react";
import SearchBar from "../searchBar/SearchBar";
import Basket from "./../basket/Basket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Topbar({ handleTextSearch }) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="topbarWrapper">
      <div className="topbar__logo topElement">
        <Link to="/">
          <img src={require("../../media/design/logo.png")} className="logo" />
        </Link>
      </div>

      <div className="topbar__searchBar topElement">
        <SearchBar handleTextSearch={handleTextSearch} />
      </div>
      <div className="topbar__icons">
        <div className="topbar__basket topElement">
          <ShoppingCartOutlinedIcon sx={{ width: "55%", height: "55%" }} />
        </div>
        <div className="topbar__contact topElement">
          <CallOutlinedIcon sx={{ width: "55%", height: "55%" }} />
        </div>
        <div className="topbar__profile topElement">
          {" "}
          <Person2OutlinedIcon sx={{ width: "55%", height: "55%" }} />
          <div className="loginBadge">
            {isLogin ? (
              <CheckCircleIcon style={{ color: "green" }} />
            ) : (
              <CancelIcon style={{ color: "red" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
