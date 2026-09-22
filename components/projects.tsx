import React from 'react';
import { Resume } from '../types/resume';

interface Props { resume: Resume; }

export default function Projects({ resume }: Props) {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resume.projects.map((p, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{p.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, j) => (
                  <span key={j} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <div className="flex gap-4">
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Live Demo
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}