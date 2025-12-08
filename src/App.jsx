import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Facebook,
} from "lucide-react";
import myPic from "./assets/images/matthew.png";
import Skills from "./Skills";
import ProjectsSection from "./ProjectsSection";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "UMP – University Market Place",
      subtitle: "Full-Stack Web Application – MERN Stack",
      description:
        "Building a campus-based online marketplace using React.js, Node.js, Express, and MongoDB with RESTful APIs, authentication, and scalable MongoDB schemas.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "REST API"],
      type: "Startup Project",
    },
    {
      title: "Flood Alert App",
      subtitle: "Mobile Application – React Native & Expo",
      description:
        "Developed a flood alert mobile application providing real-time flood risk notifications with weather and location-based APIs integration.",
      tags: ["React Native", "Expo", "API Integration", "Mobile"],
      type: "Hackathon Project",
    },
    {
      title: "Techtunes Music Streaming",
      subtitle: "React + Jamendo API",
      description:
        "Music streaming platform with search, display, and playlist functionality integrated with Jamendo API.",
      tags: ["React", "API", "JavaScript", "CSS"],
      links: {
        github:
          "https://github.com/Osenimatthew/Techtide-Entertainment/tree/master/techtunes",
      },
    },
    {
      title: "Techtunes Music Streaming (Vanilla JS)",
      subtitle: "HTML, CSS, JavaScript",
      description:
        "Original version of the music streaming site with Jamendo API integration.",
      tags: ["HTML", "CSS", "JavaScript", "API"],
      links: {
        github: "https://github.com/Osenimatthew/Techtunes",
        live: "https://osenimatthew.github.io/Techtunes/",
      },
    },
    {
      title: "B-way E-commerce Website",
      subtitle: "Farm Products Marketplace",
      description:
        "E-commerce platform showcasing farm products with order placement and location details for authenticity.",
      tags: ["HTML", "CSS", "JavaScript", "E-commerce"],
      links: {
        github: "https://github.com/Techtide0/B_way-Farm/",
        live: "https://techtide0.github.io/B_way-Farm/src/index.html",
      },
    },
    {
      title: "B-way Admin Panel",
      subtitle: "E-commerce Management System",
      description:
        "Admin panel for seamless product management with real-time updates and inventory tracking.",
      tags: ["JavaScript", "Admin Panel", "Management"],
      links: {
        github: "https://github.com/Techtide0/B_way-Farm/",
        live: "https://techtide0.github.io/B_way-Farm/src/Admin.html",
      },
    },
    {
      title: "Data-Entry Automation Software",
      subtitle: "Productivity Tool",
      description:
        "Built tool to simplify formatting tasks, find CEO names based on company domains, and manage CEO information through upload and search features.",
      tags: ["JavaScript", "Automation", "Data Processing"],
      links: {
        github: "https://github.com/Techtide0/SETJOBS/",
        live: "https://techtide0.github.io/SETJOBS/main.html",
      },
    },
    {
      title: "Mastaskillz Community Page",
      subtitle: "Social Platform",
      description:
        "Community platform supporting user interaction with posts, images, search, sorting, likes, comments, and shares.",
      tags: ["JavaScript", "Social Media", "Interactive"],
      links: {
        github: "https://github.com/Techtide0/Mastaskillz/",
        live: "https://techtide0.github.io/mastaskillz/",
      },
    },
  ];

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className={`portfolio-nav ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-content">
          <div className="nav-inner">
            <div className="logo-container">
              <h1 className="logo-text gradient-text">OSENI MATTHEW</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-desktop">
              <div className="nav-links">
                {["home", "about", "projects", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`nav-link ${
                      activeSection === item ? "active" : ""
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
                <a
                  href="https://docs.google.com/document/d/18BrSvP7r-JiFl3WrkB_7PWcu5ntDefxTMCLOJWCatf0/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn btn-gradient"
                >
                  Resume
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="mobile-menu-btn">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menu-toggle"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              {["home", "about", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="mobile-menu-link"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <a
                href="https://docs.google.com/document/d/18BrSvP7r-JiFl3WrkB_7PWcu5ntDefxTMCLOJWCatf0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-resume-btn btn-gradient"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text animate-slide-in-left">
            <div className="hero-greeting">
              <p className="greeting-text">Hello, I'm</p>
              <h1 className="hero-title gradient-text animate-gradient">
                Oseni Matthew
              </h1>
              <h2 className="hero-subtitle">
                <span className="subtitle-pink">Frontend Developer</span> &{" "}
                <span className="subtitle-purple">Full-Stack Developer</span>
              </h2>
            </div>
            <p className="hero-description">
              Merging creativity and code to deliver exceptional web and mobile
              applications. Specialized in React, React Native, and the MERN
              stack.
            </p>
            <div className="social-links animate-scale-in">
              <a
                href="https://github.com/Osenimatthew/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon animate-glow"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/oseni-matthew-025b4a283/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon animate-glow"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.facebook.com/oseni.matthew.3"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon animate-glow"
              >
                <Facebook size={24} />
              </a>
              <a
                href="mailto:osenimatthew9@gmail.com"
                className="social-icon animate-glow"
              >
                <Mail size={24} />
              </a>
            </div>
            <button
              onClick={() => scrollToSection("projects")}
              className="cta-btn btn-primary animate-gradient"
            >
              View My Work
            </button>
          </div>
          <div className="hero-avatar animate-slide-in-right">
            <div className="avatar-container animate-float">
              <div className="avatar-glow"></div>
              <div className="avatar-circle glass-effect">
                <div className="hero-emoji">
                  <img src={myPic} alt="Oseni Matthew" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-content">
          <h2 className="section-title gradient-text animate-gradient">
            About Me
          </h2>
          <div className="about-grid">
            <div className="about-text animate-slide-in-left">
              <p className="about-paragraph">
                I am a dedicated full-stack developer passionate about building
                visually appealing, intuitive, and user-friendly web
                applications. Having recently graduated from the{" "}
                <span className="highlight-purple">ALX program</span>, I've
                honed my skills in modern web technologies with a focus on
                efficient coding practices.
              </p>
              <p className="about-paragraph">
                Through intensive, real-world projects including a{" "}
                <span className="highlight-pink">
                  startup marketplace platform
                </span>{" "}
                and a{" "}
                <span className="highlight-pink">
                  hackathon-winning mobile app
                </span>
                , I've developed a problem-solving mindset and solid
                understanding of responsive design, accessibility, and user
                experience.
              </p>
              <p className="about-paragraph">
                I'm a fast learner with a commitment to continuous improvement,
                always eager to explore new tools and frameworks. My approach
                combines creativity with precision, building solutions that are
                both functional and engaging.
              </p>
            </div>
            <div className="skills-container animate-slide-in-right">
              <Skills />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection projects={projects} />

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <h2 className="section-title gradient-text animate-gradient">
            Let's Work Together
          </h2>
          <p className="contact-subtitle animate-fade-in">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
          <div className="contact-grid">
            <a
              href="mailto:osenimatthew9@gmail.com"
              className="contact-card animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <Mail size={24} />
              <span>Email Me</span>
            </a>
            <a
              href="https://www.linkedin.com/in/oseni-matthew-025b4a283/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Osenimatthew/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a
              href="https://wa.me/08097925163?text=Hello%20there!%20I%20found%20your%20portfolio."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card animate-scale-in"
              style={{ animationDelay: "0.4s" }}
            >
              <svg
                className="whatsapp-icon"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} Oseni Matthew. All rights
            reserved.
          </p>
          <p className="footer-credit">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
