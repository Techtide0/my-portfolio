import { PortfolioPage } from './components/ui/starfall-portfolio-landing';
import {
  Mail, Github, Linkedin, MessageCircle,
  Store, CloudRain, Music, Disc3,
  ShoppingBag, LayoutDashboard, Database, Users,
  TrendingUp, MessageSquare, Brain, Network, Rocket,
} from 'lucide-react';

// ─── Reusable image-slot builder ────────────────────────────────────────────
function ProjectImg({ Icon, label, from, to }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '8px',
      background: `linear-gradient(135deg, ${from}, ${to})`,
      borderRadius: '12px',
    }}>
      <Icon size={38} style={{ color: 'rgba(255,255,255,0.65)' }} />
      <span style={{
        fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase',
        fontFamily: 'Inter, system-ui, sans-serif', color: 'rgba(255,255,255,0.45)',
      }}>
        {label}
      </span>
    </div>
  );
}

// ─── Portfolio data ──────────────────────────────────────────────────────────
const portfolioData = {
  logo: { initials: 'OM', name: 'Oseni Matthew' },

  navLinks: [
    { label: 'About',    href: '#about'   },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact',  href: '#contact'  },
  ],

  resume: {
    label: 'Resume',
    onClick: () => window.open('/Oseni_Matthew_CV.docx', '_blank'),
  },

  hero: {
    titleLine1: 'Frontend Developer &',
    titleLine2Gradient: 'Full-Stack Engineer',
    subtitle:
      'Merging creativity and code to deliver exceptional web and mobile ' +
      'applications. Specialized in React, React Native, and the MERN stack.',
  },

  ctaButtons: {
    primary: {
      label: 'View My Work',
      onClick: () =>
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
    },
    secondary: {
      label: 'Get In Touch',
      onClick: () =>
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
    },
  },

  projects: [
    {
      title: 'UMP – University Marketplace',
      subtitle: 'Full-Stack Web Application – MERN Stack',
      type: 'Startup Project',
      description:
        'Campus-based online marketplace with JWT auth, RESTful APIs, and scalable MongoDB schemas.',
      tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST API'],
      links: {
        github: 'https://github.com/UMP-NG/UMP-HTML',
        live: 'https://www.myump.com.ng/',
      },
      imageContent: (
        <ProjectImg
          Icon={Store}
          label="MERN Stack"
          from="rgba(99,102,241,0.25)"
          to="rgba(139,92,246,0.2)"
        />
      ),
    },
    {
      title: 'Flood Alert App',
      subtitle: 'Mobile Application – React Native & Expo',
      type: 'Hackathon Project',
      description:
        'Mobile app delivering real-time flood risk notifications via weather and location-based APIs.',
      tags: ['React Native', 'Expo', 'API Integration', 'Mobile'],
      links: {
        github: 'https://github.com/Gibson68/Flood-Alert-App',
      },
      imageContent: (
        <ProjectImg
          Icon={CloudRain}
          label="React Native"
          from="rgba(6,182,212,0.25)"
          to="rgba(14,165,233,0.2)"
        />
      ),
    },
    {
      title: 'Techtunes Music Streaming',
      subtitle: 'React + Jamendo API',
      description:
        'Music streaming platform with search, display, and playlist functionality via the Jamendo API.',
      tags: ['React', 'JavaScript', 'API', 'CSS'],
      links: {
        github:
          'https://github.com/Osenimatthew/Techtide-Entertainment/tree/master/techtunes',
      },
      imageContent: (
        <ProjectImg
          Icon={Music}
          label="React + API"
          from="rgba(168,85,247,0.25)"
          to="rgba(217,70,239,0.2)"
        />
      ),
    },
    {
      title: 'Techtunes (Vanilla JS)',
      subtitle: 'HTML, CSS, JavaScript',
      description:
        'Original music streaming site with Jamendo API integration — built from scratch in vanilla JS.',
      tags: ['HTML', 'CSS', 'JavaScript', 'API'],
      links: {
        github: 'https://github.com/Osenimatthew/Techtunes',
        live: 'https://osenimatthew.github.io/Techtunes/',
      },
      imageContent: (
        <ProjectImg
          Icon={Disc3}
          label="Vanilla JS"
          from="rgba(244,63,94,0.22)"
          to="rgba(251,113,133,0.15)"
        />
      ),
    },
    {
      title: 'B-way E-commerce',
      subtitle: 'Farm Products Marketplace',
      description:
        'E-commerce platform showcasing farm products with order placement and location-based authenticity.',
      tags: ['HTML', 'CSS', 'JavaScript', 'E-commerce'],
      links: {
        github: 'https://github.com/Techtide0/B_way-Farm/',
        live: 'https://techtide0.github.io/B_way-Farm/src/index.html',
      },
      imageContent: (
        <ProjectImg
          Icon={ShoppingBag}
          label="E-commerce"
          from="rgba(34,197,94,0.22)"
          to="rgba(16,185,129,0.18)"
        />
      ),
    },
    {
      title: 'B-way Admin Panel',
      subtitle: 'E-commerce Management System',
      description:
        'Admin dashboard for seamless product management with real-time updates and inventory tracking.',
      tags: ['JavaScript', 'Admin Panel', 'Management'],
      links: {
        github: 'https://github.com/Techtide0/B_way-Farm/',
        live: 'https://techtide0.github.io/B_way-Farm/src/Admin.html',
      },
      imageContent: (
        <ProjectImg
          Icon={LayoutDashboard}
          label="Admin Panel"
          from="rgba(245,158,11,0.22)"
          to="rgba(249,115,22,0.18)"
        />
      ),
    },
    {
      title: 'Data-Entry Automation',
      subtitle: 'Productivity Tool',
      description:
        'Tool to simplify formatting tasks, find CEO names from company domains, and manage contact data via upload and search.',
      tags: ['JavaScript', 'Automation', 'Data Processing'],
      links: {
        github: 'https://github.com/Techtide0/SETJOBS/',
        live: 'https://techtide0.github.io/SETJOBS/main.html',
      },
      imageContent: (
        <ProjectImg
          Icon={Database}
          label="Automation"
          from="rgba(14,165,233,0.22)"
          to="rgba(6,182,212,0.18)"
        />
      ),
    },
    {
      title: 'Mastaskillz Community',
      subtitle: 'Social Platform',
      description:
        'Community platform with posts, images, search, sorting, likes, comments, and shares.',
      tags: ['JavaScript', 'Social Media', 'Interactive'],
      links: {
        github: 'https://github.com/Techtide0/Mastaskillz/',
        live: 'https://techtide0.github.io/mastaskillz/',
      },
      imageContent: (
        <ProjectImg
          Icon={Users}
          label="Community"
          from="rgba(99,102,241,0.22)"
          to="rgba(6,182,212,0.18)"
        />
      ),
    },
    {
      title: 'EDGE-IQ',
      subtitle: 'AI-Powered Sports Intelligence & Betting Analytics',
      type: 'AI Project',
      description:
        'Data-driven sports analytics platform with AI match predictions, betting insights, real-time data aggregation, and performance dashboards.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'AI'],
      links: {
        github: 'https://github.com/Techtide0/EdgeIQ',
        live: 'https://edgeiqs.netlify.app/',
      },
      imageContent: (
        <ProjectImg
          Icon={TrendingUp}
          label="Sports AI"
          from="rgba(16,185,129,0.25)"
          to="rgba(6,182,212,0.2)"
        />
      ),
    },
    {
      title: 'PUSH-BOT',
      subtitle: 'Automated WhatsApp Messaging & Engagement System',
      type: 'Automation',
      description:
        'WhatsApp automation tool for bulk outreach, custom message scheduling, and human-like messaging flows via Puppeteer browser automation.',
      tags: ['Node.js', 'whatsapp-web.js', 'Puppeteer', 'Express'],
      links: {
        github: 'https://github.com/Techtide0/Push-bot',
      },
      imageContent: (
        <ProjectImg
          Icon={MessageSquare}
          label="WhatsApp Bot"
          from="rgba(34,197,94,0.25)"
          to="rgba(74,222,128,0.18)"
        />
      ),
    },
    {
      title: 'KOVA-AI',
      subtitle: 'Conversational AI Assistant Platform',
      type: 'AI Project',
      description:
        'Smart conversational AI assistant for businesses with NLP, session-based interaction, and real-time web chat via OpenAI API integration.',
      tags: ['Next.js', 'Node.js', 'Express', 'OpenAI API', 'MongoDB'],
      links: {
        github: 'https://github.com/Techtide0/Kova-AI',
      },
      imageContent: (
        <ProjectImg
          Icon={Brain}
          label="Conversational AI"
          from="rgba(168,85,247,0.25)"
          to="rgba(236,72,153,0.2)"
        />
      ),
    },
    {
      title: 'ASTELIX',
      subtitle: 'Cloud & Network Infrastructure Management',
      type: 'Infrastructure',
      description:
        'ISP/network infrastructure system for performance monitoring, analytics, and scalable deployment across telecom environments.',
      tags: ['Node.js', 'Express', 'Network APIs', 'MikroTik', 'Cloud'],
      imageContent: (
        <ProjectImg
          Icon={Network}
          label="Network Infra"
          from="rgba(14,165,233,0.25)"
          to="rgba(99,102,241,0.2)"
        />
      ),
    },
    {
      title: 'LIXETA',
      subtitle: 'AI-Powered Product / Business Prototype Platform',
      type: 'Demo',
      description:
        'Rapid prototyping platform combining AI-driven dynamic functionality with clean UI/UX for fast concept-to-prototype product validation.',
      tags: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
      links: {
        github: 'https://github.com/Techtide0/Lixeta_Demo',
        live: 'https://www.lixeta.com/',
      },
      imageContent: (
        <ProjectImg
          Icon={Rocket}
          label="SaaS Demo"
          from="rgba(249,115,22,0.25)"
          to="rgba(239,68,68,0.2)"
        />
      ),
    },
  ],

  stats: [
    { value: '13+', label: 'Projects Completed' },
    { value: '3+',  label: 'Years Experience'    },
    { value: 'ALX', label: 'Certified Graduate'  },
  ],
};

// ─── Contact links ───────────────────────────────────────────────────────────
const contactItems = [
  {
    icon: Mail,
    label: 'Email Me',
    href: 'mailto:osenimatthew9@gmail.com',
    external: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/oseni-matthew-025b4a283/',
    external: true,
  },
  {
    icon: Github,
    label: 'osenimatthew',
    href: 'https://github.com/osenimatthew',
    external: true,
  },
  {
    icon: Github,
    label: 'Techtide0',
    href: 'https://github.com/Techtide0',
    external: true,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/2348097925163?text=Hello%20there!%20I%20found%20your%20portfolio.',
    external: true,
  },
];

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ backgroundColor: '#040812' }}>
      <PortfolioPage {...portfolioData} />

      {/* ── Contact section ── */}
      <section
        id="contact"
        style={{ position: 'relative', zIndex: 10 }}
        className="w-full px-6 py-24"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 geist-font">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="inter-font text-lg font-light text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
            Always open to new projects and opportunities. Let's build something
            great.
          </p>

          <div className="flex flex-wrap gap-3 justify-center items-center mb-16">
            {contactItems.map(({ icon: Icon, label, href, external }) => (
              <a
                key={label}
                href={href}
                className="contact-link"
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>

          <div className="divider mb-8" />

          <p className="inter-font text-sm text-muted-foreground">
            © {new Date().getFullYear()} Oseni Matthew · Built with React &
            Three.js
          </p>
        </div>
      </section>
    </div>
  );
}
