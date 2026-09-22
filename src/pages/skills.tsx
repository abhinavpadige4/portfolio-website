import React from 'react';
import Layout from '@/components/Layout';
import SkillsSection from '@/components/SkillsSection';

const SkillsPage: React.FC = () => (
  <Layout>
    <main className="min-h-screen bg-white">
      <SkillsSection />
    </main>
  </Layout>
);

export default SkillsPage;
