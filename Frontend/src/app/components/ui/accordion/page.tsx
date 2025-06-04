"use client";

import { useState } from "react";

const items = [
  {
    question: "What is this component collection?",
    answer: "It's a set of reusable React UI components for your projects.",
  },
  {
    question: "How do I use these components?",
    answer: "Import them into your pages and customize as needed.",
  },
  {
    question: "Can I contribute?",
    answer: "Absolutely! Feel free to open pull requests.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">FAQ / Accordion</h2>
      <div className="space-y-4">
        {items.map(({ question, answer }, index) => (
          <div key={index} className="border rounded-md overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left px-6 py-4 bg-gray-100 font-semibold flex justify-between items-center focus:outline-none"
            >
              {question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white text-gray-700">{answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Accordion;