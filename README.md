# AniShelf

AniShelf is a lightweight Next.js 14 app showcasing anime cards with smooth Framer Motion animations, infinite scroll/load-more, and modern server actions. It's built with TypeScript and Tailwind CSS and follows the Next.js App Router conventions.

## Features

- Server Actions (Next.js 14)
- Infinite scroll / Load more
- Framer Motion animations for UI polish
- TypeScript + Tailwind CSS
- Small, component-driven structure for easy extension

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Quick Start

Requirements: Node.js 18+ and npm or yarn.

1. Install dependencies

```bash
npm install
# or
yarn
```

2. Run the development server

```bash
npm run dev
# or
yarn dev
```

3. Build for production

```bash
npm run build
npm start
```

## Project Structure (key files)

- [app/page.tsx](app/page.tsx) — Home page and data fetching
- [app/layout.tsx](app/layout.tsx) — Root layout and global styles
- [app/\_data.ts](app/_data.ts) — Sample data or data helpers
- [app/action.tsx](app/action.tsx) — Server actions used by the app
- [components/AnimeCard.tsx](components/AnimeCard.tsx) — Card component for each anime
- [components/Hero.tsx](components/Hero.tsx) — Top hero section
- [components/LoadMore.tsx](components/LoadMore.tsx) — Load more / infinite scroll UI
- [components/MotionDiv.tsx](components/MotionDiv.tsx) — Motion wrapper utility
- [components/Footer.tsx](components/Footer.tsx) — Footer component
- [app/globals.css](app/globals.css) — Tailwind and global styles

## Usage Notes

- This project uses the App Router and server actions — review `app/action.tsx` for examples.
- Tailwind is configured in `tailwind.config.ts` and styles are loaded from `app/globals.css`.

## How to push to GitHub

If this repo is not yet on GitHub, run:

```bash
git init
git add .
git commit -m "chore: add README"
git branch -M main
git remote add origin <your-git-remote-url>
git push -u origin main
```

If the repository already exists remotely, just commit and push:

```bash
git add README.md
git commit -m "docs: update README"
git push
```

## Contributing

Contributions are welcome — open an issue or submit a PR with a clear description of changes.

## License

Add a license file if you plan to open-source this project (for example, `LICENSE` with MIT).
