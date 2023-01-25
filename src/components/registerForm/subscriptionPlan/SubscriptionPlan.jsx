import "./subscriptionPlan.css";
import React from "react";
import { useState } from "react";

export default function SubscriptionPlan({ setSelect }) {
  const [basic, setBasic] = useState(false);
  const [premium, setPremium] = useState(false);
  const [standard, setStandard] = useState(false);

  return (
    <div className="subscriptionWrapper">
      <section className="container block block-plans">
        <h1 className="registerFormTitle">Subscription Plan</h1>
        <div className="grid grid--1x3">
          <div className="plan">
            <div className="card card--secondary">
              <header className="card__header">
                <h3 className="plan__name">Basic Subscription</h3>
                <span className="plan__price">$2.89</span>
                <span className="plan__billing-cycle">/month</span>
                <span className="badge badge--secondary badge--small">
                  5% off
                </span>
                <span className="plan__description">
                  Access amazing Mangas almost for free!.
                </span>
              </header>
              <div className="card__body">
                <ul className="list list--tick">
                  <li className="list__item">
                    Limited access - 2 chapters / day
                  </li>
                  <li className="list__item">1 supported device at a time</li>
                  <s>
                    <li className="list__item">Read & Download in HQ</li>
                  </s>
                  <s>
                    {" "}
                    <li className="list__item">Ad-free manga</li>
                  </s>
                  <s>
                    <li className="list__item">Free monthly paperback manga</li>
                  </s>
                </ul>

                <button
                  className={
                    basic ? " button-selected" : "button  button--outline"
                  }
                  onClick={() => {
                    setSelect(true);
                    setStandard(false);
                    setBasic(true);
                    setPremium(false);
                  }}
                >
                  order
                </button>
              </div>
            </div>
          </div>

          <div className="plan plan--popular">
            <div className="card card--primary">
              <header className="card__header">
                <h3 className="plan__name">Premium Subscription</h3>
                <span className="plan__price">$9.99</span>
                <span className="plan__billing-cycle">/month</span>
                <span className="badge badge--primary badge--small">
                  20% off
                </span>
                <span className="plan__description">
                  Enjoy unlimited Manga experience!
                </span>
              </header>
              <div className="card__body">
                <ul className="list list--tick">
                  <li className="list__item">Unlimited Access to Manga</li>
                  <li className="list__item">5 supported devices at a time</li>
                  <li className="list__item">Read & Download in HQ</li>
                  <li className="list__item">Ad-free manga</li>
                  <li className="list__item">Free monthly paperback manga</li>
                </ul>
                <button
                  className={
                    premium ? " button-selected" : "button  button--outline"
                  }
                  onClick={() => {
                    setSelect(true);
                    setStandard(false);
                    setBasic(false);
                    setPremium(true);
                  }}
                >
                  order
                </button>
              </div>
            </div>
          </div>

          <div className="plan">
            <div className="card card--secondary">
              <header className="card__header">
                <h3 className="plan__name">Standard Subscription</h3>
                <span className="plan__price">$4.99</span>
                <span className="plan__billing-cycle">/month</span>
                <span className="plan__description">
                  Read and download Manga at high quality!
                </span>
              </header>
              <div className="card__body">
                <ul className="list list--tick">
                  <li className="list__item">
                    Limited access - 10 chapters / day
                  </li>
                  <li className="list__item">2 supported devices at a time</li>
                  <li className="list__item">Read & Download in HQ</li>
                  <s>
                    {" "}
                    <li className="list__item">Ad-free manga</li>
                  </s>
                  <s>
                    <li className="list__item">Free monthly paperback manga</li>
                  </s>
                </ul>
                <button
                  className={
                    standard ? " button-selected" : "button  button--outline"
                  }
                  onClick={() => {
                    setSelect(true);
                    setStandard(true);
                    setBasic(false);
                    setPremium(false);
                  }}
                >
                  order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
