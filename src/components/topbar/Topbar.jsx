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

export default function Topbar({ handleTextSearch }) {
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
