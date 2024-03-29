import "./loginForm.css";
import React from "react";
import { Link } from "react-router-dom";
export default function LoginForm() {
  return (
    <div className="loginFormWrapper">
      <form action="">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Link to="/" className="buttonLogin">
          <button className="buttonLogin">Přihlásit se</button>
        </Link>
      </form>
    </div>
  );
}
