import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsGrid from '@/components/ProjectsGrid';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { fetchResume } from '@/lib/driveService';
import { Resume } from '@/lib/resumeTypes';

export default function Home() {
  const [resume, setResume] = useState<Resume | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadResume = async () => {
      try {
        const data = await fetchResume();
        setResume(data);
      } catch (e) {
        setError('Failed to load resume data');
      } finally {
        setLoading(false);
      }
    };
    loadResume();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error || !resume) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'Resume not found'}</p>
          <button onClick={() => window.location.reload()} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{resume.name} | Portfolio</title>
        <meta name="description" content={resume.summary} />
        <meta property="og:title" content={`${resume.name} | Portfolio`} />
        <meta property="og:description" content={resume.summary} />
        <meta property="og:type" content="website" />
      </Head>
      <Hero name={resume.name} title={resume.title} summary={resume.summary} />
      <SkillsSection skills={resume.skills} />
      <ExperienceSection experience={resume.experience} />
      <ProjectsGrid projects={resume.projects} />
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>
          <ContactForm />
        </div>
      </section>
      <Footer contact={resume.contact} />
    </div>
  );
}