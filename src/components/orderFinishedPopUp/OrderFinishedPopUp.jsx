import React from "react";
import "./orderFinishedPopUp.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import { ContinueShopping } from "../buttons/ContinueShopping";

export const OrderFinishedPopUp = () => {
  return (
    <div className="orderFinished__backGroundWrapper">
      <div className="orderFinished__PopUpWrapper">
        <span className="icon-success">
          <CheckCircleIcon
            sx={{ width: "10%", height: "80%", margin: "0px", color: "green" }}
          />
        </span>
        <h1>Vaše objednávka byla dokončena!</h1>
        <span>Děkujeme za Vaši objednávku! </span>
        <span>
          Na Vaší objednávce se právě pracuje a bude zpracována do 3-6 hodin a
          následně předána přepravní službě.{" "}
        </span>
        <span>Do emailu jsme Vám zaslali podrobnosti vaší objednávky. </span>
       
        <ContinueShopping />

      </div>
    </div>
  );
};
