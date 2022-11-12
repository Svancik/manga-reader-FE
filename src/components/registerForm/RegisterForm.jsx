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
    <>
      <div className="progress-bar"></div>
      <div>{componentList[page]}</div>
    </>
  );
}
