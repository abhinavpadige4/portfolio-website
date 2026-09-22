import React from 'react';
import Head from 'next/head';
import { Resume } from '../types/resume';

interface SEOProps {
  resume: Resume;
}

const SEO: React.FC<SEOProps> = ({ resume }) => {
  const title = `${resume.name} | ${resume.title}`;
  const description = resume.bio;
  const url = 'https://portfolio.vercel.app';
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEO;
