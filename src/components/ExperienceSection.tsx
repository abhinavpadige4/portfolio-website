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
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
      <div className="relative border-l-2 border-blue-600 ml-4 space-y-12">
        {experience.map((exp, i) => (
          <div key={i} className="relative pl-8">
            <span className="absolute -left-3 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow" />
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                <span className="text-sm text-gray-500 font-mono">
                  {formatDate(exp.startDate)} – {exp.endDate === 'Present' ? 'Present' : formatDate(exp.endDate)}
                </span>
              </div>
              <p className="text-blue-600 font-medium mt-1">{exp.company}</p>
              <p className="text-gray-600 mt-3 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;