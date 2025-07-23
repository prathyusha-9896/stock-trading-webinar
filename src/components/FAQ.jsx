import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How can I join the workshop?",
    answer:
      "Register by clicking the link button and you will receive a link to join on your registered email a day before the program.",
  },
  {
    question: "Will I get reminders before the workshop begins?",
    answer:
      "Yes. We will send you reminders before via emails, calls and WhatsApp. Rest be assured—you’ll be reminded every step of the way to not miss your chance.",
  },
  {
    question: "Does this program teach me everything in stock market questions?",
    answer:
      "No. We recommend you attend this event first and our advanced programs to get 100%.",
  },
  {
    question: "Should I have any stock market background or knowledge before attending the program?",
    answer:
      "No. This basic event is for you to get started with positive attitude and high energy.",
  },
  {
    question: "Can I ask my questions in the program?",
    answer:
      "Yes. CA Rudramurthy will dedicate 30-min to one-by-one QnA & the program is clear all your personal doubts.",
  },
  {
    question: "Will I receive a recording of the program?",
    answer:
      "No. This event is live to be there Live and experience the learning in real-time.",
  },
  {
    question: "When is the program? Date and time?",
    answer: "Sunday, 25th August 2025 at 11am.",
  },
  {
    question: "Is the program online or offline?",
    answer: "The program is completely online.",
  },
  {
    question: "Do you suggest or ask for any preparation before attending the program?",
    answer: `Yes. I recommend attending with the following recommendations:
1. Have a notepad and pen.
2. Keep distractions around you to minimum for better impact.
3. Make sure you’re in a distraction-free peaceful learning flow during the entire program.
4. Avoid mobile usage unless it’s for the program (like watching mobile version email or Zoom) and close other tabs.
5. Come fresh, positive attitude, and high energy.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#030617] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10">
          Frequently Asked{" "}
          <span className="text-[#00FF99]">Questions</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#0f172a] border border-[#1e293b] rounded-md"
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
              >
                <span className="text-sm font-medium text-white">
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <FaMinus className="text-[#00FF99]" />
                ) : (
                  <FaPlus className="text-[#00FF99]" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-4 text-sm text-gray-300 whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
