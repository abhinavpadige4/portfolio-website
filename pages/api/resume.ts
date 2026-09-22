import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { parseResume } from '../../utils/resumeParser';
import { Resume } from '../../types/resume';

const CACHE_PATH = path.join(process.cwd(), 'public', 'resume.json');
const PDF_PATH = path.join(process.cwd(), 'public', 'resume.pdf');

export default async function handler(req: NextApiRequest, res: NextApiResponse<Resume>) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    if (fs.existsSync(CACHE_PATH)) {
      const cached = fs.readFileSync(CACHE_PATH, 'utf-8');
      return res.status(200).json(JSON.parse(cached));
    }

    if (fs.existsSync(PDF_PATH)) {
      const pdfBuffer = fs.readFileSync(PDF_PATH);
      const resume = parseResume(pdfBuffer);
      fs.writeFileSync(CACHE_PATH, JSON.stringify(resume, null, 2));
      return res.status(200).json(resume);
    }

    return res.status(404).json({ error: 'Resume file not found' });
  } catch (err) {
    console.error('Resume API error:', err);
    return res.status(500).json({ error: 'Failed to parse resume' });
  }
}
