import  { useState } from "react";
import "./faq.css"; // Add some styling as needed

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if already open
    } else {
      setActiveIndex(index); // Open the clicked one
    }
  };

  const accordionData = [
    {
      question: "What services does ProHealth offer?",
      answer: "ProHealth offers a wide range of healthcare services...",
    },
    {
      question: "How do I schedule an appointment with ProHealth?",
      answer: "You can schedule an appointment through our website or by calling...",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept most major insurance providers. Please check with your provider...",
    },
    {
      question: "What should I bring to my appointment?",
      answer: "Please bring your insurance card, a valid ID, and any relevant medical records...",
    },
    {
      question: "How do I request a prescription refill?",
      answer: "You can request a prescription refill through our online portal...",
    },
  ];

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => toggleAccordion(index)}
          >
            <h2>{item.question}</h2>
            <span>{activeIndex === index ? "▲" : "▼"}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
