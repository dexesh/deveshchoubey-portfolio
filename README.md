# Devesh Choubey — Portfolio

A responsive Next.js portfolio with selected GitHub projects, experience, education, résumé, and direct contact links.

## Development

Use Node.js 22 or newer and pnpm. Install with `pnpm install --frozen-lockfile`, then run `pnpm dev`. Run `pnpm build` for a production build and `pnpm start` to serve it.

## Content

- `components/portfolio-shell.tsx`: page content and project descriptions.
- `data/portfolio.ts`: identity and profile links.
- `app/globals.css`: responsive styling.
- `public/Devesh_Choubey_Public_Resume.pdf`: existing résumé, retained unchanged.

The project retains the original package versions and lockfile. It is ready for the existing Vercel Next.js workflow. No environment variables are required. The local node_modules junction is only a development convenience and must not be committed or deployed.

## Project research — 11 September 2026

Descriptions were checked against these public repositories:

- https://github.com/dexesh/JobPortal/blob/main/README.md
- https://github.com/dexesh/EcommerceApplication/tree/main/services/auth-service
- https://github.com/dexesh/BlogApp/blob/master/README.md

EcommerceApplication is shown as in development: the repository contains registration, domain policies, persistence adapters, and tests, while authentication and refresh-token service files are unfinished. No completed checkout, payment, or token-authentication system is claimed.

## Redesign

Removed the mock assistant and endpoint, fake terminal, command palette, repeated metrics, provenance labels, and email-draft form. Contact is now a direct email link. Detailed JobPortal architecture is available through an accessible disclosure.

The original social preview image is retained. Production is hosted on Vercel at https://deveshchoubey-portfolio.vercel.app/.

