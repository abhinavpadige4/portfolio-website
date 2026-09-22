import { google } from 'googleapis';

const DRIVE_FILE_ID = process.env.DRIVE_RESUME_FILE_ID || '';

interface Resume {
  name: string;
  title: string;
  summary: string;
  skills: string[];
  experience: { company: string; role: string; startDate: string; endDate: string; description: string }[];
  projects: { name: string; description: string; technologies: string[]; url: string; image: string }[];
  contact: { email: string; phone: string; linkedin: string; github: string };
}

export async function fetchResume(): Promise<Resume> {
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REFRESH_TOKEN
  );
  auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
  const drive = google.drive({ version: 'v3', auth });
  const res = await drive.files.get({ fileId: DRIVE_FILE_ID, alt: 'media' });
  return JSON.parse(res.data as string) as Resume;
}
