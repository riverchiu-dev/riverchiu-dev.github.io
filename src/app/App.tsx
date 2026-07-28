import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ExternalLink,
  Github,
  Mail,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

// Types
interface Project {
  id: string;
  num: string;
  title: string;
  category: string;
  client: string;
  year: string;
  tags: string[];
  description: string;
  details: string[];
  img: string;
  githubUrl?: string;
  demoUrl?: string;
}

// Helper: Image with Fallback
const ImageWithFallback: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => {
  const [error, setError] = useState(false);

  return (
    <img
      src={
        error
          ? "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
          : src
      }
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

const PROJECTS: Project[] = [
  {
    id: "odoo",
    num: "01",
    title: "Odoo Custom Wizard & Module",
    category: "ERP & Python Development",
    client: "Internal / Enterprise",
    year: "2024",
    tags: ["Python", "Odoo", "XML", "PostgreSQL"],
    description:
      "Custom ERP workflow extension built for streamlined data management and automated wizard interactions.",
    details: [
      "Designed and implemented custom Odoo models and wizards for complex data workflows.",
      "Integrated backend logic with customized XML views and UI components.",
      "Optimized query performance and database structure for high-volume transactions.",
    ],
    img: "/images/Odoo-wizard.png",
    githubUrl: "https://github.com",
  },
  {
    id: "dashboard",
    num: "02",
    title: "Analytics Dashboard",
    category: "Web Application",
    client: "Fintech Client",
    year: "2024",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    description:
      "A real-time financial tracking dashboard with customizable widgets and dark mode support.",
    details: [
      "Built interactive data visualizations using Recharts and D3.js.",
      "Implemented seamless state management for real-time WebSocket data feeds.",
      "Ensured full responsive design and AA accessibility compliance.",
    ],
    img: "/images/40x40.jpg",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>("odoo");
  const [modalProject, setModalProject] = useState<Project | null>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (modalProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalProject]);

  // Handle ESC key to close modal or mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalProject(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0D0D0D] text-[#E5E5E5] min-h-screen font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-[#0D0D0D]/80 backdrop-blur-md border-b border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <ImageWithFallback
              src="/images/40x40.jpg"
              alt="Logo"
              className="w-10 h-10 rounded-full border border-neutral-700 object-cover group-hover:border-neutral-400 transition-colors"
            />
            <span className="font-semibold text-lg tracking-wider uppercase font-mono">
              Portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-neutral-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-[#0D0D0D] border-b border-neutral-800 px-6 py-6 flex flex-col gap-4 text-sm uppercase tracking-widest text-neutral-400">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-end min-h-[80vh]">
        <div className="space-y-6 fade-in-on-scroll">
          <p className="text-neutral-500 font-mono tracking-widest uppercase text-sm">
            // Full-Stack Developer & UI Enthusiast
          </p>
          <h1 className="text-5xl md:text-8xl font-serif font-normal tracking-tight text-white leading-tight">
            Crafting digital <br />
            experiences with precision.
          </h1>
        </div>
      </section>

      {/* Projects Section (Accordion Style) */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto border-t border-neutral-800">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500 font-mono mb-12">
          [ Selected Works ]
        </h2>

        <div className="space-y-4">
          {PROJECTS.map((project) => {
            const isOpen = activeProject === project.id;
            return (
              <div
                key={project.id}
                className="border-b border-neutral-800 transition-colors duration-300"
              >
                <div
                  className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group"
                  onClick={() => setActiveProject(isOpen ? null : project.id)}
                  role="button"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-neutral-600 text-sm">
                      {project.num}
                    </span>
                    <h3
                      className="text-2xl md:text-4xl font-serif group-hover:text-neutral-400 transition-colors flex items-center gap-2"
                      onClick={(e) => {
                        e.stopPropagation(); // 防止觸發手風琴展開
                        setModalProject(project);
                      }}
                    >
                      {project.title}
                      <ArrowUpRight className="inline-block opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6 text-neutral-400" />
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-neutral-500 font-mono">
                    <span>{project.category}</span>
                    <ChevronDown
                      className={`transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="pb-8 pt-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-start fade-in-on-scroll">
                    <div>
                      <p className="text-neutral-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full text-neutral-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => setModalProject(project)}
                        className="inline-flex items-center gap-2 text-sm font-mono text-white underline underline-offset-4 hover:text-neutral-400 transition-colors"
                      >
                        View Project Details <ArrowUpRight size={16} />
                      </button>
                    </div>

                    <div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/50">
                      <ImageWithFallback
                        src={project.img}
                        alt={project.title}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal Window */}
      {modalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-md"
          onClick={() => setModalProject(null)}
        >
          <div
            className="bg-[#121212] border border-neutral-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 relative text-neutral-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
              <div>
                <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                  {modalProject.category} — {modalProject.year}
                </span>
                <h2 className="text-3xl font-serif text-white mt-1">
                  {modalProject.title}
                </h2>
              </div>
              <button
                onClick={() => setModalProject(null)}
                className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900">
              <ImageWithFallback
                src={modalProject.img}
                alt={modalProject.title}
                className="w-full h-auto max-h-[350px] object-cover"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-wider">
                Overview & Key Features
              </h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-300 leading-relaxed text-sm">
                {modalProject.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex flex-wrap gap-4 justify-between items-center">
              <div className="flex gap-2">
                {modalProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {modalProject.githubUrl && (
                  <a
                    href={modalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                )}
                {modalProject.demoUrl && (
                  <a
                    href={modalProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono bg-white hover:bg-neutral-200 text-black px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 px-6 max-w-7xl mx-auto border-t border-neutral-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-neutral-500 font-mono mb-4">
              [ Get in Touch ]
            </h2>
            <a
              href="mailto:contact@example.com"
              className="text-3xl md:text-5xl font-serif hover:text-neutral-400 transition-colors inline-flex items-center gap-3"
            >
              Let's work together <Mail className="w-8 h-8" />
            </a>
          </div>

          <div className="flex items-center gap-6 font-mono text-sm text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
