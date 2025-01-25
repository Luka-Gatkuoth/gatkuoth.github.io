import React from "react";
import { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggle, setToggle] = useState(0);

  const handleToggle = (index) => {
    setToggle(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i can offer</span>
      <div className="services__container container grid">
        {/* First service */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Front-End Web <br />
              Development
            </h3>
          </div>
          <span className="services__button" onClick={() => handleToggle(1)}>
            Learn More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggle === 1 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => handleToggle(0)}
              ></i>
              <h3 className="services__modal-title">
                Front-End Web Development
              </h3>
              <p className="services__modal-description">
                I can provide quality work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Collaborating with designers to understand user requirements
                    and translate them into functional web applications.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Writing clean, maintainable code using HTML, CSS, and
                    JavaScript.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Implementing responsive design to ensure usability across
                    various devices and screen sizes.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Integrating APIs to connect front-end components with
                    back-end services.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Debugging and troubleshooting issues to enhance product
                    performance and user experience.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2nd service*/}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br /> Design
            </h3>
          </div>
          <span className="services__button" onClick={() => handleToggle(2)}>
            Learn More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggle === 2 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => handleToggle(0)}
              ></i>
              <h3 className="services__modal-title"> Ui/Ux Design </h3>
              <p className="services__modal-description">
                I can provide quality work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Translating wireframes and mockups into interactive web
                    elements.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Implementing responsive design principles to ensure
                    usability across devices.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Conducting usability testing and making adjustments based on
                    user feedback.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3rd services */}
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Visual <br /> Design
            </h3>
          </div>
          <span className="services__button" onClick={() => handleToggle(3)}>
            Learn More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggle === 3 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => handleToggle(0)}
              ></i>
              <h3 className="services__modal-title">Visual Design</h3>
              <p className="services__modal-description">
                I can provide quality work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Applying visual design elements (colors, fonts, images) as
                    provided by Visual Designers.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Ensuring that design elements are implemented accurately and
                    consistently.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Occasionally creating simple graphics or animations to
                    enhance the user experience.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
