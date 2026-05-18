import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/projects";
import "../styles/Projects.css";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

function Projects() {
  const { ref, inView } = useAnimateOnScroll();
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>

        <div
          className="projects__grid"
          ref={ref}
          className={`projects__grid fade-up ${inView ? "visible" : ""}`}
        >
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-card__header">
                <h3 className="project-card__title">{project.title}</h3>
                <div className="project-card__links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FiGithub />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__tech">
                {project.tech.map((tag) => (
                  <span className="tech-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
