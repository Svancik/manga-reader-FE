import "./registerForm.css";
import React from "react";
import OrderForm from "./../orderForm/OrderForm";

export default function RegisterForm() {
  return (
    <div className="registerForm">
      <form action="">
        {" "}
        <h1>Vyplňte přihlašovací údaje</h1>
        <label htmlFor="username">Uživatelské jméno</label>
        <input
          id="username"
          type="text"
          className="form-control"
          placeholder=""
        />
        <label htmlFor="password1">Heslo</label>
        <input
          id="password1"
          type="password"
          placeholder=""
          className="form-control"
        />
        <label htmlFor="password2">Zopakujte heslo</label>
        <input
          id="password2"
          type="password"
          placeholder=""
          className="form-control"
        />
        <hr />
        <OrderForm buttonText="REGISTROVAT" />
      </form>
    </div>
  );
}
