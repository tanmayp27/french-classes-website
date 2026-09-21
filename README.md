# Prajakta's French Tutorials — Modern French Tuition Website

A production-ready, ultra-lightweight, high-performance static single-page website for **Prajakta's French Tutorials** (Teacher: **Prajakta Pradhan**), specializing in Indian curriculum (5th to 12th standard) and DELF A1, A2, B1 exam preparation.

Built with **Semantic HTML5**, **Modern Vanilla CSS**, and **Vanilla JavaScript**. No heavy frameworks, zero runtime dependencies, fully accessible (WCAG 2.2 AA), and optimized for search engines.

---

## 📁 Project Structure

```text
/
├── index.html          # Main single-page HTML document (SEO metadata, ARIA landmarks, JSON-LD)
├── css/
│   └── style.css       # Custom design system (CSS Custom Properties, responsive grid, animations)
├── js/
│   └── script.js       # Minimal Vanilla JS (Scroll progress, active nav observer, tabs, FAQ accordion)
├── assets/
│   └── images/
│       └── teacher.jpg # Studio tutor portrait photo
├── favicon.svg         # Minimalist SVG favicon with French accent detail
├── robots.txt          # Search engine crawl directives
├── sitemap.xml         # XML sitemap
└── README.md           # Developer & customization documentation
```

---

## 🎨 Design System & Visuals

- **Palette**:
  - Background: Warm Ivory (`#F7F5F0`)
  - Primary Text: Deep Charcoal (`#171717`)
  - Primary Accent: Editorial French Red (`#C62828`)
  - Secondary Accent: Muted French Navy (`#263B73`)
  - Cards: Crisp White (`#FFFFFF`) with subtle warm borders (`#E5E1D8`)
- **Typography**:
  - Headings: *Cormorant Garamond* (Editorial, elegant, high-contrast serif)
  - Body: *Plus Jakarta Sans* (Clean, legible, modern sans-serif)

---

## 🛠️ How to Customize Content

1. **Changing Studio Name & Contact Info**:
   - Open `index.html` and search for `L'Atelier Français`. Replace with your tuition class name.
   - Update phone number (`+1 (555) 019-2834`), email (`bonjour@latelierfrancais.edu`), and location address in the `#contact` section and JSON-LD script at top of `<head>`.

2. **Updating Teacher Details**:
   - Replace `assets/images/teacher.jpg` with a photo of the instructor.
   - Edit the biography and credentials in section `04 — ABOUT THE TUTOR` (`#teacher`).

3. **Modifying Curriculum**:
   - Update the syllabus list items in section `02 — CURRICULUM` (`#curriculum`) under the respective `curriculum-card` elements for each grade level tab.

---

## 🚀 How to Host / Deploy

This website requires **no build step** or backend server. You can host it immediately on any static web server or CDN:

### Option A: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root directory.

### Option B: Netlify
1. Drag and drop the `French Website` folder into [app.netlify.com/drop](https://app.netlify.com/drop).

### Option C: GitHub Pages
1. Push the code to a GitHub repository.
2. Go to **Settings > Pages** and select `main` branch.

---

## ♿ Accessibility & Performance Features

- **Keyboard Navigation**: Full keyboard support for mobile drawer toggle, curriculum level tabs (Arrow Left/Right, Home, End), and FAQ accordions.
- **Screen Reader Support**: ARIA attributes (`aria-expanded`, `aria-selected`, `aria-controls`, `aria-hidden`) dynamically updated.
- **Motion Preferences**: Full support for `@media (prefers-reduced-motion: reduce)`.
- **Zero Heavy Dependencies**: Loads in < 0.5s with excellent Core Web Vitals score.
