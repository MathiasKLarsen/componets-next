"use client";

import { useState } from "react";

const Tooltip = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div
        className="relative inline-block"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md">
          Hover me
        </button>

        {visible && (
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm rounded px-3 py-1 whitespace-nowrap">
            Tooltip text here
          </div>
        )}
      </div>
    </section>
  );
}

export default Tooltip;