import React from "react";
import { navItems, socialLinks } from "../constants/data";

const Header = () => {
  return (
    <>
      <section id="topbar" class="topbar d-flex align-items-center">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">contact@example.com</a>
            </i>
            <i class="bi bi-phone d-flex align-items-center ms-4">
              <span>+1 5589 55488 55</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            {socialLinks.map((link, index) => (
              <a key={index} href="#" className={link.platform}>
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>
        </div>
      </section>
      <header id="header" class="header d-flex align-items-center">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" class="logo d-flex align-items-center">
            {/* <img src="assets/img/logo.png" alt="logo" /> */}
            <h1>
              Impact<span>.</span>
            </h1>
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
          </nav>

          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
    </>
  );
};

export default Header;
