export interface ProjectFeature {
  title: string;
  desc: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  category: string;
  year: string;
  tags: string[];
  overview: string;
  problem: string;
  techDetails: string[];
  features: ProjectFeature[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 'odoo-16',
    number: '01',
    title: 'ENTWICKLUNG VON DRUCKSPRACHENEINSTELLUNGEN FÜR ODOO 16.0',
    subtitle: 'ERP UI/UX-Erweiterung, Wizard-Design & QWeb-Integration',
    badge: 'IHK-ABSCHLUSSPROJEKT • HUMANILOG',
    category: 'ERP / UI EXTENSION',
    year: '2026',
    tags: ['Odoo 16', 'Python', 'QWeb', 'XML / ORM'],
    overview: 'Entwicklung eines eigenständigen Odoo 16.0 Moduls zur dynamischen Steuerung der Drucksprache von Geschäftsdokumenten (Rechnungen, Verkaufsaufträge, Lieferscheine).',
    problem: 'Standardmäßig verwendet Odoo nur die fest hinterlegte Sprache des Kunden. Das entwickelte Modul ermöglicht es Benutzern, die Dokumentsprache spontan vor dem Druckvorgang über einen interaktiven Wizard auszuwählen, ohne die Stammdaten zu verändern.',
    techDetails: [
      'TransientModel (Wizard): Implementierung von print.language.wizard zur dynamischen Nutzerinteraktion.',
      'Report Engine Overriding: Überschreibung von ir.actions.report (_render_qweb_pdf), um den wizard_forced_lang Kontext zu injizieren.',
      'QWeb Templates: Anpassung der PDF-Vorlagen mittels XPath-Vererbung für flexible t-lang Steuerung.',
      'Data Model Extension: Erweiterung von res.partner und account.move um benutzerdefinierte Layout- und Sprachpräferenzen.'
    ],
    features: [
      { title: 'Dynamic Language Wizard', desc: 'Ermöglicht die freie Sprachwahl direkt im Operations-Menü des jeweiligen Dokuments.' },
      { title: 'Multi-Document Support', desc: 'Nahtlose Integration in Sale Orders, Invoices, Purchase Orders und Stock Pickings.' },
      { title: 'Fallback Strategy', desc: 'Automatische Sprachermittlung: Wizard > Partner > Company > User > Default (en_US).' },
      { title: 'i18n Readiness', desc: 'Vollständige Integration des GNU Gettext (.po) Standard zur Lokalisierung der App-Oberfläche.' }
    ],
    githubUrl: 'https://github.com/riverchiu-dev/odoo-dev'
  },
  {
    id: 'urlaubsverwaltung',
    number: '02',
    title: 'WEBANWENDUNG MIT SQL: URLAUBSVERWALTUNG',
    subtitle: 'Web-Anwendung (PHP/SQL) mit Rollenkonzept, Dashboards & Wireframing',
    badge: 'UMSCHULUNGSPROJEKT (TEAMARBEIT)',
    category: 'WEB-APP / FULLSTACK',
    year: '2025',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    overview: 'Entwicklung einer webbasierten Urlaubsverwaltungsplattform zur Digitalisierung von Urlaubsanträgen und Genehmigungsprozessen.',
    problem: 'Papierbasierte oder dezentrale Urlaubsanträge führen zu Verzögerungen und fehlender Übersicht im Team.',
    techDetails: [
      'Rollenbasiertes Rechtesystem (Admin, Manager, Mitarbeiter)',
      'Sichere PDO-Datenbankanbindung mit MySQL',
      'Interaktive Kalender-Ansicht mit JavaScript'
    ],
    features: [
      { title: 'Rollenkonzept', desc: 'Spezifische Ansichten und Rechte je nach Benutzerrolle.' },
      { title: 'Antrags-Dashboard', desc: 'Echtzeit-Übersicht über ausstehende und genehmigte Anträge.' }
    ]
  },
  {
    id: 'supermarkt',
    number: '03',
    title: 'SUPERMARKT-APPLIKATION IN PYTHON',
    subtitle: 'Python/Tkinter GUI-Layout mit Rollentrennung für Kunden, Mitarbeiter und Manager',
    badge: 'UMSCHULUNGSPROJEKT',
    category: 'DESKTOP GUI / PYTHON',
    year: '2025',
    tags: ['Python', 'Tkinter', 'OOP', 'JSON / SQLite'],
    overview: 'Desktop-Anwendung zur Simulation eines Supermarkt-Kassensystems und Bestandsmanagements.',
    problem: 'Demonstration von objektorientierter Programmierung (OOP) und GUI-Entwicklung in Python.',
    techDetails: [
      'Objektorientiertes Design (OOP) mit Modulen für Produkte, Warenkorb und Benutzer',
      'Tkinter GUI mit dynamischem Layout-Wechsel'
    ],
    features: [
      { title: 'Kunden- & Manager-Modus', desc: 'Einkaufssimulation und Lagerbestandspflege in einem System.' }
    ]
  },
  {
    id: 'branding',
    number: '04',
    title: 'CORPORATE DESIGN & VISUELLE KOMMUNIKATION',
    subtitle: 'Konzeption und Gestaltung von Corporate-Design-Medien, Illustrationen & Web-Assets',
    badge: 'FLICKR PORTFOLIO & PRINT MEDIA',
    category: 'GRAFIKDESIGN / BRANDING',
    year: '2015',
    tags: ['Corporate Design', 'Branding', 'Illustration', 'Print & Web'],
    overview: 'Umfassende Markenidentitätsentwicklung und visuelle Mediengestaltung.',
    problem: 'Aufbau konsistenter visueller Auftritte für verschiedene Medienkanäle.',
    techDetails: [
      'Vektorgrafik-Design und Typografie',
      'Print-Vorbereitung (CMYK, Anschnitt) und Web-Optimierung'
    ],
    features: [
      { title: 'Brand Identity', desc: 'Logos, Farbpaletten und Typografie-Guide.' }
    ]
  }
];