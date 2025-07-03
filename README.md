# Portfolio Website - Prabesh Dhakal

A professional bilingual portfolio website built with React, TypeScript, and Express.js featuring English/Japanese language toggle and resume viewing capabilities.

## Features

- **Bilingual Support**: Toggle between English and Japanese with localStorage persistence
- **Professional Design**: Clean, modern layout inspired by professional portfolio standards
- **Resume Page**: Dedicated page with PDF viewing and download functionality
- **Responsive Design**: Mobile-first approach that works on all devices
- **Contact Form**: Interactive contact form with validation
- **Skills Showcase**: Comprehensive display of business and technical skills
- **Work Experience**: Detailed work history and achievements

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui components
- Wouter for routing
- TanStack Query for state management

### Backend
- Express.js with TypeScript
- Node.js runtime
- Static file serving for PDF resume

## Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Project Structure

```
├── client/                 # Frontend application
│   ├── public/            # Static assets
│   │   └── resume.pdf     # Resume PDF file
│   └── src/
│       ├── components/    # React components
│       ├── hooks/         # Custom hooks
│       ├── lib/           # Utility functions
│       └── pages/         # Page components
├── server/                # Backend application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── vite.ts           # Vite integration
├── shared/               # Shared types and schemas
└── package.json          # Project dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Customization

### Adding Your Resume
1. Replace `client/public/resume.pdf` with your actual resume
2. Update the download filename in `client/src/pages/resume.tsx`

### Updating Profile Information
1. Edit translations in `client/src/lib/translations.ts`
2. Update profile image URL in components
3. Modify contact information in `client/src/components/contact-section.tsx`

### Language Support
The website supports English and Japanese. To add more languages:
1. Add translations to `client/src/lib/translations.ts`
2. Update the language type in `client/src/hooks/use-language.tsx`
3. Add language option to the toggle component

## Deployment

The project is ready for deployment on platforms like:
- Vercel
- Netlify
- Heroku
- Railway

Make sure to:
1. Set up environment variables if needed
2. Configure build commands: `npm run build`
3. Set the output directory to `dist`

## License

This project is licensed under the MIT License.