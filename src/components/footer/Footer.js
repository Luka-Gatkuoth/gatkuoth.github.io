import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">Luka Gatkuoth</h2>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/luka-gatkuoth/"
            className="footer__social-link"
          >
            <i class="uil uil-linkedin"></i>
          </a>
          <a href="https://x.com/Lukagatkuoth" className="footer__social-link">
            <i class="uil uil-twitter"></i>
          </a>
          <a
            href="https://github.com/Luka-Gatkuoth"
            className="footer__social-link"
          >
            <i class="uil uil-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          Gatkuoth &copy;{new Date().getFullYear()}, All right reserved
        </span>
      </div>
    </footer>
  );
};
export default Footer;
