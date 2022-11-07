import "../../registerForm/registerForm.css";
import React, { Component } from "react";

export default function registerFormPage1() {
  return (
    <form action="">
      {" "}
      <h1 className="registerFormTitle">Create Account</h1>
      <input
        type="email"
        placeholder="Email address"
        className="form-control"
      />
      <input type="password" placeholder="Password" className="form-control" />
      <input
        type="password"
        placeholder="Repeat Password"
        className="form-control"
      />
      <button className="registerFormNext">Next</button>
    </form>
  );
}
