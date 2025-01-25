import React from "react";
import "./scrollup.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    // checking screen height
    if (this.scrollY >= 560) {
      scrollUp.classList.add("show__scroll");
    } else {
      scrollUp.classList.remove("show__scroll");
    }
  });
  return (
    <a className="scrollup" href="#home">
      <i className="uil uil-arrow-up scrollup__icon "></i>
    </a>
  );
};

export default ScrollUp;
