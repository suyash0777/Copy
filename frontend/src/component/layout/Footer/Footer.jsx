import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/Logo2.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <img src={logo} alt="logo" />
      </div>
      <div className="leftFooter">
        <h4>About</h4>
        <ul>
          <li></li>
          <li>
            <Link to="/about" className="footer-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="footer-link">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="footer-link">
              Careers
            </Link>
          </li>
        </ul>
      </div>

      <div className="midFooter">
        <h1>ShopNew</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; MeSuyashP</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://instagram.com/heyy__suyash?igshid=NGVhN2U2NjQ0Yg==">
          Instagram
        </a>
        <a href="https://www.snapchat.com/add/patil_suyash1?share_id=1IS0unM9Z7c&locale=en-US">
          SnapChat
        </a>
        <a href="https://www.facebook.com/suyash.patil.186">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
