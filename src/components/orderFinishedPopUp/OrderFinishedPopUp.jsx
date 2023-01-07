import React from "react";
import "./orderFinishedPopUp.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export const OrderFinishedPopUp = () => {
  return (
    <div className="orderFinished__backGroundWrapper">
      <div className="orderFinished__PopUpWrapper">
        <span className="icon-success"> </span>
        <CheckCircleIcon sx={{ width: "10%", height: "80%", margin: "0px" }} />
        <h1>Vaše objednávka byla dokončena</h1>
      </div>
    </div>
  );
};
