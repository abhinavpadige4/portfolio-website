import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { parseResume } from '../../utils/resumeParser';
import { Resume } from '../../types/resume';

const cachePath = path.join(process.cwd(), 'public', 'resume.json');

export default async function handler(req: NextApiRequest, res: NextApiResponse<Resume>) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });
  try {
    if (fs.existsSync(cachePath)) {
      const data = JSON.parse(fs.readFileSync(cachePath, 'utf-8')) as Resume;
      return res.status(200).json(data);
    }
    const pdfPath = path.join(process.cwd(), 'public', 'resume.pdf');
    if (!fs.existsSync(pdfPath)) return res.status(404).json({ error: 'Resume not found' });
    const buffer = fs.readFileSync(pdfPath);
    const data = parseResume(buffer);
    fs.writeFileSync(cachePath, JSON.stringify(data, null, 2));
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: 'Failed to process resume' });
  }
}
