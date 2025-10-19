"use client";
import { Link } from "react-scroll";

export default function Navbar() {
  const links = ["hero", "about", "projects", "experience", "contact"];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "white",
        padding: "10px 20px",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      <div>Draco Dominus</div>
      <div style={{ display: "flex", gap: "20px" }}>
        {links.map((link) => (
          <Link
            key={link}
            to={link}
            smooth={true}
            duration={600}
            style={{ cursor: "pointer" }}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </Link>
        ))}
      </div>
      <button>🧠</button>
    </nav>
  );
}