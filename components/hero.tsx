import React from 'react';
import { Resume } from '../types/resume';

interface HeroProps {
  resume: Resume;
}

const Hero: React.FC<HeroProps> = ({ resume }) => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 px-4 py-20">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
        {resume.name}
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
        {resume.title}
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        {resume.bio}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#contact"
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
        >
          View Projects
        </a>
      </div>
    </div>
  </section>
);

export default Hero;