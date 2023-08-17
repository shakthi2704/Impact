import React from "react";
import { infoItems } from "../constants/data";

const Conact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Contact</h2>
          <p>
            Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam
            porro nihil id ratione ea sunt quis dolorem dolore earum
          </p>
        </div>
        <div className="row gx-lg-0 gy-4">
          <div className="col-lg-4">
            <div className="info-container d-flex flex-column align-items-center justify-content-center">
              {infoItems.map((info, index) => (
                <div key={index} className="info-item d-flex">
                  <i className={`bi ${info.iconName} flex-shrink-0`}></i>
                  <div>
                    <h4>{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-8">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div class="row">
                <div class="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div class="form-group mt-3">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <textarea
                  class="form-control"
                  name="message"
                  rows="7"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div class="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conact;
