"use client";

import { useState } from "react";

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4">
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Open Modal
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
            <p className="mb-6">This is a simple modal window. Click outside or the close button to dismiss.</p>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Modal;