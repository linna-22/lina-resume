# Oeu Lina — Personal Portfolio

A responsive React + Vite + Tailwind CSS portfolio based on the supplied cream/orange/charcoal visual reference and the information in Oeu Lina's CV.

## Requirements
- Node.js 18.18+ (Node 20+ recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Personalize
- Replace `public/images/profile.png` with another portrait. Keep the same filename, or update the image paths in `Hero.jsx` and `About.jsx`.
- Update personal details, experience, skills, education, certificates and reference information in `src/data/resumeData.js`.
- Replace `public/OEU-Lina-CV.pdf` with the latest CV, keeping the same filename so the Download CV links continue working.
- Update the page title and description in `index.html` if desired.

## Notes
- The portfolio uses the CV as its content source. The projects section describes documented work and responsibilities rather than inventing project names or links.
- Social profile links are not included because none were supplied in the CV.
- The reference CV lists English as “Good” and Khmer as “Native Speaker”; these labels are retained.
