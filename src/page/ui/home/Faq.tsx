import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";
import Title from "../../../componnets/ui/Title";
import Aos from "../../../hooks/Aos";

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What is the purpose of this event?",
      answer:
        "The purpose of the event is to bring together professionals and enthusiasts to discuss the latest trends in our industry.",
    },
    {
      id: 2,
      question: "How can I register for the event?",
      answer:
        "You can register for the event by visiting our website and filling out the registration form.",
    },
    {
      id: 3,
      question: "What is the event's schedule?",
      answer:
        "The event schedule will be released two weeks before the event. Please check our website for updates.",
    },
    {
      id: 4,
      question: "Will there be food and beverages provided?",
      answer:
        "Yes, we will provide food and beverages throughout the event. Special dietary options will also be available.",
    },
    {
      id: 5,
      question: "Can I bring a guest?",
      answer:
        "Yes, you can bring a guest. Please make sure to register them in advance.",
    },
    {
      id: 6,
      question: "What should I wear to the event?",
      answer:
        "The event is business casual. Please dress comfortably yet professionally.",
    },
    {
      id: 7,
      question: "Is there a dress code?",
      answer:
        "There is no strict dress code, but business casual attire is recommended.",
    },
    {
      id: 8,
      question: "How can I contact the event organizers?",
      answer:
        "You can contact the event organizers via the contact form on our website or by email.",
    },
  ];

  const toggleExpand = (index: number | null) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="p-6 ">
      <div className="flex items-center justify-center mb-8"></div>
      <Title
        title="Frequently asked questions"
        subTitle="All the question do you have"
      />
      <Aos />
      <div data-aos="fade-up" className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={faq.id} className=" border rounded-lg">
            <button
              onClick={() => toggleExpand(index)}
              className="w-full px-4 py-3 flex justify-between items-center text-left font-semibold text-gray-800 hover:bg-gray-100 rounded-t-lg focus:outline-none"
            >
              <span className="flex items-center gap-4">
                {" "}
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22none%22%3E%3Cpath%20fill%3D%22url(%23A)%22%20fill-rule%3D%22evenodd%22%20d%3D%22M11.018%2019.738C21.196%2014.084%2020.032%208.267%2019.9%201.92a1.94%201.94%200%200%200-.62-1.363A2.09%202.09%200%200%200%2017.835%200H2.147C1.614%200%201.1.2.72.56a1.94%201.94%200%200%200-.62%201.36c-.114%206.348-1.306%2012.165%208.872%2017.82a2.125%202.125%200%200%200%202.047%200z%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22A%22%20x1%3D%2210.005%22%20x2%3D%2210.005%22%20y1%3D%22-8.772%22%20y2%3D%2225.896%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20offset%3D%22.08%22%20stop-color%3D%22%230093a1%22%2F%3E%3Cstop%20offset%3D%22.87%22%20stop-color%3D%22%2346bfaf%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E"
                  alt="Event"
                  className="w-4 h-4  rounded-lg"
                />{" "}
                {faq.question}
              </span>
              {expandedIndex === index ? (
                <FiPlus className="w-6 h-6 text-gray-600" />
              ) : (
                <FaMinus className="w-6 h-6 text-gray-600" />
              )}
            </button>
            {expandedIndex === index && (
              <div className="p-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
