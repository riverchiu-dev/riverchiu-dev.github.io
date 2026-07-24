import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const PROJECTS = [
  {
    id: 1,
    title: "Entwicklung von Druckspracheneinstellungen für Odoo 16.0",
    tag: "ERP / UI Extension",
    context: "IHK-Abschlussprojekt · humanilog",
    description: "ERP UI/UX-Erweiterung, Wizard-Design & QWeb-Integration für multilokale NGO-Prozesse.",
    detail:
      "Konzeption und Umsetzung einer Odoo 16.0-Erweiterung für das Drucken mehrsprachiger Dokumente. Entwicklung eines interaktiven Wizards mit QWeb-Vorlagen, angepasster UI-Sprache und nahtloser Integration in bestehende NGO-Workflows bei humanilog. Abschlussprojekt der IHK-Ausbildung.",
    stack: ["Odoo 16", "Python", "QWeb", "XML", "UI/UX"],
    img: "images/Odoo-wizard.png",
    year: "2026",
  },
  {
    id: 2,
    title: "Webanwendung mit SQL: Urlaubsverwaltung",
    tag: "Web-App / Fullstack",
    context: "Umschulungsprojekt (Teamarbeit)",
    description: "Web-Anwendung (PHP/SQL) mit Rollenkonzept (User/Admin), Dashboards & Wireframing.",
    detail:
      "Entwicklung einer vollständigen Web-Applikation zur Urlaubsverwaltung mit rollenbasiertem Zugriffskonzept für Mitarbeiter und Administratoren. Inklusive Datenbankmodellierung (SQL), interaktiver Dashboards und UX-Wireframing für alle Nutzerrollen.",
    stack: ["PHP", "SQL", "HTML/CSS", "Wireframing"],
    img: "images/120968068-h-720.jpg",
    year: "2025",
  },
  {
    id: 3,
    title: "Supermarkt-Applikation in Python",
    tag: "Desktop GUI / Python",
    context: "Umschulungsprojekt",
    description: "Python/Tkinter GUI-Layout mit Rollentrennung für Kunden, Mitarbeiter und Manager.",
    detail:
      "Entwurf und Implementierung einer Desktop-Anwendung mit Python und Tkinter. Separate Benutzeroberflächen und Funktionsbereiche für drei Rollen: Kunden (Produktsuche, Warenkorb), Mitarbeiter (Lagerverwaltung) und Manager (Reporting, Benutzerverwaltung).",
    stack: ["Python", "Tkinter", "GUI Design", "UX Flows"],
    img: "images/supermarkt01.jpg",
    year: "2025",
  },
  {
    id: 4,
    title: "Corporate Design & Visuelle Kommunikation",
    tag: "Grafikdesign / Branding",
    context: "Flickr Portfolio & Print Media",
    description: "Konzeption und Gestaltung von Corporate-Design-Medien, Illustrationen & Web-Assets.",
    detail:
      "Ausgewählte visuelle und grafische Arbeiten (u. a. aus 2015). Umfangreiche Sammlung visueller und grafischer Arbeiten (Skizzieren, Malerei, Branding). Konzeption von Printmedien und digitalen Assets mit Adobe Photoshop, Illustrator und traditionellen Medien.",
    stack: ["Adobe Illustrator", "Photoshop", "Skizzieren", "Branding"],
    img: "images/grafikdesign02.jpg",
    link: "https://www.flickr.com/photos/riversworld/albums/72157632154583025/",
    year: "2015",
  },
];

const SKILLS = [
  { group: "Design", items: ["UI/UX Wireframing", "Figma", "Adobe Illustrator", "Adobe Photoshop", "Corporate Design", "Skizzieren"] },
  { group: "Entwicklung", items: ["Python", "PHP", "SQL", "XML", "Odoo ERP", "Java", "HTML", "CSS", "JavaScript"] },
  { group: "Systeme", items: ["macOS", "Windows", "Git", "Docker"] },
  { group: "Sprachen", items: ["Deutsch C1", "Englisch B2–C1", "Mandarin (Muttersprache)"] },
];

const QUALIFICATIONS = [
  {
    title: "M.Sc. Wirtschaftsinformatik Online",
    org: "HAW Kiel",
    period: "ab September 2026",
    note: "Berufsbegleitendes Studium",
  },
  {
    title: "Fachinformatiker für Anwendungsentwicklung",
    org: "IHK-Abschluss (Hamburg)",
    period: "2024 – 2026",
    note: "Abschlussprojekt: Entwicklung von Druckspracheneinstellungen für Odoo 16.0",
  },
  {
    title: "B.A. Accounting",
    org: "Hochschule",
    period: "Abgeschlossen",
    note: "Fundierter betriebswirtschaftlicher Hintergrund",
  },
];

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
      <style>{`
        .font-display { font-family: 'Barlow Condensed', Arial Narrow, sans-serif; }
        .font-mono   { font-family: 'DM Mono', monospace; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #2a2a2a; }
        * { scrollbar-width: thin; scrollbar-color: #2a2a2a transparent; }
      `}</style>

      {/* ─── NAV ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? "rgba(8,8,8,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(240,237,230,0.07)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="shrink-0 hover:opacity-80 transition-opacity flex items-center gap-2"
            aria-label="River Chiu – zur Startseite"
          >
            <ImageWithFallback src="/images/40x40.jpg" alt="river. Logo" className="w-9 h-9 object-cover rounded-full" />
            <span className="font-mono text-xs tracking-widest uppercase font-bold text-foreground">River Chiu</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[["Projekte", "projekte"], ["Qualifikationen", "qualifikationen"], ["Kontakt", "kontakt"]].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: menuOpen ? "220px" : "0px" }}
        >
          <div className="px-6 pb-6 pt-4 flex flex-col gap-5 border-t border-border">
            {[["Projekte", "projekte"], ["Qualifikationen", "qualifikationen"], ["Kontakt", "kontakt"]].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="font-display font-bold text-2xl uppercase text-left hover:text-primary transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section id="hero" className="min-h-screen flex flex-col justify-end pb-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(240,237,230,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(240,237,230,0.025) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div
          className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-display font-black leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(160px, 22vw, 320px)", color: "rgba(204,0,0,0.07)" }}
        >
          RC
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-5">
            PORTFOLIO — SOFTWARE ENGINEERING & DESIGN | FLENSBURG
          </p>

          <h1
            className="font-display font-black uppercase leading-none mb-10"
            style={{ fontSize: "clamp(3rem, 9.5vw, 9rem)", letterSpacing: "-0.01em" }}
          >
            UI/UX
            <br />
            <span className="text-primary">&amp; Software</span>
            <br />
            Engineering.
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed" style={{ fontFamily: "inherit" }}>
              Ich bin <em className="text-foreground">River Chiu</em> — IHK-zertifizierter Fachinformatiker
              für Anwendungsentwicklung und erfahrener Grafikdesigner. Ich verbinde fundierte
              Design-Expertise mit moderner Softwareentwicklung (Python, PHP, Odoo ERP).
            </p>

            <div className="shrink-0">
              <button
                onClick={() => scrollTo("projekte")}
                className="font-mono text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-200 font-semibold"
              >
                Projekte ansehen
              </button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              Verfügbar ab September 2026 · Master Wirtschaftsinformatik Online (HAW Kiel)
            </span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="font-mono text-xs tracking-widest text-muted-foreground">Scroll</span>
          <div className="w-px h-10 bg-muted-foreground animate-pulse" />
        </div>
      </section>

      {/* ─── PROJEKTE ─── */}
      <section id="projekte" className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <span className="font-mono text-xs tracking-widest text-primary uppercase">01 — Projekte</span>
            <h2
              className="font-display font-black uppercase mt-3 leading-none"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Ausgewählte
              <br />
              Arbeiten
            </h2>
          </Reveal>

          <div className="flex flex-col">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.id} delay={i * 50}>
                <div
                  className="group border-t border-border last:border-b cursor-pointer"
                  onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                >
                  <div className="flex items-start justify-between py-6 gap-4">
                    <div className="flex items-start gap-6 min-w-0">
                      <span className="font-mono text-xs text-muted-foreground pt-1 shrink-0 w-5">
                        0{i + 1}
                      </span>
                      <div className="min-w-0">
                        <h3
                          className="font-display font-bold uppercase group-hover:text-primary transition-colors leading-tight"
                          style={{ fontSize: "clamp(1.2rem, 2.8vw, 1.9rem)" }}
                        >
                          {project.title}
                        </h3>
                        <p className="font-mono text-xs text-muted-foreground mt-1 tracking-wide">
                          {project.description}
                        </p>
                        <p className="font-mono text-xs text-primary mt-1 tracking-widest uppercase">
                          {project.context}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 shrink-0 pt-1">
                      <span className="hidden md:block font-mono text-xs text-muted-foreground border border-border px-3 py-1 tracking-wider uppercase">
                        {project.tag}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                      <ArrowUpRight
                        size={16}
                        className="text-muted-foreground group-hover:text-primary transition-all duration-200"
                        style={{
                          transform: activeProject === project.id ? "rotate(90deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease, color 0.2s",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: activeProject === project.id ? "500px" : "0px" }}
                  >
                    <div className="grid md:grid-cols-5 gap-6 pb-8 pl-11">
                      <div className="md:col-span-3">
                        <p className="text-muted-foreground leading-relaxed">{project.detail}</p>
                        
                        {project.link && (
                          <div className="mt-4">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-primary underline hover:opacity-80"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Flickr Album ansehen <ExternalLink size={14} />
                            </a>
                          </div>
                        )}

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.stack.map((s) => (
                            <span
                              key={s}
                              className="font-mono text-xs tracking-wider uppercase border border-border text-muted-foreground px-3 py-1 hover:border-primary hover:text-primary transition-colors"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="md:col-span-2 overflow-hidden bg-muted" style={{ height: "180px" }}>
                        <img
                          src={project.img}
                          alt={project.title}
                          className={`w-full h-full opacity-70 group-hover:opacity-90 transition-opacity duration-500 ${
                            project.id === 4 ? 'object-contain' : 'object-cover'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUALIFIKATIONEN ─── */}
      <section id="qualifikationen" className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <span className="font-mono text-xs tracking-widest text-primary uppercase">02 — Qualifikationen</span>
            <h2
              className="font-display font-black uppercase mt-3 leading-none"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Bildung &amp;
              <br />
              Kompetenzen
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <Reveal>
                <p className="font-mono text-xs tracking-widest text-primary uppercase mb-6">Ausbildung</p>
              </Reveal>
              <div className="flex flex-col gap-0">
                {QUALIFICATIONS.map((q, i) => (
                  <Reveal key={q.title} delay={i * 60}>
                    <div className="border-t border-border py-5 last:border-b">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-display font-bold uppercase text-lg leading-tight">{q.title}</h3>
                          <p className="font-mono text-xs text-primary tracking-widest uppercase mt-1">{q.org}</p>
                          <p className="text-muted-foreground text-sm mt-1">{q.note}</p>
                        </div>
                        <span className="font-mono text-xs text-muted-foreground shrink-0">{q.period}</span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal>
                <p className="font-mono text-xs tracking-widest text-primary uppercase mb-6">Kompetenzen</p>
              </Reveal>
              <div className="flex flex-col gap-6">
                {SKILLS.map((group, i) => (
                  <Reveal key={group.group} delay={i * 60}>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
                        {group.group}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <span
                            key={skill}
                            className="font-mono text-xs tracking-wider uppercase px-3 py-1 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KONTAKT ─── */}
      <section id="kontakt" className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <span className="font-mono text-xs tracking-widest text-primary uppercase">03 — Kontakt</span>
            <h2
              className="font-display font-black uppercase mt-3 leading-none"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              Lass uns
              <br />
              <span className="text-primary">reden.</span>
            </h2>
            <p className="text-muted-foreground mt-5 max-w-md leading-relaxed">
              Du hast ein Projekt oder eine Idee? Ich freue mich über deine Nachricht — ob
              Freelance-Auftrag, Praktikum oder Vollzeitstelle ab September 2026.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl">
            {[
              { label: "E-Mail", value: "river.chiu@yahoo.de", href: "mailto:river.chiu@yahoo.de" },
              { label: "LinkedIn", value: "linkedin.com/in/riverchiu", href: "https://www.linkedin.com" },
              { label: "GitHub", value: "github.com/riverchiu-dev", href: "https://github.com/riverchiu-dev" },
              { label: "Standort", value: "Flensburg, Deutschland", href: "#" },
            ].map(({ label, value, href }, i) => (
              <Reveal key={label} delay={i * 60}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 border border-border hover:border-primary transition-colors duration-200"
                >
                  <div>
                    <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-1">{label}</p>
                    <p className="text-foreground group-hover:text-primary transition-colors text-sm">{value}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Nach oben" className="flex items-center gap-2">
            <ImageWithFallback
              src="/images/40x40.jpg"
              alt="river. Logo"
              className="w-7 h-7 object-cover rounded-full opacity-60 hover:opacity-100 transition-opacity"
            />
            <span className="font-mono text-xs text-muted-foreground">River Chiu</span>
          </button>
          <p className="font-mono text-xs text-muted-foreground text-center">
            © 2026 River Chiu — Fachinformatiker für Anwendungsentwicklung · Flensburg
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            Nach oben ↑
          </button>
        </div>
      </footer>
    </div>
  );
}
