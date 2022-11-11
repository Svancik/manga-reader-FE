import Navbar from "../../components/navbar/Navbar";
import RegisterForm from "../../components/registerForm/RegisterForm";
import Carousel from "./../../components/carousel/Carousel";
import "./register.css";
import React, { Component } from "react";
import RegisterFormPage1 from "../../components/registerForm/registerFormPages/RegisterFormPage1";
import RegisterFormPage2 from "../../components/registerForm/registerFormPages/RegisterFormPage2";
import RegisterFormPage3 from "../../components/registerForm/registerFormPages/RegisterFormPage3";

export default function Register() {
  return (
    <>
      <Navbar />
      <div className="registerWrapper">
        <div className="register--left">
          <Carousel />
        </div>
        <div className="register--right">
          <div className="registerFormWrapper">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
}
