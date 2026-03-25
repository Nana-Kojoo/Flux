# Flux

Minimal Next.js scaffold generated from the folder structure spec in `FOLDER_STRUCTURE.md`.

## Included

- App Router pages for home, services, projects, about, and contact
- Shared UI, layout, and feature components
- Typed static data for services, projects, and team members
- Contact API route with validation, optional DB persistence, and email helper
- Prisma schema for `ContactRequest`

## Getting Started

```bash
npm install
cp .env.example .env.local
npx prisma db push
npm run dev
```

## Notes

- `index.html` was left in place as existing source material.
- Image folders are scaffolded with placeholder files so you can add real assets later.
