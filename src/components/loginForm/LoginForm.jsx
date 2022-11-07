import "./loginForm.css";
import React, { Component } from "react";

export default function LoginForm() {
  return (
    <div className="loginFormWrapper">
      <form action="">
        <input type="email" placeholder="Email or phone number" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </div>
  );
}
