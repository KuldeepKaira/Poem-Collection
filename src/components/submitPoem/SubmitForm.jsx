import React from "react";
import "./submitForm.css";

const SubmitForm = () => {
  return (
    <div className="section-cta" id="cta">
      <div className="cta-container">
        <div className="cta-text-box">
          <h2 className="cta-heading">Send your best poem</h2>
          <form className="cta-form">
            <div>
              <label>Full Name</label>
              <input
                className="input"
                type="text"
                placeholder="Your Name"
                name="full-name"
                required
              />
            </div>
            <div>
              <label>Phone Number</label>
              <input className="input" type="number" name="phone-number" />
            </div>
            <div>
              <label>Write your poem here</label>
              <textarea
                type="text"
                className="input poem-input"
                rows="10"
                cols="5"
                name="poem"
              ></textarea>
            </div>
            <button type="submit" className="btn--form">
              Submit
            </button>
          </form>
        </div>
        <div
          className="cta-img-box"
          role="img"
          aria-label="women reading poem"
        ></div>
      </div>
    </div>
  );
};

export default SubmitForm;
