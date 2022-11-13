import "./topbar.css";
import React from "react";
import SearchBar from "../searchBar/SearchBar";
import Basket from "./../basket/Basket";
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
        <Basket />
      </div>
      <div className="topbar__contact topElement">Contact</div>
      <div className="topbar__profile topElement">Profile</div>
    </div>
  );
}
