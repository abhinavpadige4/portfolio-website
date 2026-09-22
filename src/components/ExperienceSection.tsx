import React from 'react';
import { Experience } from '@/lib/resumeTypes';

interface Props {
  experience: Experience[];
}

const formatDate = (iso: string) => {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const ExperienceSection: React.FC<Props> = ({ experience }) => {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Experience</h2>
      <div className="relative border-l border-gray-200 ml-4">
        {experience.map((exp, i) => (
          <div key={i} className="mb-10 ml-8 relative">
            <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow" />
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                <span className="text-sm font-mono text-gray-500">
                  {formatDate(exp.startDate)} – {exp.endDate === 'Present' ? 'Present' : formatDate(exp.endDate)}
                </span>
              </div>
              <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
              <p className="text-gray-600 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;