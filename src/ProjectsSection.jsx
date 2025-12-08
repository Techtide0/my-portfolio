import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection({ projects }) {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".project-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, index]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="section-content">
        <h2 className="section-title gradient-text animate-gradient fade-in-text">
          Featured Projects
        </h2>
        <p className="section-subtitle fade-in-text">
          A selection of my recent work
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${
                visibleCards.includes(index) ? "scroll-in" : ""
              }`}
            >
              {project.type && (
                <span className="project-badge btn-gradient animate-gradient">
                  {project.type}
                </span>
              )}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              {project.links && (
                <div className="project-links">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link link-purple"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link link-pink"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
