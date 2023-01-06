import React from "react";
import "./buttons.css";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Link } from "react-router-dom";
export const RegisterButton = () => {
  return (
    <button className="registerUser">
      <PersonAddAltIcon sx={{ width: "30%", height: "120%", margin: "2px" }} />
      REGISTROVAT
    </button>
  );
};
