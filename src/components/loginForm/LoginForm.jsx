import "./loginForm.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
export default function LoginForm() {
  return (
    <div className="loginFormWrapper">
      <form action="">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Link to="/" className="buttonLogin">
          <button className="buttonLogin">Sign In</button>
        </Link>
      </form>
    </div>
  );
}
