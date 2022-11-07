import Navbar from "../../components/navbar/Navbar";
import RegisterForm from "../../components/registerForm/RegisterForm";
import Carousel from "./../../components/carousel/Carousel";
import "./register.css";
import React, { Component } from "react";

export default function Register() {
  return (
    <>
      <Navbar />
      <div className="registerWrapper">
        <div className="register--left">
          <Carousel />
        </div>
        <div className="register--right">
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
