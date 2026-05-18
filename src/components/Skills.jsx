import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiPostman } from "react-icons/si";
import "../styles/Skills.css";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
  { name: "JavaScript", icon: <FaJs />, color: "#f7df13" },
  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
  { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
  { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
  { name: "Github", icon: <FaGithub />, color: "#ffffff" },
  { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952b3" },
];

function Skills() {
  const { ref, inView } = useAnimateOnScroll();
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        <div
          
          ref={ref}
          className={`skills__grid fade-up ${inView ? "visible" : ""}`}
        >
          {skills.map((skills) => (
            <div className="skill-card" key={skills.name}>
              <span
                className="skill-card__icon"
                style={{ color: skills.color }}
              >
                {skills.icon}
              </span>
              <span className="skill-card__name">{skills.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
