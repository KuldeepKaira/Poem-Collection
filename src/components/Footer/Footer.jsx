import React from "react";
import "./footer.css";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="logo-cols">
          <img
            className="footerLogo"
            src="https://i.ibb.co/4RrCLhB/footer-logo.png"
            alt="logo"
          />
          <ul className="social-links">
            <li className="social-icon-link">
              <BsInstagram className="social-icon" />
            </li>
            <li>
              <BsFacebook className="social-icon" />
            </li>
            <li>
              <BsTwitter className="social-icon" />
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>Connect to me at</p>
          <p className="footer-email">
            <a className="footer-link" href="mailto:kkaira218@gmail.com">
              kkaira218@gmail.com
            </a>
          </p>
        </div>
        <div className="useful-links">
          <p className="link-heading">Useful Links:</p>
          <ul className="footer-link-list">
            <li>
              <a className="footer-link" href="#poems">
                Poems
              </a>
            </li>
            <li>
              <a className="footer-link" href="#me">
                About Me
              </a>
            </li>
            <li>
              <a className="footer-link" href="#cta">
                Submit Your Poem
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
