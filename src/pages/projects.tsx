import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ProjectsGrid from '@/components/ProjectsGrid';
import Footer from '@/components/Footer';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  url: string;
  image: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/resume');
        const data = await res.json();
        setProjects(data.projects || []);
      } catch (e) {
        console.error('Failed to fetch projects', e);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
          <p className="mt-2 text-lg text-gray-600">A selection of my recent work</p>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : projects.length > 0 ? (
          <ProjectsGrid projects={projects} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects available.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}