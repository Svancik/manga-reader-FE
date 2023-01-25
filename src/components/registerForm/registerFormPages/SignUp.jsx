import "../../registerForm/registerForm.css";
import React from "react";

export default function registerFormPage1({ page, setPage }) {
  return (
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
      <button
        className="registerFormNext"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        DALŠÍ KROK
      </button>
    </form>
  );
}
