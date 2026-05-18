import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";
import  logo  from "../assets/logo.png";

const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Education", to: "education" },
  {label:"Experience", to:"experience"},
  { label: "Contact", to: "contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__inner">
        {/* Logo - Back to top scroll */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="navbar__logo"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logo} alt="Emirhan Logo" />
        </Link>

        {/* Destop + Mobile Nav Links */}
        <ul className={`navbar__links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Hamburger button for mobile */}
        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
