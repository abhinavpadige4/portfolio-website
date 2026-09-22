import React from 'react';
import ProjectCard from '@/components/ProjectCard';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  url: string;
  image: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Projects</h2>
        <p className="text-center text-gray-500">No projects to display yet.</p>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Projects</h2>
      <p className="text-gray-500 text-center mb-12">A selection of my recent work</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            url={project.url}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
