"use client";

import { useState } from "react";

const tabs = [
  { label: "Tab One", content: "Content for the first tab." },
  { label: "Tab Two", content: "Content for the second tab." },
  { label: "Tab Three", content: "Content for the third tab." },
];

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="max-w-3xl mx-auto p-6">
      <div className="flex border-b border-gray-300 mb-6">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`px-6 py-3 -mb-px font-semibold border-b-2 ${
              activeIndex === i ? "border-blue-600 text-blue-600" : "border-transparent"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="text-gray-700">{tabs[activeIndex].content}</div>
    </section>
  );
}

export default Tabs;