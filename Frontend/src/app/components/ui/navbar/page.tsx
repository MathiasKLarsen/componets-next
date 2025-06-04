"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Feather Icons for burger and close

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { href: "#", label: "Home" },
    { href: "#", label: "Slider" },
    { href: "#", label: "Produkter" },
    { href: "#", label: "Api-Call" },
    { href: "#", label: "Contact Form" },
  ];

  return (
    <nav className="w-full h-[750px] md:pb-2">
      <div className="flex items-center justify-between mx-auto max-w-[1300px] h-full px-4 sm:flex-col lg:flex-row">
        <Link href="#">
          <h1 className="font-black uppercase text-2xl">Navbar example</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 uppercase">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="font-black hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Burger Icon (Mobile only) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-6 uppercase bg-neutral-900 w-full py-6 border-t shadow-md">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="font-black text-xl"
                onClick={() => setMenuOpen(false)} // Close on link click
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;