# RenderX — Premium Creative Agency

**[Live demo →](https://aayansheraz.github.io/renderx/)**

![RenderX screenshot](.github/screenshot.png)

A single-page landing site for a creative/design agency: a background-video hero with a gradient typewriter headline, a services showcase, a rotating client-logo marquee, a "why choose us" section, and a contact form — all on one smooth-scrolling page.

Built with **React 19 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion (via `motion/react`)**.

## Highlights

- Full-screen video hero with an animated gradient typewriter headline
- Service picker that opens WhatsApp with a prewritten inquiry for the selected service
- Infinite auto-rotating brand logo marquee (pauses on hover)
- Scroll-spy navbar that smooth-scrolls to each section
- Section reveals animated on scroll with Motion
- 100% static output — deploys to any static host

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build for hosting

```bash
npm run build
```

Deployed automatically to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Structure

```
src/
├── App.tsx                       # section layout + floating WhatsApp button
├── components/
│   ├── Navbar.tsx                # scroll-spy navigation
│   ├── BackgroundVideo.tsx
│   ├── HeroPage.tsx
│   ├── ServiceSelector.tsx       # service pills → WhatsApp inquiry
│   ├── ServicesPage.tsx
│   ├── BrandsMarquee.tsx         # rotating client logo strip
│   ├── WhyChooseUs.tsx
│   ├── ContactPage.tsx
│   ├── Footer.tsx
│   └── Logo.tsx
└── hooks/useTypewriter.ts
```

## Customising

- **Services & copy** → the components under `src/components/`.
- **Client logos** → `public/logos/` (referenced in `BrandsMarquee.tsx`).
- **Brand colors / theme** → Tailwind config and CSS variables in `src/index.css`.
