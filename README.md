# Claudaily

> An independent English-language blog dedicated exclusively to Claude (Anthropic's AI assistant).

Claudaily is built with **Astro 5 (static output)**, **Tailwind CSS**, **TypeScript**, and **Pagefind** client-side search. It features a warm neutral palette, full WCAG AA color contrast, self-hosted modern typography, zero-runtime client JavaScript for reading, and instant zero-config deployment to Vercel.

---

## 🚀 Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (`output: 'static'`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom warm palette tokens
- **Typography**: Self-hosted via Fontsource (`@fontsource/fraunces`, `@fontsource/inter`, `@fontsource/jetbrains-mono`)
- **Content Engine**: Astro Content Collections (`src/content.config.ts`) with strict Zod validation
- **Search**: [Pagefind](https://pagefind.app/) static search indexer (zero server dependencies)
- **Feeds & SEO**: `@astrojs/rss`, `@astrojs/sitemap`, Open Graph, Twitter Cards, Schema.org `Article` JSON-LD

---

## 🎨 Design System & Palette

- **Wordmark**: Bold serif "Clau" (charcoal `#1F1E1D` / `#EDEBE6`) + "daily" (terracotta `#B84A33` / `#E07A5F`).
- **Favicon**: Rounded dark square with custom serif "C" and top-right terracotta accent dot (`public/favicon.svg`).
- **Light Mode**:
  - Background: `#FAF9F5`
  - Text: `#1F1E1D` (15.8:1 contrast ratio against BG)
  - Muted Text: `#5F5C56` (6.3:1 contrast ratio)
  - Accent / Links: `#B84A33` (4.9:1 contrast ratio — strictly WCAG AA compliant)
- **Dark Mode**:
  - Background: `#1A1918`
  - Text: `#EDEBE6` (14.7:1 contrast ratio)
  - Muted Text: `#A8A49C` (7.0:1 contrast ratio)
  - Accent / Links: `#E07A5F` (5.95:1 contrast ratio)

---

## 🛠️ Local Development Setup

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm** or **pnpm**

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/claudaily.git
cd claudaily
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 4. Build for Production & Index Search
```bash
npm run build
```
This runs `astro build` to compile static HTML/assets to `dist/`, followed by `pagefind --site dist` to generate client-side search assets.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📝 Editorial Guidelines & Adding Content

All articles are Markdown (`.md`) or MDX (`.mdx`) files located in `src/content/blog/`. See [CONTRIBUTING.md](file:///c:/Users/bodou/claudaily/CONTRIBUTING.md) for full guidelines.

Starter templates are provided:
- **News**: `templates/news-template.md` (requires verified source links and dates)
- **Tutorials**: `templates/tutorial-template.md` (requires difficulty level, estimated time, prerequisites, tested code, and a Troubleshooting section)

---

## 🌐 Deploying to GitHub & Vercel

### Step 1: Push to GitHub

1. Create a new empty repository on [GitHub](https://github.com/new) named `claudaily` (public or private).
2. Run the following commands in your project root:

```bash
git init
git add .
git commit -m "feat: initial commit for Claudaily"
git branch -M main
git remote add origin https://github.com/<your-username>/claudaily.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Log in to your [Vercel Dashboard](https://vercel.com/).
2. Click **Add New...** > **Project**.
3. Import your `claudaily` GitHub repository.
4. Vercel automatically detects **Astro** as the framework preset:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**. Vercel will build the static output and deploy it to a global edge CDN with an instant URL (e.g. `https://claudaily.vercel.app`).
6. Future git pushes to `main` will automatically trigger zero-config atomic preview and production deployments.

---

## ⚖️ Legal Disclaimer

Claudaily is an independent publication. It is not affiliated with, maintained by, sponsored by, or endorsed by Anthropic, PBC. "Claude" is a registered trademark of Anthropic, PBC.
