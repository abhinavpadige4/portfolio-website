import React from 'react';
import { Resume } from '@/lib/resumeTypes';

interface SkillsSectionProps {
  resume: Resume;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ resume }) => (
  <section id="skills" className="py-16 px-4 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills</h2>
    <div className="flex flex-wrap justify-center gap-3">
      {resume.skills.map((skill) => (
        <span key={skill} className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default SkillsSection;
