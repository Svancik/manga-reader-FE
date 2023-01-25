import RegisterForm from "../../components/registerForm/RegisterForm";
import VerticalCarousel from "./../../components/verticalCarousel/VerticalCarousel";
import React from "react";
import { ReturnButton } from "./../../components/buttons/ReturnButton";
import { LoginButton } from "../../components/buttons/LoginButton";
import "./register.css";

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
