import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <div className="about__subtitle">0 Years Working</div>
      </div>
      <div className="about__box">
        <i class="bx bx-briefcase about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <div className="about__subtitle">2 Projects</div>
      </div>
      <div className="about__box">
        <i class="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
        <div className="about__subtitle">Online 24/7</div>
      </div>
    </div>
  );
};
export default Info;
