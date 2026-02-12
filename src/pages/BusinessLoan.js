import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function BusinessLoan() {
  return (
    <div>

      <header className="navbar">
        <img src={logo} alt="Capital Sense Funding" className="nav-logo" />
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/apply" className="btn-primary">Apply Online</Link>
        </div>
      </header>

      <section className="hero">
        <h1>Fast Business Capital When You Need It Most</h1>
        <p>Approval in under 1 hour. Same-day funding available nationwide.</p>

        <div>
          <Link to="/apply" className="btn-primary">
            Apply Now
          </Link>

          <a href="tel:2675754786" className="btn-outline">
            Call (267) 575-4786
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Financing Options</h2>

        <div className="grid-3">
          <div className="card">
            <h3>$350,000</h3>
            <p>Business Line of Credit</p>
            <p>3-Year Maximum Term</p>
          </div>

          <div className="card">
            <h3>$100,000</h3>
            <p>Business Line of Credit</p>
            <p>18-Month Term</p>
          </div>

          <div className="card">
            <h3>Up to $2M</h3>
            <p>Business Loan</p>
            <p>No Minimum FICO</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default BusinessLoan;
