"use client";

import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

export default function Navbar() {
  const links = ["About", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200/50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Left: Name / Logo */}
        <div className="text-lg font-semibold text-gray-800 tracking-tight hover:text-[#007aff] cursor-pointer transition-colors duration-300">
          Draco Dominus
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex gap-10 text-[15px] font-medium text-gray-600">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-[#007aff] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-6 text-xl text-gray-600">
          <a
            href="https://www.linkedin.com/in/draco-dominus/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#007aff] transition-transform hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/dracodominus"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#007aff] transition-transform hover:scale-110"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="/Draco_Dominus_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#007aff] transition-transform hover:scale-110"
          >
            <FaFileAlt size={20} />
          </a>
        </div>

      </div>
    </nav>
  );
}