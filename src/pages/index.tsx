import { useState, useEffect } from 'react';
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

  useEffect(() => {
    fetchResume().then(setResume).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-gray-500">Loading...</div>;
  if (!resume) return <div className="min-h-screen flex items-center justify-center text-gray-500">Error loading resume</div>;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero name={resume.name} title={resume.title} summary={resume.summary} />
      <SkillsSection skills={resume.skills} />
      <ExperienceSection experience={resume.experience} />
      <ProjectsGrid projects={resume.projects} />
      <section id="contact" className="py-20 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <ContactForm />
      </section>
      <Footer contact={resume.contact} />
    </main>
  );
}