import { useState, useRef, useEffect } from "react";

const skills = [
  {
    name: "React.js",
    desc: "Expert in component-based architecture for building fast, declarative, and scalable Single Page Applications (SPAs).",
  },
  {
    name: "React Native",
    desc: "Developing and deploying cross-platform (iOS/Android) native mobile applications using a unified React codebase.",
  },
  {
    name: "JavaScript (ES6+)",
    desc: "Proficient in modern features like Promises, Async/Await, and modules for writing clean, high-performance front and back-end logic.",
  },
  {
    name: "Node.js",
    desc: "Leveraging the event-driven, non-blocking runtime for developing high-throughput and scalable server-side network applications.",
  },
  {
    name: "Express.js",
    desc: "Implementing well-structured, secure, and maintainable RESTful APIs and middleware with this minimalist web framework.",
  },
  {
    name: "MongoDB",
    desc: "Designing and managing schema-less NoSQL database structures for flexibility and performance in data-intensive applications.",
  },
  {
    name: "HTML5",
    desc: "Focus on semantic markup to ensure high accessibility (ARIA) and search engine optimization (SEO) of web content.",
  },
  {
    name: "CSS3",
    desc: "Implementing advanced layout techniques (Flexbox, Grid), transitions, and media queries to create visually appealing designs.",
  },
  {
    name: "Tailwind CSS",
    desc: "Utilizing a utility-first approach to quickly build complex, custom interfaces without writing conventional CSS.",
  },
  {
    name: "REST APIs",
    desc: "Experienced in the full lifecycle of designing, documenting, implementing, securing, and consuming standardized web services.",
  },
  {
    name: "Git",
    desc: "Standard use of branching, merging, and collaborative workflows (Gitflow) for reliable version control and team development.",
  },
  {
    name: "Responsive Design",
    desc: "Applying mobile-first principles and CSS media queries to guarantee seamless usability on all device sizes and orientations.",
  },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef();

  // Scroll-in animation with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`skills-container ${visible ? "animate-slide-in-right" : ""}`}
    >
      <h3 className="skills-title">Technical Skills</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-wrapper">
            <span
              className="skill-tag"
              onClick={() =>
                setActiveSkill(activeSkill === index ? null : index)
              }
            >
              {skill.name}
            </span>

            {activeSkill === index && (
              <div className="skill-desc-tooltip">
                {skill.desc}
                <span className="tooltip-arrow"></span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
