import { Link } from "react-scroll";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import logo from "../assets/logo.png";
import "../styles/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Logo */}
        <Link to="hero" smooth={true} duration={500}>
          <img src={logo} alt="EB Logo" className="footer__logo" />
        </Link>

        {/* Copyright */}
        <p className="footer__text">
          © {year} <span>Emirhan Büyüksenirli</span>. All rights reserved.
        </p>

        {/* Social links */}
        <div className="footer__socials">
          <a
            href="https://github.com/Emirhan-bs"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <FiGithub />
          </a>

          <a
            href="https://linkedin.com/in/emirhan-buyuksenirli"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <FiLinkedin />
          </a>

          <a
            href="mailto:emirhanbuyuksenirli@gmail.com"
            className="footer__social-link"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
