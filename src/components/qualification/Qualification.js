import React from "react";
import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggle, setToggle] = useState(1);

  const handleToggle = (index) => {
    setToggle(index);
  };
  return (
    <section className="qualification section">
      <h3 className="section__title">Qualification</h3>
      <span className="section__subtitle">My personel journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button qualification button--flex"
            }
            onClick={() => {
              handleToggle(1);
            }}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button qualification button--flex"
            }
            onClick={() => {
              handleToggle(2);
            }}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__section">
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineering</h3>
                <span className="qualification__subtitle">ALX Africa</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Hydraulic Engineering(MSc)
                </h3>
                <span className="qualification__subtitle">
                  Arba Minch University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2023
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Hydraulic and Water Resources Engineering
                </h3>
                <span className="qualification__subtitle">
                  University of Gondar
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2017
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Lecturer</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Gambella University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2023-Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"> Assistant Lecturer</h3>
                <span className="qualification__subtitle">
                  Gambella University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2020-2022
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Assistant WASH Officer</h3>
                <span className="qualification__subtitle">
                  Action for the Needy in Ethiopia
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2017-2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
