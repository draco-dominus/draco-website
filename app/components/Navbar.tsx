"use client";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

export default function Navbar() {
  const links = ["about", "projects", "experience", "contact"];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10 text-white"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left: Name / Logo */}
        <div className="text-xl font-semibold tracking-tight">
          Draco Dominus
        </div>

        {/* Center: Nav links */}
        <div className="flex gap-8 text-sm">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="uppercase tracking-wide hover:text-cyan-400 transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: Social icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://linkedin.com/in/draco-dominus" target="_blank" className="hover:text-cyan-400">
            <FaLinkedin />
          </a>
          <a href="https://github.com/dracodominus" target="_blank" className="hover:text-cyan-400">
            <FaGithub />
          </a>
          <a href="/resume.pdf" target="_blank" className="hover:text-cyan-400">
            <FaFileAlt />
          </a>
        </div>
      </div>
    </nav>
  );
}