import Navbar from "../../components/navbar/Navbar";
import RegisterForm from "../../components/registerForm/RegisterForm";
import VerticalCarousel from "./../../components/verticalCarousel/VerticalCarousel";
import "./register.css";
import React, { Component } from "react";
import RegisterFormPage1 from "../../components/registerForm/registerFormPages/SignUp";
import RegisterFormPage2 from "../../components/registerForm/registerFormPages/Personalnformations";
import RegisterFormPage3 from "../../components/registerForm/registerFormPages/Subscription";
import { ReturnButton } from "./../../components/buttons/ReturnButton";
import { LoginButton } from "../../components/buttons/LoginButton";

export default function Register() {
  return (
    <>
      <div className="registerWrapper">
        <div className="register--left">
          <VerticalCarousel />
        </div>
        <div className="register--right">
          <ReturnButton />
          <LoginButton />
          <div className="registerFormWrapper">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
}
