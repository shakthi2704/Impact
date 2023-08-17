import React from "react";
import { faqItems } from "../constants/data";
function FAQ() {
  return (
    <section id="faq" class="faq">
      <div class="container" data-aos="fade-up">
        <div class="row gy-4">
          <div class="col-lg-4">
            <div class="content px-xl-5">
              <h3>
                Frequently Asked <strong>Questions</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
            </div>
          </div>

          <div class="col-lg-8">
            <div
              class="accordion accordion-flush"
              id="faqlist"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {faqItems.map((faq, index) => (
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      <span class="num">{faq.num}</span>
                      {faq.question}
                    </button>
                  </h3>
                  <div
                    id={faq.targetId}
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div class="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
