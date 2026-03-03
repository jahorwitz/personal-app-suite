# Personal Site — withjosh.net

Personal consulting landing page for **Josh Horwitz** — Fractional Backend Architect & Full-Stack Engineer.

**Live site:** [withjosh.net](https://withjosh.net)

## Tech Stack

| Layer   | Technology                                                          |
| ------- | ------------------------------------------------------------------- |
| Build   | [Vite](https://vitejs.dev/)                                         |
| UI      | [React 18](https://react.dev/) + TypeScript                         |
| Styling | [Tailwind CSS](https://tailwindcss.com/)                            |
| Routing | [react-router-dom](https://reactrouter.com/)                        |
| SEO     | [react-helmet-async](https://github.com/staylor/react-helmet-async) |

## Features

- **Single-page scrolling landing** with smooth anchor navigation
- **Contact page** with a validated form powered by [Formspree](https://formspree.io/)
- **Internationalization (i18n)** — English, Spanish, Portuguese, and French via URL-prefix routing (`/es`, `/pt`, `/fr`)
- **SEO** — OpenGraph tags, Twitter cards, and `hreflang` alternate links
- **Google Analytics (GA4)** integration
- **Mobile-first responsive design**
- **Accessibility** — semantic HTML, keyboard navigation, and focus management

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- [pnpm](https://pnpm.io/) ≥ 8

### Install & Run

```bash
# From the monorepo root
pnpm install

# Start the dev server
cd apps/personal-site
pnpm dev
# — or from the monorepo root —
pnpm --filter personal-site dev
```

The dev server runs at **http://localhost:5173/**.

## Build for Production

```bash
cd apps/personal-site
pnpm build
# Output: dist/
```

## Deploy

### Vercel

1. Connect the repo in the Vercel dashboard.
2. Set **Root Directory** to `apps/personal-site`.
3. Set **Build Command** to `pnpm build`.
4. Set **Output Directory** to `dist`.

### Netlify

1. Connect the repo in the Netlify dashboard.
2. Set **Base directory** to `apps/personal-site`.
3. Set **Build command** to `pnpm build`.
4. Set **Publish directory** to `dist`.
5. Add a `public/_redirects` file for SPA routing:
   ```
   /* /index.html 200
   ```

### AWS S3 + CloudFront

Infrastructure is already defined in `apps/infra/` using AWS CDK. See the [`apps/infra/README.md`](../infra/README.md) for deployment instructions.

## Editing Content

All site copy lives in TypeScript content files:

| File                       | Purpose                         |
| -------------------------- | ------------------------------- |
| `src/config/content/en.ts` | English (default)               |
| `src/config/content/es.ts` | Spanish                         |
| `src/config/content/pt.ts` | Portuguese                      |
| `src/config/content/fr.ts` | French                          |
| `src/config/types.ts`      | Shared content type definitions |

Edit any `.ts` content file to update text — changes are reflected immediately in dev mode.

### Adding a New Language

1. Create a new content file in `src/config/content/` (e.g., `de.ts`).
2. Add the locale to `supportedLocales` in `src/config/content/index.ts`.
3. Add the new locale to the `Locale` type in `src/config/types.ts`.

## Configuration — Placeholders to Replace

Before deploying to production, replace these placeholder values:

| Placeholder                       | Location                               | Replace With                                                  |
| --------------------------------- | -------------------------------------- | ------------------------------------------------------------- |
| `G-XXXXXXXXXX`                    | `index.html`                           | Your GA4 Measurement ID                                       |
| `FORMSPREE_ENDPOINT`              | `src/components/ContactForm.tsx`       | Your Formspree form ID (e.g., `https://formspree.io/f/xxxxx`) |
| `https://calendly.com/joshs-room` | Content files (`en.ts`, `es.ts`, etc.) | Your actual Calendly scheduling URL                           |
| LinkedIn URL                      | Content files                          | Your LinkedIn profile URL (update if needed)                  |
| OG Image                          | `ogImage` in `content.site`            | Path or URL to an actual Open Graph image                     |

## Project Structure

```
src/
├── components/    # Shared UI components (Button, Card, ContactForm, etc.)
├── config/        # Site content & types
│   └── content/   # Translatable copy (en.ts, es.ts, pt.ts, fr.ts)
├── hooks/         # Custom hooks (useActiveSection, usePageView)
├── i18n/          # Language provider & hooks
├── layout/        # Header, Footer, Layout wrapper
├── pages/         # HomePage, ContactPage
├── sections/      # Landing page sections (Hero, Services, etc.)
├── App.tsx        # Router setup
└── main.tsx       # Entry point
```
