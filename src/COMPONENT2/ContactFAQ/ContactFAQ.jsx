import { useState } from "react";
import './ContactFAQ.css'

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What services does ProHealth offer?",
      answer:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    },
    {
      question: "How do I schedule an appointment with ProHealth?",
      answer:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    },
    {
      question: "What should I bring to my appointment?",
      answer:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    },
    {
      question: "How do I request a prescription refill?",
      answer:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
      <div className="cs_height_190 cs_height_xl_145 cs_height_lg_105"></div>
      <div className="ContactFAQ">
        <div className="ContactFAQrow">
          {/* Left Heading */}
          <div className="col-lg-5">
            <div className="cs_section_heading cs_style_1">
              <h3 className="cs_section_subtitle text-uppercase cs_accent_color cs_semibold m-0 cs_accent_color Contactfaq-cs_fs_32">
                What People
              </h3>
              <div className="cs_height_5"></div>
              <h2 className="cs_section_title Contactfaq-cs_fs_72 m-0">Usually Asked</h2>
            </div>
            <div className="cs_height_70 cs_height_lg_50"></div>
          </div>

          {/* Right Accordions */}
          <div className="col-lg-7">
            <div className="cs_height_40 cs_height_lg_0"></div>
            <div className="cs_accordians cs_style1 cs_type_2 cs_heading_color">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`cs_accordian ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <h2
                    className="cs_accordian_head cs_heading_color"
                    onClick={() => toggleAccordion(index)}
                    style={{ cursor: "pointer" }}
                  >
                    {faq.question}
                    <span className="cs_accordian_arrow">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          transform:
                            activeIndex === index
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <path
                          d="M-6.11959e-07 14C-2.74531e-07 21.7195 6.28053 28 14 28C21.7195 28 28 21.7195 28 14C28 6.28053 21.7195 -9.49388e-07 14 -6.11959e-07C6.28053 -2.74531e-07 -9.49388e-07 6.28053 -6.11959e-07 14ZM26.25 14C26.25 20.7548 20.7548 26.25 14 26.25C7.24522 26.25 1.75 20.7548 1.75 14C1.75 7.24522 7.24522 1.75 14 1.75C20.7548 1.75 26.25 7.24522 26.25 14ZM13.3814 8.13137C13.7233 7.78947 14.2769 7.78947 14.6186 8.13137L18.9936 12.5064C19.1645 12.6772 19.25 12.9012 19.25 13.125C19.25 13.3488 19.1645 13.5728 18.9936 13.7436C18.6517 14.0855 18.0981 14.0855 17.7564 13.7436L14.875 10.8622L14.875 19.25C14.875 19.7332 14.4837 20.125 14 20.125C13.5163 20.125 13.125 19.7332 13.125 19.25L13.125 10.8622L10.2436 13.7436C9.90172 14.0855 9.34806 14.0855 9.00637 13.7436C8.66469 13.4017 8.66447 12.8481 9.00637 12.5064L13.3814 8.13137Z"
                          fill="#307BC4"
                        ></path>
                      </svg>
                    </span>
                  </h2>
                  <div
                    className="cs_accordian_body"
                    style={{
                      display: activeIndex === index ? "block" : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
