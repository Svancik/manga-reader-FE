import React from "react";
import Personalnformations from "../registerForm/registerFormPages/Personalnformations";
import "./contactInfo.css";
import RegisterForm from "./../registerForm/RegisterForm";

export const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <div className="contact-left">
        <h3>2a) Login to fill personal informations</h3>{" "}
        <form action="">
          {" "}
          <input
            type="email"
            placeholder="Email address"
            className="form-control"
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control"
          />
          <button className="registerFormNext">Login</button>
        </form>
      </div>
      <div className="contact-right">
        <h3> 2b) Fill in your personal informations</h3>
        <form>
          <div className="form-row">
            <div class="form-group col-md-6">
              <label for="emailAddress" className="label">
                Email Address
              </label>
              <input
                type="email"
                id="emailAddress"
                placeholder="robert.newton@gmail.com"
                className="form-control"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="phonenumber" className="label">
                Phone Number
              </label>
              <input
                type="number"
                id="phonenumber"
                placeholder="+420 712 156 889"
                className="form-control"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputPassword4" className="label">
                First Name
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
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputPassword4"
                placeholder="Newton"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                id="dateOfBirth"
                placeholder="01.01.1990"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress2" className="label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="1234 Main St"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                placeholder="New City"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
