import "./topbar.css";
import React from "react";
import SearchBar from "../searchBar/SearchBar";
export default function Topbar() {
  return (
    <div className="topbarWrapper">

      <div className="topbar__logo">
        <img src={require("../../media/design/logo.png")} className="logo" />
      </div>

      <div className="topbar__searchBar">
        <SearchBar />
      </div>

      <div className="topbar__basket">
        
      </div>
      <div className="topbar__profile"></div>
    </div>
  );
}
