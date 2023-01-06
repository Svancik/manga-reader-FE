import React from "react";
import "./buttons.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";
export const LoginButton = () => {
  return (
    <button className="loginUser">
      <Link className="link" to="/">
        <AccountBoxIcon sx={{ width: "17%", height: "90%", margin: "0px" }} />{" "}
        PŘIHLÁSIT SE{" "}
      </Link>
    </button>
  );
};
