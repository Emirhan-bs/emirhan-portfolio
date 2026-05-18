import aboutPhoto from '../assets/og-image.jpg'
import useAnimateOnScroll from '../hooks/useAnimateOnScroll'
import '../styles/About.css'

function About() {
  const { ref: leftRef, inView: leftInView } = useAnimateOnScroll()
  const { ref: rightRef, inView: rightInView } = useAnimateOnScroll()

  return (
    <section className="about section" id="about">
      <div className="container">

        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about__wrapper">

          {/* Photo */}
          <div
            ref={leftRef}
            className={`about__photo-wrapper fade-left ${leftInView ? 'visible' : ''}`}
          >
            <img src={aboutPhoto} alt="Emirhan" />
          </div>

          {/* Text */}
          <div
            ref={rightRef}
            className={`about__content fade-right ${rightInView ? 'visible' : ''}`}
          >
            <h3>
              Passionate about <span>building things</span> for the web
            </h3>
            <p>
              I'm a Junior Full Stack Developer, focused on
              building clean and functional web applications. I completed an
              intensive Full Stack program at GoIT where I worked on real
              projects using modern technologies.
            </p>
            <p>
              My background is in Forest Engineering, which taught me
              analytical thinking, field problem-solving and working under
              pressure — skills I now apply every day in software development.
            </p>
            <p>
              I enjoy backend development most — working with APIs, databases
              and making everything connect. But I care about the full picture,
              from a clean UI to a well-structured server.
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <p className="about__stat-number">10+</p>
                <p className="about__stat-label">Projects</p>
              </div>
              <div className="about__stat">
                <p className="about__stat-number">12+</p>
                <p className="about__stat-label">Technologies</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About