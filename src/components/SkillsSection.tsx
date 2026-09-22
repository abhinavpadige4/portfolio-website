import React from 'react';
import { Resume } from '@/lib/resumeTypes';

interface Props {
  resume: Resume;
}

export default function SkillsSection({ resume }: Props) {
  return (
    <section id="skills" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {resume.skills.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}