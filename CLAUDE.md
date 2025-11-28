# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for "Sürdürülebilir ve Dayanıklı Ahşap Yapılar ile Afet Sonrası Yaşamın Yeniden İnşası Projesi" (Sustainable and Durable Wooden Structures for Post-Disaster Life Reconstruction Project), a TÜBİTAK 2237-A funded project at Manisa Celal Bayar University.

The website provides information about an educational program focused on teaching architecture students about sustainable wooden construction for post-disaster temporary housing.

## Development Commands

### Running the Website Locally

The website uses the Fetch API to load header and footer components dynamically, so it MUST be served through a web server (not opened directly via `file://` protocol).

**Using Python 3:**
```bash
python -m http.server
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer
```

Then navigate to `http://localhost:8000` in your browser.

## Architecture

### Site Structure

This is a **multi-page static website** with **no build process or dependencies**. It uses vanilla HTML, CSS, and JavaScript with Bootstrap 5 for styling.

**Page Files:**
- `index.html` - Homepage with project overview
- `hakkimizda.html` - About page
- `kurullar.html` - Committees
- `hedef-kitle.html` - Target audience
- `egitmenler.html` - Instructors
- `egitim-programi.html` - Education program schedule (detailed 5-day theoretical + practical training)
- `etkinlik-yeri.html` - Event location

**Shared Components:**
- `header.html` - Common header with navigation and TÜBİTAK/MCBU branding
- `footer.html` - Common footer with copyright and social links

**Assets:**
- `style.css` - All styling (uses CSS custom properties for theming)
- `script.js` - JavaScript for loading header/footer dynamically
- `images/` - Image assets
- `tree-house.jpg` - Banner background image
- `mcbu-logo.png`, `tubitak-logo.png` - Institutional logos

### Component Loading Pattern

Each HTML page includes placeholder divs that are populated at runtime:

```html
<div id="header-placeholder"></div>
<!-- Page content -->
<div id="footer-placeholder"></div>
<script src="script.js"></script>
```

The `script.js` file uses `fetch()` to load `header.html` and `footer.html` into these placeholders and sets the active navigation link based on the current page.

### Styling System

The project uses a centralized CSS custom properties system defined in `style.css`:

```css
:root {
    --primary-color: #658A6E;
    --text-color: #4a4a4a;
    --background-color: #f8f9fa;
    /* etc. */
}
```

All pages use Bootstrap 5 from CDN plus custom styles in `style.css`. Font families are Rubik (primary) and Dancing Script (decorative), loaded from Google Fonts.

### Navigation Structure

The navigation menu in `header.html` contains links to all main pages. The active page is highlighted by adding the `active` class to the corresponding `.nav-link` element via JavaScript.

## Key Features

1. **Bilingual Header**: Top header shows project title in both Turkish and English
2. **Responsive Design**: Uses Bootstrap's grid system for mobile responsiveness
3. **Schedule Table**: `egitim-programi.html` contains a detailed 5-day education schedule split into theoretical (3 days) and practical (2 days) sessions
4. **Dynamic Components**: Header and footer are loaded dynamically to maintain consistency across pages

## Important Notes

- All content is in Turkish
- The website is informational only (no forms, no backend)
- No JavaScript framework or build tools are used
- Bootstrap 5 and Font Awesome are loaded from CDN
- When editing navigation, update both `header.html` and ensure the active link logic in `script.js` matches page filenames
