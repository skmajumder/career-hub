import React from "react";
import "./Footer.css";
import SocialIcons from "../../../public/Icons/social-group.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="mb-5 d-grid footer-wrapper">
          <div className="footer-about">
            <h4 className="h4 mb-4">JobBox</h4>
            <p className="about-footer-text">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <img src={SocialIcons} className="footer-social" alt="" />
          </div>
          <div className="footer-menu">
            <p className="h6 mb-3">Company</p>
            <ul className="footer-nav">
              <li>
                <a href="#" className="text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Latest News
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Work
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <p className="h6 mb-3">Product</p>
            <ul className="footer-nav">
              <li>
                <a href="#" className="text-decoration-none">
                  Prototype
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Plans & Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <p className="h6 mb-3">Support</p>
            <ul className="footer-nav">
              <li>
                <a href="#" className="text-decoration-none">
                  Help Desk
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Sales
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Become a Partner
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Developers
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-address">
            <p className="h6 mb-3">Support</p>
            <address className="address">
              <p>524 Broadway , NYC</p>
              <p>+1 777 - 978 - 5570</p>
            </address>
          </div>
        </div>
        <hr />
        <p className="mt-5 copyright-text">@2023 CareerHub. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
