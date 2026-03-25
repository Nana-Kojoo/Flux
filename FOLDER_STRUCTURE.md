# Flux — Next.js Project Folder Structure

```
flux/
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── images/
│       ├── projects/           # Project screenshots
│       │   ├── inventoryos.png
│       │   ├── trackit.png
│       │   └── ...
│       └── team/               # Founder photos
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout (Navbar + Footer)
│   │   ├── page.tsx            # Home / Landing page
│   │   ├── globals.css         # Global styles + CSS variables
│   │   │
│   │   ├── services/
│   │   │   └── page.tsx        # Services page
│   │   │
│   │   ├── projects/
│   │   │   └── page.tsx        # Portfolio / Projects page
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact / Request form page
│   │   │
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts    # POST /api/contact — form handler
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky nav with mobile menu
│   │   │   └── Footer.tsx      # Sitewide footer
│   │   │
│   │   ├── ui/                 # Reusable primitives
│   │   │   ├── Button.tsx      # Primary / Secondary / Ghost variants
│   │   │   ├── Label.tsx       # Section label (eyebrow text)
│   │   │   ├── Tag.tsx         # Category / tech pill tags
│   │   │   └── Divider.tsx
│   │   │
│   │   ├── home/               # Landing page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── WhatWeDo.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── ProjectsShowcase.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   └── CtaSection.tsx
│   │   │
│   │   ├── services/
│   │   │   ├── ServiceSection.tsx   # Reusable sidebar + grid layout
│   │   │   └── DetailCard.tsx       # Individual service detail card
│   │   │
│   │   ├── projects/
│   │   │   ├── FilterBar.tsx        # All / Web / Mobile / QA filter
│   │   │   └── ProjectCard.tsx      # Project grid card
│   │   │
│   │   ├── about/
│   │   │   ├── MissionSection.tsx
│   │   │   ├── StudentNetwork.tsx
│   │   │   ├── TeamGrid.tsx
│   │   │   └── VisionSection.tsx
│   │   │
│   │   └── contact/
│   │       ├── ContactForm.tsx      # Service request form
│   │       └── ContactInfo.tsx      # Email + hours + social links
│   │
│   ├── lib/
│   │   ├── db.ts               # Database client (Prisma or Drizzle)
│   │   ├── mailer.ts           # Email notification helper (Nodemailer / Resend)
│   │   └── validations.ts      # Zod schemas for form inputs
│   │
│   ├── hooks/
│   │   ├── useScrollAnimation.ts   # Intersection observer hook
│   │   └── useFilteredProjects.ts  # Project filter state logic
│   │
│   ├── data/
│   │   ├── projects.ts         # Static project data (title, tags, tech, desc)
│   │   ├── services.ts         # Service definitions
│   │   └── team.ts             # Founder bios
│   │
│   └── types/
│       ├── project.ts          # Project interface
│       ├── service.ts          # Service interface
│       └── contact.ts          # Contact form payload type
│
├── prisma/
│   ├── schema.prisma           # Database schema (ContactRequest model)
│   └── migrations/
│
├── .env.local                  # LOCAL env vars (git-ignored)
├── .env.example                # Template — commit this
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── package.json
└── README.md
```

---

## Key Files Explained

### `src/app/api/contact/route.ts`
Handles POST requests from the contact form.
- Validates input with Zod
- Saves the request to the database via Prisma
- Sends an email notification via Resend or Nodemailer
- Returns `{ success: true }` or a 422/500 error

### `src/lib/db.ts`
Singleton Prisma client — prevents connection pool exhaustion in dev.

### `prisma/schema.prisma` — ContactRequest model
```prisma
model ContactRequest {
  id          String   @id @default(cuid())
  name        String
  email       String
  company     String?
  service     String
  description String
  budget      String?
  timeline    String?
  createdAt   DateTime @default(now())
}
```

### `src/data/projects.ts`
Static typed array of projects — no DB needed for portfolio content.
Export it and map over it in `ProjectCard` components.

### `tailwind.config.ts`
Extend the theme with the brand color tokens (black, white, gray scale),
Syne (display) and Manrope (body) fonts, and custom animation keyframes.

---

## Environment Variables (`.env.example`)

```env
# Database
DATABASE_URL="postgresql://..."

# Email (Resend recommended)
RESEND_API_KEY="re_..."
NOTIFICATION_EMAIL="hello@Flux.com"

# Site
NEXT_PUBLIC_SITE_URL="https://Flux.com"
```

---

## Tech Stack Summary

| Layer        | Choice                          |
|--------------|---------------------------------|
| Framework    | Next.js 14 (App Router)         |
| Language     | TypeScript                      |
| Styling      | Tailwind CSS                    |
| Database     | PostgreSQL via Prisma ORM       |
| Email        | Resend (or Nodemailer + SMTP)   |
| Deployment   | Vercel                          |
| Fonts        | Syne (display) + Manrope (body) |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local

# 3. Push database schema
npx prisma db push

# 4. Run development server
npm run dev
```
