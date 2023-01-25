import "../../registerForm/registerForm.css";
import React from "react";

export default function Personalnformations({ page, setPage }) {
  return (
    <form>
      <h1 className="registerFormTitle">Personal Informations</h1>
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
          <input type="date" className="form-control" id="dateOfBirth" />
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
      <div className="formButtons">
        <button
          type="submit"
          className="registerFormNext button--back"
          onClick={() => setPage(page - 1)}
        >
          Back
        </button>
        <button
          type="submit"
          className="registerFormNext"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </form>
  );
}
