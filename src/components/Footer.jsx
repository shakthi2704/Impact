import React from "react";
import { socialLinks, footerLinks, skills } from "../constants/data";
const Footer = () => {
  return (
    <footer id="footer" class="footer">
      <div class="container">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-5 col-md-12 footer-info">
              <a href="index.html" class="logo d-flex align-items-center">
                <span>Impact</span>
              </a>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                nada terra videa magna derita valies darta donna mare fermentum
                iaculis eu non diam phasellus.
              </p>
              <div className="social-links d-flex mt-4">
                {socialLinks.map((link, index) => (
                  <a key={index} href="#" className={link.platform}>
                    <i className={link.iconClass}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div class="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>
                    <a href={skill.href}>{skill.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                A108 Adam Street <br />
                New York, NY 535022
                <br />
                United States <br />
                <br />
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-4">
        <div class="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Impact</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
