import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import { useRef, useState } from "react";

const contactLinks = [
  {
    id: 1,
    label: "emirhanbuyuksenirli@gmail.com",
    href: "mailto:emirhanbuyuksenirli@gmail.com",
    icon: <FiMail />,
  },
  {
    id: 2,
    label: "github.com/Emirhan-bs",
    href: "https://github.com/Emirhan-bs",
    icon: <FiGithub />,
  },
  {
    id: 3,
    label: "linkedin.com/in/emirhan-buyuksenirli",
    href: "https://linkedin.com/in/emirhan-buyuksenirli",
    icon: <FiLinkedin />,
  },
];

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        <div className="contact__wrapper">
          {/* Left: Info */}
          <div className="contact__info">
            <h3>Let's work together</h3>
            <p>
              I'm currently open to junior developer positions and freelance
              projects. If you have an opportunity or just want to say hello,
              feel free to reach out!
            </p>
            <div className="contact__links">
              {contactLinks.map((link) => (
                <a
                  href={link.href}
                  className="contact__link"
                  target="_blank"
                  key={link.id}
                  rel="noreferrer"
                >
                  <span className="contact__link-icon">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="contact__form" ref={formRef}>
            <div className="form__group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                name="from_name"
                required
              />
            </div>

            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                required
                name="from_email"
              />
            </div>

            <div className="form__group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Your message..."
                required
                id="message"
              />
            </div>
            {/* Status messages */}
            {status === "success" && (
              <p className="form__status form__status--success">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="form__status form__status--error">
                ❌ Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              className="btn btn--primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  Send Message <FiSend />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
