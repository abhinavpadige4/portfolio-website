import React from 'react';
import Head from 'next/head';
import { Resume } from '../types/resume';

interface Props {
  children: React.ReactNode;
  resume: Resume;
}

export default function Layout({ children, resume }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Head>
        <title>{resume.name} | {resume.title}</title>
        <meta name="description" content={resume.bio} />
        <meta property="og:title" content={`${resume.name} | ${resume.title}`} />
        <meta property="og:description" content={resume.bio} />
      </Head>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="font-bold text-xl text-blue-600">{resume.name}</a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <a href={resume.contact.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">GitHub</a>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-gray-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {resume.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href={`mailto:${resume.contact.email}`} className="hover:text-blue-600">Email</a>
            <a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
            <a href={resume.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}