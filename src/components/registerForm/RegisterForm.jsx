import "./registerForm.css";
import RegisterFormPage1 from "./registerFormPages/RegisterFormPage1";
import RegisterFormPage2 from "./registerFormPages/RegisterFormPage2";
import RegisterFormPage3 from "./registerFormPages/RegisterFormPage3";
import React, { Component } from "react";

export default function RegisterForm() {
  return (
    <div className="registerFormWrapper">
      <RegisterFormPage3 />
    </div>
  );
}
