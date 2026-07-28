import React, { useState } from 'react';
import { Project } from '../data/projectsData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'tech' | 'features'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-900 text-white rounded-xl border border-neutral-800 p-6 shadow-2xl">
        
        {/* Header Section */}
        <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
          <div>
            <span className="text-xs font-mono text-red-500 uppercase tracking-widest">
              {project.badge}
            </span>
            <h2 className="text-2xl font-bold mt-1">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-neutral-800 text-xs rounded-md text-neutral-300 font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="text-neutral-400 hover:text-white text-xl font-bold p-1 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-neutral-800 mt-4 gap-6 text-sm">
          <button 
            className={`pb-2 transition-colors ${activeTab === 'overview' ? 'border-b-2 border-red-500 font-bold text-white' : 'text-neutral-400 hover:text-white'}`}
            onClick={() => setActiveTab('overview')}
          >
            Überblick
          </button>
          <button 
            className={`pb-2 transition-colors ${activeTab === 'tech' ? 'border-b-2 border-red-500 font-bold text-white' : 'text-neutral-400 hover:text-white'}`}
            onClick={() => setActiveTab('tech')}
          >
            Technische Details
          </button>
          <button 
            className={`pb-2 transition-colors ${activeTab === 'features' ? 'border-b-2 border-red-500 font-bold text-white' : 'text-neutral-400 hover:text-white'}`}
            onClick={() => setActiveTab('features')}
          >
            Kernfunktionen
          </button>
        </div>

        {/* Tab Content */}
        <div className="py-6 text-neutral-300 space-y-4 text-sm leading-relaxed min-h-[160px]">
          {activeTab === 'overview' && (
            <div>
              <p className="mb-4 text-neutral-200">{project.overview}</p>
              <div className="bg-neutral-800/50 p-4 rounded-lg border border-neutral-700/50">
                <h4 className="font-semibold text-white mb-1">Problemstellung & Ziel:</h4>
                <p className="text-neutral-400 text-xs">{project.problem}</p>
              </div>
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="space-y-2">
              <h4 className="font-semibold text-white mb-2">Implementierung & Architektur:</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-neutral-300">
                {project.techDetails.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {project.features.map((feat, idx) => (
                <div key={idx} className="border border-neutral-800 p-3 rounded-lg bg-neutral-900/50">
                  <span className="font-bold text-white block mb-1">{feat.title}</span>
                  <p className="text-neutral-400">{feat.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex justify-between items-center border-t border-neutral-800 pt-4 mt-2">
          {project.githubUrl ? (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs transition-colors flex items-center gap-2"
            >
              GitHub Repository ↗
            </a>
          ) : <div />}
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg text-xs transition-colors"
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
};
