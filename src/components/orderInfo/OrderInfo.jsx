import React from "react";
import Joi from "joi-browser";
import "./orderInfo.css";

import { DeliveryServices, PaymentMethod } from "../../dummyData";
import { FinishOrder } from "../buttons/FinishOrderButton";
import { useState } from "react";
import OrderForm from "../orderForm/OrderForm";

export const OrderInfo = () => {
  const [selectedPayment, setSelectedPayment] = useState(10);
  const [selectedDelivery, setSelectedDelivery] = useState(1);

  return (
    <div className="contactInfo">
      <div className="contact-left">
        <h3>2) Zvolte možnost doručení</h3>
        <div className="deliverySelection">
          {DeliveryServices.map((service) => (
            <div className="deliveryService" id={service.name}>
              <input
                name="delivery"
                type="radio"
                value={service.name}
                id={service.id}
                checked={service.id === selectedDelivery}
                onClick={() => setSelectedDelivery(service.id)}
              />
              <label htmlFor={service.id}>
                {service.name}{" "}
                {service.iconImg && <img src={service.iconImg} alt="" />}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="contact-middle">
        <h3>3) Zvolte možnost platby</h3>
        <div className="paymentSelection">
          {PaymentMethod.map((payment) => (
            <div className="paymentMethod" id={payment.name}>
              <div className="payment-left">
                <input
                  name="payment"
                  type="radio"
                  value={payment.name}
                  id={payment.id}
                  checked={payment.id === selectedPayment}
                  onClick={() => setSelectedPayment(payment.id)}
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
        </div>
      </div>
      <div className="contact-right">
        <div className="personalInfoTitle">
          <h3> 4) Vyplňte kontaktní údaje</h3>
        </div>
        <OrderForm  />
      </div>
    </div>
  );
};
