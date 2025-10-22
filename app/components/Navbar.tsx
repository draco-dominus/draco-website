"use client";

import { Link as ScrollLink } from "react-scroll";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="glass-nav fixed inset-x-0 top-0 z-50">
      <div className="glass-nav-inner mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-[clamp(1rem,4vw,3rem)] py-4">
        {/* Left: Logo / Name */}
        <a href="#about" className="text-lg font-semibold tracking-tight text-slate-900">
          Draco Dominus
        </a>

        {/* Center: Navigation Links */}
        <div className="flex flex-1 min-w-[260px] items-center justify-center gap-[clamp(0.85rem,2.2vw,1.75rem)]">
          {links.map((link) => (
            <ScrollLink
              key={link.id}
              to={link.id}
              smooth
              duration={500}
              offset={-40}
              spy
              className="glass-nav-link"
              activeClass="glass-nav-link-active"
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>

        {/* Right: Social / Resume Icons */}
        <div className="flex shrink-0 items-center gap-3 text-slate-700">
          <a
            href="https://linkedin.com/in/draco-dominus"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-icon-button"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/dracodominus"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-icon-button"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="/Draco_Dominus_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-icon-button"
          >
            <FaFileAlt size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}
