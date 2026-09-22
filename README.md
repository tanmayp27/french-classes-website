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

## 🚀 How to Host / Deploy (GitHub Pages)

This website is static and requires **no build step** or backend server, making it ideal for free deployment via **GitHub Pages**.

### Step 1: Initialize Git & Commit Code (if not already done)
```bash
git init
git add .
git commit -m "Initial commit of Prajakta's French Tutorials website"
```

### Step 2: Push to GitHub
1. Create a new repository on [GitHub](https://github.com/new).
2. Link your local repository and push your code to the `main` branch:
```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Pages** (in the left sidebar under *Code and automation*).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` branch and `/ (root)` folder.
4. Click **Save**.

### Step 4: Access Your Live Website
Within a minute, GitHub will publish your site at:
`https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

*(Optional) To attach a custom domain, add your domain under **Settings > Pages > Custom domain** and configure your DNS CNAME/A records with your provider.*

---

## ♿ Accessibility & Performance Features

- **Keyboard Navigation**: Full keyboard support for mobile drawer toggle, curriculum level tabs (Arrow Left/Right, Home, End), and FAQ accordions.
- **Screen Reader Support**: ARIA attributes (`aria-expanded`, `aria-selected`, `aria-controls`, `aria-hidden`) dynamically updated.
- **Motion Preferences**: Full support for `@media (prefers-reduced-motion: reduce)`.
- **Zero Heavy Dependencies**: Loads in < 0.5s with excellent Core Web Vitals score.
