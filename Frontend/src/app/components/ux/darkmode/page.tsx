"use client";

import React, { useState, useEffect } from 'react';

const Page = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check if the user prefers dark mode from system settings
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  return (
    <section
      className={`grid items-center justify-items-center h-[750px] ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <h2 className="uppercase text-2xl mb-4">darkmode</h2>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 border rounded hover:bg-gray-700 hover:text-white transition"
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </section>
  );
};

export default Page;
