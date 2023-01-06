import React from "react";
import Personalnformations from "../registerForm/registerFormPages/Personalnformations";
import "./orderInfo.css";
import RegisterForm from "../registerForm/RegisterForm";
import Login from "../../pages/Login/Login";
import { LoginButton } from "../buttons/LoginButton";
import { DeliveryServices, PaymentMethod } from "../../dummyData";
import { FinishOrder } from "../buttons/FinishOrderButton";
import { useState } from "react";

export const OrderInfo = () => {
  const [name, setName] = useState();

  return (
    <div className="contactInfo">
      <div className="contact-left">
        <div className="personalInfoTitle">
          <h3> 2) Vyplňte kontaktní údaje</h3>
        </div>
        <form>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputPassword4" className="label">
                Křestní jméno
              </label>
              <input
                type="text"
                class="form-control"
                id="inputName4"
                placeholder="Robert"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputPassword4" className="label">
                Příjmení
              </label>
              <input
                type="text"
                class="form-control"
                id="inputPassword4"
                placeholder="Novotný"
              />
            </div>
            {/* <div class="form-group col-md-4">
              <label for="dateOfBirth">Datum narození</label>
              <input
                type="date"
                className="form-control"
                id="dateOfBirth"
                placeholder="01.01.1990"
              />
            </div> */}
          </div>
          <div className="form-row">
            <div class="form-group col-md-6">
              <label for="emailAddress" className="label">
                Emailová adresa
              </label>
              <input
                type="email"
                id="emailAddress"
                placeholder="radek.svan@email.cz"
                className="form-control"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="phonenumber" className="label">
                Telefonní číslo
              </label>
              <input
                type="number"
                id="phonenumber"
                placeholder="+420 712 156 889"
                className="form-control"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="inputAddress2" className="label">
              Adresa bydliště
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Obchodní 575"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">Město</label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                placeholder="Litoměřice"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">
                Země <i>(pokud není ČR)</i>
              </label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">PSČ</label>
              <input
                type="text"
                class="form-control"
                id="inputZip"
                placeholder="400 00"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="contact-middle">
        <h3>3) Zvolte možnost doručení</h3>
        <div className="deliverySelection">
          {DeliveryServices.map((service) => (
            <div className="deliveryService" id={service.name}>
              <input
                name="delivery"
                type="radio"
                value={service.name}
                id={service.id}
                checked={service.checked}
              />
              <label htmlFor={service.id}>
                {service.name}{" "}
                {service.iconImg && <img src={service.iconImg} alt="" />}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="contact-right">
        <h3>4) Zvolte možnost platby</h3>
        <div className="paymentSelection">
          {PaymentMethod.map((payment) => (
            <div className="paymentMethod" id={payment.name}>
              <div className="payment-left">
                <input
                  name="payment"
                  type="radio"
                  value={payment.name}
                  id={payment.id}
                  checked={payment.checked}
                />
                <label htmlFor={payment.id}>
                  {payment.name}{" "}
                  {payment.img && <img src={payment.img} alt="" />}
                </label>
              </div>
              <div className="payment-right">
                <span> {payment.price ? payment.price : "ZDARMA"}</span>
              </div>
            </div>
          ))}
          <FinishOrder />
        </div>
      </div>
    </div>
  );
};
