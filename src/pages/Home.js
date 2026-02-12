import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <header className="navbar">
        <div className="nav-left">
          <img src={logo} alt="Capital Sense Funding" className="nav-logo" />
          <span className="company-title">Capital Sense Funding</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/apply" className="apply-btn">Apply Now</Link>
        </div>
      </header>

      <section className="hero">
        <h1>Fast Business Capital When You Need It Most</h1>
        <p>Approval in under 1 hour. Same-day funding available nationwide.</p>

        <div className="hero-buttons">
          <Link to="/apply" className="btn-primary">Start Application</Link>
          <a href="tel:2675754786" className="btn-outline">
            Call (267) 575-4786
          </a>
        </div>
      </section>

      <section className="services">
        <h2>Our Financing Solutions</h2>

        <div className="card-grid">
          <div className="service-card">
            <h3>Business Line of Credit</h3>
            <p>Flexible revolving capital to manage cash flow efficiently.</p>
          </div>

          <div className="service-card">
            <h3>Term Loans</h3>
            <p>Structured funding with predictable monthly payments.</p>
          </div>

          <div className="service-card">
            <h3>SBA Loans</h3>
            <p>Government-backed financing with competitive rates.</p>
          </div>

          <div className="service-card">
            <h3>Equipment Financing</h3>
            <p>Upgrade operations without draining working capital.</p>
          </div>
        </div>
      </section>

      <section className="features">
        <div>✔ Fast Approval</div>
        <div>✔ No Hidden Fees</div>
        <div>✔ Same Day Funding</div>
        <div>✔ Nationwide Service</div>
      </section>

      <section className="bottom-cta">
        <h2>Ready to Grow Your Business?</h2>
        <p>Capital solutions designed for serious business growth.</p>
        <Link to="/apply" className="btn-dark">Apply Now</Link>
      </section>

      <footer className="footer">
        <h3>Capital Sense Funding</h3>
        <p>230 S. Broad St Suite 805</p>
        <p>Philadelphia, PA 19102</p>
        <p>Phone: (267) 575-4786</p>
        <p>Email: info@capitalsensefunding.com</p>
      </footer>

    </div>
  );
}

export default Home;
