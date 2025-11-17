# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Studism is a React-based marketing website showcasing educational technology applications. The site is built with Vite, React 19, React Router, and Tailwind CSS 4, featuring a modern component architecture using shadcn/ui components.

## Development Commands

### Build & Development
- `pnpm dev` - Start development server with Vite
- `pnpm build` - Build production bundle
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint on codebase

### Package Manager
This project uses **pnpm** (version 10.4.1+) as specified in package.json. Always use `pnpm` instead of npm or yarn.

## Development Workflow

### Git Commit Policy
**IMPORTANT**: When making any code changes, always commit and push to GitHub immediately after completing the changes.

Workflow steps:
1. Make code changes
2. Run `git add <changed-files>`
3. Create commit with descriptive message in Japanese
4. Run `git push` to push to remote repository

All commits should include:
- Descriptive commit message in Japanese
- `🤖 Generated with [Claude Code](https://claude.com/claude-code)`
- `Co-Authored-By: Claude <noreply@anthropic.com>`

Example commit flow:
```bash
git add src/components/HomePage.jsx
git commit -m "コンポーネントの変更内容

詳細な説明

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
git push
```

## Architecture

### Routing Structure
The application uses React Router with the following route hierarchy:

- `/` - HomePage (main landing page)
- `/contact` - GeneralContact (site-wide contact form)
- `/privacy` - GeneralPrivacy (site-wide privacy policy)
- `/app/:appSlug` - AppDetail (individual app showcase pages)
- `/app/:appSlug/privacy` - PrivacyPolicy (app-specific privacy policy)
- `/app/:appSlug/contact` - Contact (app-specific contact form)

**App slugs**: Currently supports `sakuraenglish` and `timelyze`. App data is hardcoded in AppDetail.jsx and HomePage.jsx components.

### Component Organization

**Page Components** (`src/components/`)
- `HomePage.jsx` - Main landing page with hero section, app cards, and news feed
- `AppDetail.jsx` - Dynamic app detail pages with features, screenshots, and store links
- `Contact.jsx` - App-specific contact form
- `GeneralContact.jsx` - Site-wide contact form
- `PrivacyPolicy.jsx` - App-specific privacy policy
- `GeneralPrivacy.jsx` - Site-wide privacy policy

**UI Components** (`src/components/ui/`)
- Full shadcn/ui component library (Radix UI primitives)
- All UI components are .jsx files following shadcn conventions
- Imported using `@/components/ui/*` alias

### Styling System

Uses **Tailwind CSS v4** with custom theme configuration:

- **CSS-in-JS approach**: Theme defined in `src/App.css` using `@theme inline`
- **OKLCH color space**: All colors use modern OKLCH format for better color consistency
- **Dark mode**: Implemented via `.dark` class with full theme variable overrides
- **Custom CSS variables**: Extensive variable system for colors, borders, spacing defined in `:root` and `.dark`
- **Animation library**: `tw-animate-css` package integrated for animations

**Important styling notes**:
- Use Tailwind utility classes (e.g., `bg-background`, `text-foreground`)
- Respect the established color token system (--primary, --accent, etc.)
- Smooth scroll behavior configured with prefers-reduced-motion support

### Path Aliases

- `@/*` maps to `src/*` (configured in vite.config.js)
- Example: `import { Button } from '@/components/ui/button'`

### Static Assets

- Images stored in `public/images/`
- Key assets: app icons (sakuraenglish.png, timelyze.png), studism-logo.png, hero-animation.webm
- Reference as `/images/filename.png` in JSX

## Key Technical Patterns

### Page Navigation
All page components use `useEffect` to scroll to top on mount:
```javascript
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
```

### ESLint Configuration
- Uses flat config format (eslint.config.js)
- React Hooks plugin with recommended rules
- Unused vars with pattern exception: `varsIgnorePattern: '^[A-Z_]'`
- React Refresh warnings for non-component exports

### Component Utilities
- `src/lib/utils.js` provides `cn()` function for merging Tailwind classes using clsx + tailwind-merge
- Always use `cn()` for conditional className composition

## Adding New Apps

When adding a new app to the platform:

1. Add app data object to `appData` in `src/components/AppDetail.jsx`
2. Add corresponding app card to `apps` array in `src/components/HomePage.jsx`
3. Add app icon image to `public/images/`
4. Ensure the slug matches between both files and the route parameter

App data structure requires:
- name, icon, category, description
- features array with icon, title, description objects
- screenshots array with title and description
- appStoreUrl and playStoreUrl

## Deployment

The site is configured for deployment with `base: '/'` in vite.config.js (suitable for custom domains or GitHub Pages with custom domain). For GitHub Pages without custom domain, change to `base: '/repository-name/'`.
