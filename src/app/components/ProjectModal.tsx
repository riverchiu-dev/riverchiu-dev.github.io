import React from "react";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa"; 
import { Project } from "@/app/data/projectsData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const FlickrIcon = () => (
  <span className="inline-flex items-center gap-[2px] mr-0.5">
    <span className="w-2.5 h-2.5 rounded-full bg-[#0063DC]" />
    <span className="w-2.5 h-2.5 rounded-full bg-[#FF0084]" />
  </span>
);

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const isFlickr = project.link?.includes("flickr.com");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="bg-[#121212] border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl rounded-sm text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors p-2"
          aria-label="Schließen"
        >
          <X size={20} />
        </button>

        <div className="mb-4">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">
            {project.context} · {project.year}
          </span>
          <h2 className="font-display font-bold text-2xl md:text-3xl uppercase text-foreground mt-1">
            {project.title}
          </h2>
          <span className="inline-block font-mono text-xs text-muted-foreground border border-border px-2 py-0.5 mt-2 uppercase">
            {project.tag}
          </span>
        </div>

        <div className="my-6 border border-border bg-muted overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-auto max-h-[350px] object-cover"
          />
        </div>

        <div className="space-y-4 text-sm text-foreground/90 leading-relaxed">
          <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            Projekt-Details &amp; Highlights
          </h4>
          <p className="whitespace-pre-line">{project.detail}</p>
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-xs border border-border text-foreground px-2.5 py-1"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest uppercase px-5 py-3 bg-white text-black font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2 rounded-sm"
            >
              {isFlickr ? (
                <>
                  <FlickrIcon />
                  Portfolio auf Flickr
                </>
              ) : (
                <>
                  <FaGithub size={16} />
                  Code auf GitHub
                </>
              )}
              <ExternalLink size={13} />
            </a>
          )}
          <button
            onClick={onClose}
            className="font-mono text-xs tracking-widest uppercase px-5 py-3 border border-border text-muted-foreground hover:text-foreground transition-colors rounded-sm"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};