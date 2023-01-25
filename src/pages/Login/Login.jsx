import LoginForm from "../../components/loginForm/LoginForm";
import "./login.css";

import React from "react";
import VerticalCarousel from "./../../components/verticalCarousel/VerticalCarousel";
import { ReturnButton } from "../../components/buttons/ReturnButton";
import { RegisterButton } from "../../components/buttons/RegisterButton";
export default function Login() {
  return (
    <>
      <div className="loginWrapper">
        <div className="loginLeft">
          <VerticalCarousel />
        </div>
        <div className="loginRight">
          <ReturnButton />
          <RegisterButton />
          <div className="loginFormWrapper">
            <h1 className="loginFormTitle">MANGA READER</h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
