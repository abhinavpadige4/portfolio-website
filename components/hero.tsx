import React from 'react';
import { Resume } from '../types/resume';

interface Props { resume: Resume; }

export default function Hero({ resume }: Props) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4 py-16">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">{resume.name}</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">{resume.title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">{resume.bio}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg">Contact Me</a>
          <a href="#projects" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors">View Projects</a>
        </div>
      </div>
    </section>
  );
}