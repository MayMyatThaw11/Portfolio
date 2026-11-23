# May Myat Thaw — portfolio

React JSX, Vite, Tailwind CSS v4, Motion for React, Lucide, and React Router. No TypeScript or external image/font services.

## Run locally

```powershell
cd D:\Profolio\may-portfolio
npm.cmd install
npm.cmd run dev
```

Open the URL printed by Vite. `npm.cmd` avoids PowerShell's restriction on the `npm.ps1` launcher. Build with `npm.cmd run build`; inspect the build with `npm.cmd run preview`.

## Edit content

- `src/data/profile.js`: profile, email, education, certifications, project descriptions, stacks, and optional repository/demo/social URLs.
- `src/sections/`: hero and contact sections.
- `src/pages/Home.jsx`: about, skills, experience, education, certifications, and project filtering.
- `src/styles/palette.css`: all five supplied color scales.
- `src/styles/index.css`: semantic theme tokens, layout, interactions, and responsive rules.
- `public/`: CV portrait, privacy-safe CV, favicon, and explicitly labeled abstract illustrations.

The CV is the source for education, skills, languages, and certifications. The user's brief supplies the headline and teaching description. AI/ML is presented as an area of learning. Project implementation details, results, dates, stacks, and external links were not supplied and are not invented. Set `github`/`demo` to valid HTTP(S) URLs to display those actions. Replace concept visuals with actual project screenshots when available.

The downloadable CV is a redacted copy: phone and residential address were removed from its content, not just covered visually. The original document was not modified.

## Deployment

The target repository is https://github.com/MayMyatThaw11/Portfolio.

Import this repository in Vercel with these settings:

- Framework: Vite
- Root directory: repository root (`.`)
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none required

`vercel.json` includes the SPA rewrite required for React Router project URLs and the application 404 page. After deployment, open a project URL directly and refresh it to verify routing. The configuration follows https://vercel.com/docs/frameworks/frontend/vite.

Alternatively, from the repository root run `npx vercel login` and `npx vercel --prod`. Deployment requires an authenticated Vercel account; this README does not claim the site is deployed.

## Verification

Production build passed. All seven project records have unique routes. Public CV text was checked for removal of private contact details, and its rendered page was visually inspected. Browser automation was unavailable on this machine; desktop/mobile appearance, keyboard behavior, theme persistence, and clipboard interaction still require a live browser check. Responsive breakpoints and reduced-motion support are implemented.
