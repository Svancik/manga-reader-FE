import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          {" "}
          <h1>Partnerské obchody</h1>
          <span>Megaknihy.cz</span>
          <span>KnihyDobrovsky.cz</span>
          <span>Nejlevnejsiknihy.cz</span>
          <span>Knihobot.cz</span>
          <span>Konoha.cz</span>
        </div>
        <div className="item">
          <h1>Odkazy</h1>
          <span>FAQ</span>
          <span>Kontakt</span>
          <span>Obchody</span>
          <span>Autoři</span>
          <span>Události</span>
        </div>
        <div className="item">
          <h1>O nás</h1>
          <span>
            Jsme nejen internetový obchod který naprogramoval Radek Švancar.
            Jedná se o jeho první stránku kterou naprogramoval ve frameworku
            React. Cílém této stránky bylo předvézt nabyté dovednosti ze studia
            VŠ, placených kurzů a několika hodin videotutoriálů.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Kontaktovat mě lze na emailové adrese thesvancik@gmail.com. V případ
            zájmu lze nahlédnout na můj git repozitár na odkazu zde -{" "}
            <a href="https://github.com/Svancik">https://github.com/Svancik </a>
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="lefty">
          <span className="logo">MANGAREADER</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};
