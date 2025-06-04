"use client";

import Link from "next/link";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface DropdownProps {
  category: string;
  links: { label: string; href: string }[];
  isOpen: boolean;
  toggleOpen: () => void;
  isMobile?: boolean;
  closeMenu?: () => void;
}

const Dropdown = ({
  category,
  links,
  isOpen,
  toggleOpen,
  isMobile = false,
  closeMenu,
}: DropdownProps) => {
  return (
    <li
      className="relative"
      onMouseEnter={!isMobile ? toggleOpen : undefined}
      onMouseLeave={!isMobile ? toggleOpen : undefined}
    >
      <span
        className={`cursor-pointer font-black flex items-center ${
          isMobile ? "hover:underline" : "hover:underline"
        }`}
        onClick={isMobile ? toggleOpen : undefined}
      >
        {category}
        <span className="ml-2">
          {isOpen ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
        </span>
      </span>

      {isOpen && (
        <ul
          className={`${
            isMobile
              ? "flex flex-col space-y-2 py-2"
              : "absolute top-full left-0 w-56 bg-neutral-800 shadow-lg border rounded-md text-sm space-y-1 py-2 z-50"
          }`}
        >
          {links.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className={`${
                  isMobile
                    ? "block px-4 py-2 hover:bg-gray-700"
                    : "block px-4 py-2 hover:bg-gray-700"
                }`}
                onClick={() => {
                  if (closeMenu) closeMenu();
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
