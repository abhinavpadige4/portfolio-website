import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';

interface Skill {
  name: string;
  level: number;
  category: string;
}

export default function SkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch('/api/skills');
        const data = await res.json();
        setSkills(data.skills || []);
      } catch (e) {
        console.error('Failed to fetch skills', e);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills</h1>
          <p className="text-lg text-gray-600">Technologies and tools I work with</p>
        </div>
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <SkillsSection skills={skills} />
        )}
      </main>
      <Footer />
    </div>
  );
}