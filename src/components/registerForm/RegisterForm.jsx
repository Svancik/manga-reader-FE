import "./registerForm.css";
import SignUp from "./registerFormPages/SignUp";
import Personalnformations from "./registerFormPages/Personalnformations";
import Subscription from "./registerFormPages/Subscription";
import React, { Component } from "react";
import { useState } from "react";
import OrderForm from "./../orderForm/OrderForm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function RegisterForm() {
  const [page, setPage] = useState(0);

  const componentList = [
    <SignUp page={page} setPage={setPage} />,
    <>
      <ArrowBackIcon
        sx={{ width: "100%", height: "4%" }}
        className="registerForm__backButton"
      />
      <h1>Vyplňte kontaktní údaje</h1>
      <OrderForm page={page} setPage={setPage} buttonText="REGISTROVAT" />
    </>,
  ];

  return (
    <div className="registerForm">
      {/* <>
        <div className="progress-bar"></div>
        <div>{componentList[page]}</div>
      </> */}
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
