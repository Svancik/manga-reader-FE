import "./topbar.css";
import React from "react";
import SearchBar from "../searchBar/SearchBar";
import Basket from "./../basket/Basket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
export default function Topbar() {
  return (
    <div className="topbarWrapper">
      <div className="topbar__logo topElement">
        <img src={require("../../media/design/logo.png")} className="logo" />
      </div>

      <div className="topbar__searchBar topElement">
        <SearchBar />
      </div>

      <div className="topbar__basket topElement">
        <ShoppingCartOutlinedIcon sx={{ width: "30%", height: "30%" }} />
      </div>
      <div className="topbar__contact topElement">
        <CallOutlinedIcon sx={{ width: "30%", height: "30%" }} />
      </div>
      <div className="topbar__profile topElement">
        {" "}
        <Person2OutlinedIcon sx={{ width: "30%", height: "30%" }} />
      </div>
    </div>
  );
}
