import React, { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getContentHeight = (index) => {
    if (contentRefs.current[index]) {
      return activeIndex === index
        ? `${contentRefs.current[index].scrollHeight}px`
        : "0px";
    }
    return "0px";
  };

  const faqData = [
    {
      question: "What is an ATS-friendly resume?",
      answer:
        "An ATS-friendly resume is designed to be easily read by applicant tracking systems, which scan resumes for keywords and formatting to help recruiters find the best candidates.",
    },
    {
      question: "How do I create an ATS-friendly resume on this website?",
      answer:
        "Simply sign up or log in, choose a template, fill in your details, and our system will ensure your resume is optimized for ATS compatibility.",
    },
    {
      question: "Is there a premium version of the website?",
      answer:
        "No, our platform is entirely free with no premium packs. All features are available to everyone.",
    },
    {
      question: "Can I download my resume for free?",
      answer: "Yes, you can download your resume in  PDF, absolutely free!",
    },
    {
      question: "Do I need to sign up to use the resume builder?",
      answer:
        "You can start building your resume without signing up, but you will need to sign up to save and download your resume.",
    },
    {
      question: "How can I give feedback to Re-Asume?",
      answer:
        "You can write your feedback on the Re-Asume website in a special section for comments in the footer.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 md:mt-24">
      <h2 className="md:text-[3rem] text-[1.6rem] font-bold text-center text-gray-800 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 ">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b-2 border-gray-300 ">
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center py-4 cursor-pointer px-2"
            >
              <h3 className="text-lg font-semibold text-gray-700">
                {faq.question}
              </h3>
              {activeIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                maxHeight: getContentHeight(index),
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <div className="text-gray-600 py-2  px-2">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
