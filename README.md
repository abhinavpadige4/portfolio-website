# Portfolio Website

Modern portfolio built with Next.js, Tailwind CSS, and TypeScript. Reads resume from Google Drive, parses it, and deploys to Vercel.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Vercel
- **Resume Source:** Google Drive API

## Project Structure

```
├── components/       # React components (hero, skills, experience, projects, contact)
├── pages/            # Next.js pages and API routes
│   └── api/resume.ts # Returns parsed resume JSON
├── public/           # Static assets (resume.pdf)
├── scripts/          # Utility scripts (fetchResume.ts)
├── styles/           # Global CSS
├── types/            # TypeScript interfaces
├── utils/            # Resume parser
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
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

# Create environment file
cp .env.example .env.local
```

### Environment Variables

Create `.env.local` with:

```
GOOGLE_DRIVE_API_KEY=your_api_key
GOOGLE_DRIVE_FILE_ID=your_resume_file_id
NEXT_PUBLIC_SITE_URL=http://localhost:3000
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

### Build for Production

```bash
npm run build
npm start
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run fetch-resume` | Download resume from Google Drive |

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
      "endDate": "2023-06",
      "description": "What you did"
    }
  ],
  "projects": [
    {
      "name": "Project",
      "description": "Description",
      "tech": ["React", "Node"],
      "url": "https://example.com",
      "github": "https://github.com/user/project"
    }
  ],
  "contact": {
    "email": "you@email.com",
    "phone": "+1234567890",
    "linkedin": "https://linkedin.com/in/you",
    "github": "https://github.com/you"
  }
}
```

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New Project**
3. Import your GitHub repository
4. Set environment variables:
   - `GOOGLE_DRIVE_API_KEY`
   - `GOOGLE_DRIVE_FILE_ID`
5. Click **Deploy**

### Option 3: GitHub Integration

1. Connect your GitHub repo to Vercel
2. Every push to `main` auto-deploys
3. Preview deployments for each PR

## Customization

### Update Resume

1. Upload new resume PDF to Google Drive
2. Update `GOOGLE_DRIVE_FILE_ID` in `.env.local`
3. Run `npm run fetch-resume`
4. Commit and push changes

### Change Design

Edit `tailwind.config.js` for colors and spacing:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#10B981'
      }
    }
  }
}
```

### Add Sections

1. Create component in `components/`
2. Import in `pages/index.tsx`
3. Add to layout

## Troubleshooting

### Resume not loading

- Check Google Drive API key is valid
- Verify file ID is correct
- Ensure file is shared publicly

### Build errors

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Vercel deployment fails

- Check environment variables are set
- Verify Node.js version is 18+
- Check build logs in Vercel dashboard

## License

MIT

## Author

Your Name
