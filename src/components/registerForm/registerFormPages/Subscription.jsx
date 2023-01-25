import "../../registerForm/registerForm.css";
import SubscriptionPlan from "../subscriptionPlan/SubscriptionPlan";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Subscription({ page, setPage }) {
  const [isSelected, setSelect] = useState(false);

  return (
    <div>
      <SubscriptionPlan setSelect={setSelect} />
      <div className="subFormButtons">
        <button
          type="submit"
          className="registerFormNext button--back"
          onClick={() => setPage(page - 1)}
        >
          Back
        </button>
        <Link
          to={isSelected ? "/login" : "#"}
          className={
            isSelected
              ? "registerFormNext button--finish"
              : "registerFormNext button--notSelected"
          }
        >
          <button
            type="submit"
            className={
              isSelected
                ? "registerFormNext button--finish"
                : "registerFormNext button--notSelected"
            }
            onClick={() => {
              !isSelected && alert("You must select your subscription plan.");
              console.log(isSelected);
            }}
          >
            <span>Finish</span>
          </button>{" "}
        </Link>
      </div>{" "}
    </div>
  );
}
