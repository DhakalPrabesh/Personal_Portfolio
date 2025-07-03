# Portfolio Website

## Overview

This is a full-stack web application built as a personal portfolio website for a Business Analyst. The application features a modern React frontend with TypeScript, Express.js backend, and is designed to showcase professional experience, skills, and education with multilingual support (English/Japanese).

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with CSS custom properties for theming

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Driver**: Neon Database serverless driver
- **Development**: tsx for TypeScript execution in development

## Key Components

### Frontend Components
1. **UI Components**: Comprehensive set of reusable components using Radix UI primitives
2. **Page Components**: Home page with portfolio sections and resume viewer
3. **Language Support**: Context-based internationalization system
4. **Form Handling**: React Hook Form integration with validation
5. **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Backend Components
1. **API Routes**: RESTful endpoints for health checks and file serving
2. **Database Layer**: Drizzle ORM with PostgreSQL schema
3. **Storage Layer**: Abstracted storage interface with in-memory implementation
4. **Static File Serving**: Resume PDF and asset delivery

### Database Schema
- **Users Table**: Basic user management with username/password fields
- **Validation**: Zod schema validation for type safety
- **Migrations**: Drizzle Kit for database schema management

## Data Flow

1. **Client Requests**: Frontend makes HTTP requests to Express backend
2. **API Processing**: Express routes handle requests and interact with database
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: TanStack Query caches and manages server state
5. **UI Updates**: React components re-render based on state changes

## External Dependencies

### Frontend Dependencies
- **UI Libraries**: Radix UI components, Lucide icons, React Icons
- **Utilities**: clsx, class-variance-authority for styling
- **Development**: Vite plugins for Replit integration

### Backend Dependencies
- **Database**: @neondatabase/serverless, drizzle-orm, drizzle-zod
- **Validation**: zod for schema validation
- **Development**: tsx for TypeScript execution

### Build Dependencies
- **Bundling**: esbuild for server-side bundling
- **CSS**: PostCSS with Tailwind CSS and Autoprefixer
- **TypeScript**: Comprehensive type checking across frontend and backend

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx for TypeScript execution with auto-restart
- **Database**: Drizzle Kit for schema management and migrations

### Production
- **Frontend**: Vite build generates optimized static assets
- **Backend**: esbuild creates bundled Node.js application
- **Database**: PostgreSQL with connection pooling via Neon
- **Serving**: Express serves both API and static files

### Build Process
1. Frontend assets built with Vite and output to `dist/public`
2. Backend compiled with esbuild to `dist/index.js`
3. Database schema pushed using Drizzle Kit
4. Application started with Node.js in production mode

## Changelog

```
Changelog:
- July 03, 2025. Initial setup
- July 03, 2025. Completed bilingual portfolio website with English/Japanese toggle, resume page with PDF viewer, and professional design based on reference site
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```