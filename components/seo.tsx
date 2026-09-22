import React from 'react';
import Head from 'next/head';
import { Resume } from '../types/resume';

interface SEOProps {
  resume: Resume;
}

const SEO: React.FC<SEOProps> = ({ resume }) => {
  const { name, title, bio, contact, skills } = resume;
  const description = bio || `${name} - ${title}`;
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const ogImage = '/og-image.png';
  const keywords = skills.join(', ');

  return (
    <Head>
      <title>{`${name} | ${title}`}</title>
      <meta name="description" content={description} />
      <meta name="author" content={name} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#2563EB" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${name} | ${title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={`${name}'s Portfolio`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${name} | ${title}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={contact?.linkedin ? `@${contact.linkedin.split('/').pop()}` : ''} />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name,
          jobTitle: title,
          description: bio,
          email: contact?.email,
          telephone: contact?.phone,
          sameAs: [contact?.linkedin, contact?.github].filter(Boolean),
          knowsAbout: skills
        })}
      </script>
    </Head>
  );
};

export default SEO;
