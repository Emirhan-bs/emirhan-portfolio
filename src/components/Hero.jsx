import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import profilePhoto from '../assets/profile.jpg'
import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner">

        {/* Left: Text */}
        <div className="hero__text">
          <p className="hero__greeting">Hello, I'm</p>

          <h1 className="hero__name">
            Emirhan <br />
            <span>Büyüksenirli</span>
          </h1>

          <p className="hero__title">Junior Full Stack Developer</p>

          <p className="hero__desc">
            Motivated developer building web applications with JavaScript,
            React, Node.js and MongoDB. Focused on clean code, real-world
            projects and growing every day.
          </p>

          <div className="hero__buttons">

            <Link to="projects" smooth={true} duration={500} offset={-80}>
              <button className="btn btn--primary">
                View Projects <FiArrowDown />
              </button>
            </Link>

            <a href="https://github.com/Emirhan-bs" target="_blank" rel="noreferrer">
              <button className="btn btn--outline">
                <FiGithub /> GitHub
              </button>
            </a>

            <a href="https://linkedin.com/in/emirhan-buyuksenirli" target="_blank" rel="noreferrer">
              <button className="btn btn--outline">
                <FiLinkedin /> LinkedIn
              </button>
            </a>

          </div>
        </div>

        {/* Right: Photo */}
        <div className="hero__photo">
          <div className="hero__photo-wrapper">
            <img src={profilePhoto} alt="Emirhan Büyüksenirli" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero