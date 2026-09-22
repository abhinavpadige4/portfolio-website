import React from 'react';
import { Resume } from '../types/resume';

interface Props {
  projects: Resume['projects'];
}

export default function Projects({ projects }: Props) {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
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
