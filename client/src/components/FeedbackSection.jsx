import React, { useRef, useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const FeedbackSection = () => {
  const scrollContainer = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const updateScrollLimits = () => {
    const container = scrollContainer.current;
    if (container) {
      setIsAtStart(container.scrollLeft === 0);
      setIsAtEnd(
        Math.ceil(container.scrollLeft + container.offsetWidth) >=
        container.scrollWidth
      );
    }
  };

  const scrollLeft = () => {
    const container = scrollContainer.current;
    if (container) {
      container.scrollBy({ left: -900, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = scrollContainer.current;
    if (container) {
      container.scrollBy({ left: 900, behavior: "smooth" });
    }
  };

  const dummyFeedbacks = [
    {
      name: "John Doe",
      feedback:
        "This resume builder made my job application process so much easier!",
    },
    {
      name: "Jane Smith",
      feedback: "I loved the simplicity and professional templates!",
    },
    {
      name: "Alex Johnson",
      feedback: "Great tool for anyone looking to create ATS-friendly resumes.",
    },
    {
      name: "Emily Davis",
      feedback:
        "I was able to land my dream job thanks to this website. Highly recommend!",
    },
    {
      name: "Michael Brown",
      feedback: "The drag-and-drop interface made customization so easy.",
    },
    {
      name: "Sophia Wilson",
      feedback: "Quick, efficient, and free! What more could you ask for?",
    },
    {
      name: "Liam Martinez",
      feedback: "My resume passed ATS checks on multiple platforms without issues!",
    },
    {
      name: "Olivia Anderson",
      feedback: "A lifesaver for creating a standout resume under tight deadlines.",
    },
    {
      name: "Ethan Taylor",
      feedback: "User-friendly and well-designed. A must-try for job seekers.",
    }
];


  useEffect(() => {
    const container = scrollContainer.current;
    if (container) {
      container.addEventListener("scroll", updateScrollLimits);
      updateScrollLimits();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollLimits);
      }
    };
  }, []);

  return (
    <div>
      <div className="md:text-[4rem] text-[2.2rem]  font-semibold flex items-end justify-between px-12 my-24">
        <h1 className="w-72 leading-none">Loved & Trusted by</h1>
        <div className="flex gap-10">
          <button
            onClick={scrollLeft}
            disabled={isAtStart}
            className={`focus:outline-none ${isAtStart ? "opacity-50" : ""}`}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={scrollRight}
            disabled={isAtEnd}
            className={`focus:outline-none ${isAtEnd ? "opacity-50" : ""}`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="mt-12">
        <div
          ref={scrollContainer}
          className="flex gap-5 overflow-x-auto scrollbar-hide md:px-6"
        >
          {dummyFeedbacks.map((feedback, index) => (
            <div
              key={index}
              className="flex-shrink-0 md:w-96 w-52 rounded-3xl md:p-12 md:pl-2 p-3 border-black border border-l-0 rounded-l-none"
            >
              <p className="text-gray-700 italic mb-4 md;text-2xl text-xl ">"{feedback.feedback}"</p>
              <h4 className="font-bold text-gray-900 text-2xl">- {feedback.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
