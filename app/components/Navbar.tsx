"use client";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

export default function Navbar() {
  const links = ["about", "projects", "experience", "contact"];

  const socialLinks = {
    linkedin: "https://linkedin.com/in/draco-dominus",
    github: "https://github.com/dracodominus",
    resume: "/resume.pdf",
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left: Name / Logo */}
        <div className="text-lg font-semibold tracking-tight">
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
          <a href={socialLinks.linkedin} target="_blank" className="hover:text-cyan-400 transition">
            <FaLinkedin />
          </a>
          <a href={socialLinks.github} target="_blank" className="hover:text-cyan-400 transition">
            <FaGithub />
          </a>
          <a href={socialLinks.resume} target="_blank" className="hover:text-cyan-400 transition">
            <FaFileAlt />
          </a>
        </div>
      </div>
    </nav>
  );
}