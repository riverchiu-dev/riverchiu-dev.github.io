export interface Project {
  id: number;
  title: string;
  tag: string;
  context: string;
  description: string;
  detail: string;
  stack: string[];
  img: string;
  year: string;
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Entwicklung von Druckspracheneinstellungen für Odoo 16.0",
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