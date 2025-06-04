"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import dropdowns from "../data/dropdowns.json";
import Dropdown from "./DropdownMenu"; // adjust path if needed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (category: string) => {
    setDropdownOpen(dropdownOpen === category ? null : category);
  };

  return (
    <nav className="w-full h-24 border-b mt-2">
      <div className="flex items-center justify-between mx-auto max-w-[1300px] h-full px-4 md:space-y-2 xl:flex-row md:flex-col">
        <Link href="/">
          <h1 className="font-black uppercase text-2xl">Components</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:flex-wrap md:justify-center space-x-6 uppercase">
          {Object.entries(dropdowns).map(([category, links]) => (
            <Dropdown
              key={category}
              category={category}
              links={links}
              isOpen={dropdownOpen === category}
              toggleOpen={() =>
                setDropdownOpen(dropdownOpen === category ? null : category)
              }
            />
          ))}
          <li>
            <Link href="/contact" className="font-black hover:underline">
              Contact Form
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center text-left space-y-6 uppercase bg-neutral-900 w-full py-6 border-t shadow-md z-50 absolute">
          {Object.entries(dropdowns).map(([category, links]) => (
            <Dropdown
              key={category}
              category={category}
              links={links}
              isOpen={dropdownOpen === category}
              toggleOpen={() => toggleDropdown(category)}
              isMobile
              closeMenu={() => setMenuOpen(false)}
            />
          ))}
          <li>
            <Link
              href="/contact"
              className="font-black hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Contact Form
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
