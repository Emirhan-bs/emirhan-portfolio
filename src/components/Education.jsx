import { education } from "../data/educations";
import "../styles/Education.css";

function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <h2 className="section-title">
          My <span>Education</span>
        </h2>

        <div className="education__list">
          {education.map((item) => (
            <div key={item.id} className="education__item">
              <div className="education__dot" />
              <div className="education__card">
                <div className="education__header">
                  <div>
                    <h3 className="education__degree">{item.degree}</h3>
                    <p className="education__school">{item.school}</p>
                  </div>
                  <span className="education__period">{item.period}</span>
                </div>
                <p className="education__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Education;
