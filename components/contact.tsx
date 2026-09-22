import React, { useState } from 'react';
import { Resume } from '../types/resume';

interface ContactProps {
  contact: Resume['contact'];
}

export default function Contact({ contact }: ContactProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${contact.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
    window.open(mailto, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const socials = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: '✉' },
    { label: 'Phone', value: contact.phone, href: `tel:${contact.phone}`, icon: '📞' },
    { label: 'LinkedIn', value: contact.linkedin, href: contact.linkedin, icon: '💼' },
    { label: 'GitHub', value: contact.github, href: contact.github, icon: '🐙' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</h2>
        <p className="text-gray-500 mb-12">Have a question or opportunity? Let's connect.</p>
        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none" placeholder="Your message..." />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              {sent ? '✓ Sent!' : 'Send Message'}
            </button>
          </form>
          <div className="space-y-6">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <span className="text-2xl w-10 h-10 flex items-center justify-center bg-blue-50 rounded-full">{s.icon}</span>
                <div>
                  <p className="text-sm text-gray-500">{s.label}</p>
                  <p className="text-gray-900 font-medium text-sm break-all">{s.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
