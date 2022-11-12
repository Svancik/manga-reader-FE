import "./navbar.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export default function Navbar() {
  return (
    <div className="navbarWrapper">
      <div className="left">
        <img src={require("../../media/design/logo.png")} className="logo" />

        <Link to="/login" className="link">
          <span className="navbarMainLinks">Login</span>
        </Link>
        <Link to="/register" className="link">
          <span className="navbarMainLinks">Register</span>
        </Link>
      </div>
      <div className="right">
        <div className="profile">
          <div className="options">
            <Link to="/settings" className="link">
              <span className="navbarMainLinks settingsLink">Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
