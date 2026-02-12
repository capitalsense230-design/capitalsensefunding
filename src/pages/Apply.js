import React from "react";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

function Apply() {
  return (
    <div className="apply-page">
      <div className="apply-container">

        <div className="apply-left">
          <img src={logo} alt="Capital Sense Funding" className="apply-logo" />
          <h2>Business Funding Application</h2>
          <p>Secure fast capital solutions tailored for your business growth.</p>
        </div>

        <div className="apply-card">
          <form>
            <div className="form-grid">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Company Name" />
              <input type="text" placeholder="State" />
              <input type="tel" placeholder="Phone Number" />
              <input type="number" placeholder="Monthly Revenue" />
            </div>

            <div className="terms">
              <input type="checkbox" />
              <span>I agree to the Terms & Conditions</span>
            </div>

            <div className="button-group">
              <Link to="/" className="btn-back">Back</Link>
              <button type="submit" className="btn-submit">
                Submit Application
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Apply;
