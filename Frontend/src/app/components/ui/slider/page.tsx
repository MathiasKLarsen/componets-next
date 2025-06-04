"use client";

import { useState } from "react";

const slides = [
  "Slide 1 Content",
  "Slide 2 Content",
  "Slide 3 Content",
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const nextSlide = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <section className="max-w-xl mx-auto p-6 text-center">
      <div className="relative bg-neutral-800 text-white rounded-md p-10">
        <p className="text-xl">{slides[current]}</p>

        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 hover:bg-gray-200"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 hover:bg-gray-200"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default Slider;