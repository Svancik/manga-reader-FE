import "./registerForm.css";
import SignUp from "./registerFormPages/SignUp";
import Personalnformations from "./registerFormPages/Personalnformations";
import Subscription from "./registerFormPages/Subscription";
import React, { Component } from "react";
import { useState } from "react";

export default function RegisterForm() {
  const [page, setPage] = useState(0);

  const componentList = [
    <SignUp page={page} setPage={setPage} />,
    <Personalnformations page={page} setPage={setPage} />,
    <Subscription page={page} setPage={setPage} />,
  ];

  return (
    <div className="registerForm">
      <form action="">
        {" "}
        <h1 className="registerFormTitle">Vyplňte přihlašovací údaje</h1>
        <input
          type="email"
          placeholder="Email address"
          className="form-control"
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control"
        />
        <input
          type="password"
          placeholder="Repeat Password"
          className="form-control"
        />
        <hr />
      </form>
    </div>
  );
}
