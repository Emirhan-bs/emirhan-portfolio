import { experiences } from "../data/experience"
import useAnimateOnScroll from "../hooks/useAnimateOnScroll"
import "../styles/Experience.css"

function Experience() {
  const { ref, inView } = useAnimateOnScroll()

  return (
    <section className="experience section" id="experience">
      <div className="container">

        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>

        <div
          ref={ref}
          className={`experience__list fade-up ${inView ? "visible" : ""}`}
        >
          {experiences.map((exp) => (
            <div className="experience__item" key={exp.id}>

              <div className="experience__dot" />

              <div className="experience__card">
                <div className="experience__header">
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <p className="experience__company">{exp.company}</p>
                  </div>
                  <span className="experience__period">{exp.period}</span>
                </div>

                <ul className="experience__points">
                  {exp.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience