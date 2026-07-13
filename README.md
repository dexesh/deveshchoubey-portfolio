# Devesh Kumar Choubey — Engineering Control Center

A production-oriented developer portfolio built around verified backend engineering work and practical AI workflows. The flagship JobPortal case study combines resume claims with public-repository evidence and labels the provenance of important metrics.

## What is included

- Responsive single-page portfolio with accessible semantic structure
- Sticky navigation with active-section highlighting
- Keyboard command palette (`Ctrl/Cmd + K`)
- Detailed JobPortal workflow and architecture map
- Structured skills, experience, education, achievements, and contact data
- Mock portfolio assistant isolated behind `/api/assistant`
- Validated contact form that prepares a draft in the visitor's email app
- SEO metadata, JSON-LD, sitemap, and robots configuration
- Reduced-motion support and visible keyboard focus states
- Privacy-safe downloadable resume without the phone number

## Technology

- Next.js 16 and TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide icons
- Vercel-ready production build

## Local setup

Requires Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open the local address printed by the development server.

## Build

```bash
pnpm build
```

## Content customization

All portfolio copy, links, skills, projects, metrics, experience, and education are centralized in:

```text
data/portfolio.ts
```

Visual behavior and interactive sections live in `components/portfolio-shell.tsx`. The mock assistant's data adapter is in `lib/portfolio-assistant.ts`, while the API boundary is `app/api/assistant/route.ts`.

To connect a real RAG service later, keep the frontend response contract and replace the deterministic implementation behind `/api/assistant`.

## Contact behavior

The contact form validates name, email, and message in the browser, then opens a pre-filled email draft. It does not transmit or store form data on the site. Connect a transactional email provider if direct form delivery is required.

## Deployment

Import the GitHub repository into Vercel and keep the detected Next.js settings. The included `vercel.json` runs the production build with webpack. Vercel automatically supplies the production URL used by metadata, sitemap, and robots output. No database, object storage, secret, or external runtime credential is required for the current version.

## Placeholders and confirmations

- No custom domain is required; Vercel provides a free `vercel.app` address. If a custom domain is added later, set `NEXT_PUBLIC_SITE_URL` to its canonical HTTPS URL.
- Add repositories or verified demos for the Resume Tailoring Agent and Speech-to-Text project before enabling source/live links.
- Add certifications only after the issuer and credential details are supplied.
- The JobPortal 85% relevance figure is labeled resume-reported until an evaluation dataset or methodology is available.
- No public phone number or street address is included.

