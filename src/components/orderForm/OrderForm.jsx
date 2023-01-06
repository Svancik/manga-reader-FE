import React, { Component } from "react";
import Joi from "joi-browser";
import CheckIcon from "@mui/icons-material/Check";
import Title from "./../autoSlider/subComponents/Title/Title";

export default class OrderForm extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      address: "",
      psc: "",
    },
    errors: {},
  };

  schema = {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.number().required(),
    city: Joi.string().required(),
    address: Joi.string().required(),
    psc: Joi.string().required(),
  };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });

    if (!result.error) return null; //error není

    const errors = {};
    for (let error of result.error.details) {
      const key = error.path[0];
      const value = error.message;
      errors[key] = value;
    }

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return; //neprovedeme submit
    alert("Form submited");
  };

  handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };

  render() {
    console.log(this.state.errors.firstName);
    console.log("firstName: ", this.state.data.firstName);
    return (
      <div>
        {" "}
        <form onSubmit={this.handleSubmit}>
          <div className="form-row" id="myform">
            <div class="form-group col-md-4">
              <label for="inputPassword4" className="label">
                Křestní jméno
              </label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                name="firstName"
                placeholder="Radek"
                value={this.state.data.firstName}
                onChange={this.handleChange}
              />
              {this.state.errors.firstName && (
                <div className="alert alert-danger">Vyplňte jméno</div>
              )}
            </div>
            <div class="form-group col-md-4">
              <label for="inputPassword4" className="label">
                Příjmení
              </label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                name="lastName"
                placeholder="Novotný"
                value={this.state.data.lastName}
                onChange={this.handleChange}
              />
              {this.state.errors.lastName && (
                <div className="alert alert-danger">Vyplňte příjmení</div>
              )}
            </div>
          </div>
          <div className="form-row">
            <div class="form-group col-md-6">
              <label for="emailAddress" className="label">
                Emailová adresa
              </label>
              <input
                type="email"
                id="emailAddress"
                name="email"
                placeholder="radek.svan@email.cz"
                className="form-control"
                value={this.state.data.email}
                onChange={this.handleChange}
              />
              {this.state.errors.email && (
                <div className="alert alert-danger">Vyplňte správně email</div>
              )}
            </div>
            <div class="form-group col-md-4">
              <label for="phonenumber" className="label">
                Telefonní číslo{" "}
              </label>
              <input
                type="number"
                id="phonenumber"
                name="phone"
                placeholder="+420 712 156 889"
                className="form-control"
                value={this.state.data.phone}
                onChange={this.handleChange}
              />
              {this.state.errors.phone && (
                <div className="alert alert-danger">Vyplňte tel. číslo</div>
              )}
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputCity">Město</label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                name="city"
                placeholder="Litoměřice"
                value={this.state.data.city}
                onChange={this.handleChange}
              />
              {this.state.errors.city && (
                <div className="alert alert-danger">Vyplňte město</div>
              )}
            </div>
            <div class="form-group col-md-6">
              <label for="inputAddress2" className="label">
                Adresa bydliště
              </label>
              <input
                type="text"
                class="form-control"
                name="address"
                id="inputAddress2"
                placeholder="Obchodní 575"
                value={this.state.data.address}
                onChange={this.handleChange}
              />
              {this.state.errors.address && (
                <div className="alert alert-danger">
                  Vyplňte adresu bydliště
                </div>
              )}
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">PSČ</label>
              <input
                type="text"
                class="form-control"
                name="psc"
                id="inputZip"
                placeholder="400 00"
                value={this.state.data.psc}
                onChange={this.handleChange}
              />
              {this.state.errors.psc && (
                <div className="alert alert-danger">Vyplňte</div>
              )}
            </div>
          </div>
          <button className="finishOrder" type="submit">
            <CheckIcon sx={{ width: "17%", height: "90%", margin: "0px" }} />{" "}
            OBJEDNAT{" "}
          </button>
        </form>
      </div>
    );
  }
}