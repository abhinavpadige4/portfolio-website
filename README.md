# Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and TypeScript. Automatically fetches resume data from Google Drive, parses it, and renders a professional portfolio with hero, skills, experience, projects, and contact sections.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel
- **Data Source:** Google Drive API (PDF resume)

## Features

- Hero section with name, title, bio, and CTA
- Skills section with tag display
- Experience timeline
- Projects showcase with links
- Contact form and social links
- SEO-optimized meta tags
- Responsive design
- API endpoint for resume data

## Project Structure

```
├── components/       # React components
│   ├── layout.tsx
│   ├── seo.tsx
│   ├── hero.tsx
│   ├── skills.tsx
│   ├── experience.tsx
│   ├── projects.tsx
│   └── contact.tsx
├── pages/            # Next.js pages
│   ├── _app.tsx
│   ├── index.tsx
│   └── api/resume.ts
├── scripts/          # Utility scripts
│   └── fetchResume.ts
├── utils/            # Helper functions
│   └── resumeParser.ts
├── types/            # TypeScript interfaces
│   └── resume.ts
├── styles/           # Global styles
│   └── globals.css
├── public/           # Static assets
│   └── resume.pdf
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── .gitignore
```

## Setup

### Prerequisites

- Node.js 18+
- npm 9+
- Google Drive API credentials
- GitHub account
- Vercel account

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
GOOGLE_DRIVE_FILE_ID=your_resume_file_id
GOOGLE_DRIVE_API_KEY=your_api_key
GOOGLE_DRIVE_CLIENT_ID=your_client_id
GOOGLE_DRIVE_CLIENT_SECRET=your_client_secret
```

### Fetch Resume from Google Drive

```bash
npm run fetch-resume
```

This downloads the resume PDF from Google Drive to `public/resume.pdf`.

### Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run fetch-resume` | Download resume from Google Drive |

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Option 2: Vercel Dashboard

1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Set environment variables:
   - `GOOGLE_DRIVE_FILE_ID`
   - `GOOGLE_DRIVE_API_KEY`
   - `GOOGLE_DRIVE_CLIENT_ID`
   - `GOOGLE_DRIVE_CLIENT_SECRET`
5. Click "Deploy"

### GitHub Integration

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```
2. Connect GitHub repo to Vercel
3. Enable auto-deploy on push

## API Endpoints

### GET /api/resume

Returns parsed resume data as JSON:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "bio": "Your bio",
  "skills": ["Skill 1", "Skill 2"],
  "experience": [
    {
      "company": "Company",
      "role": "Role",
      "startDate": "2020-01",
      "endDate": "2023-12",
      "description": "Description"
    }
  ],
  "projects": [
    {
      "name": "Project",
      "description": "Description",
      "tech": ["Tech 1"],
      "url": "https://example.com",
      "github": "https://github.com/user/project"
    }
  ],
  "contact": {
    "email": "email@example.com",
    "phone": "+1234567890",
    "linkedin": "https://linkedin.com/in/username",
    "github": "https://github.com/username"
  }
}
```

## Design Tokens

| Token | Value |
|-------|-------|
| Primary Color | #2563EB |
| Secondary Color | #10B981 |
| Background | #F9FAFB |
| Text | #111827 |
| Muted | #6B7280 |
| Font | Inter |

## License

MIT
