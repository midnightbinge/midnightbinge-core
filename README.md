# Midnight Binge Core

Midnight Binge is a premium makhana snack brand crafted for real moments. This repository contains the core web application, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio**: [Howler.js](https://howlerjs.com/)
- **Language**: [TypeScript](https://www.typescript.org/)

## 🎨 Brand Identity

The application reflects a "Midnight" aesthetic—sophisticated, moody, yet comforting.

- **Primary Dark Theme**: *Mysterious Depths* (`#060b28`)
- **Primary Light Theme**: *Pale Lavender* (`#d6d2ff`) - **Default Theme**
- **Accent**: Royal Purple (`#6B5CE7`)
- **Typography**: 
  - Display: `Elsie` (Serif)
  - Body: `Poppins` (Sans-serif)
- **Iconography**: Official brand-consistent favicon integrated from the Midnight Logo Suite.

## 🛠 Technical Architecture

### Theme System
The project implements a custom dual-theme system (Dark/Light) using CSS variables and a `ThemeProvider`.
- **Default**: Light Mode (`.day-mode` class on `html`).
- **Persistence**: Theme preference is saved in `localStorage`.
- **CSS Variables**: Colors, spacing, and transitions are defined in `src/app/globals.css`.

### Global Animations & UI Features
- **Cinematic Entrance**: A timed loading sequence with a digital clock that flips to 12:00, triggering a "falling makhana rain" effect.
- **Hero Slider**: Auto-rotating slider featuring lifestyle "emotion" shots and high-fidelity product mockups.
- **Category Grid**: Interactive category-based exploration (Roasted, Raw, Cripso) with deep-linking to the Range.
- **Mood Selector**: Enhanced "What's your Midnight?" experience with hover-reveal product pairings.
- **Expandable Search**: Integrated navigation search bar with Framer Motion.
- **Brand Patterns**: Subtle, repeating brand patterns (`.brand-pattern-bg`) are integrated into section backgrounds across the site.

### Folder Structure
- `src/app`: Routes and page-level components.
- `src/components`: Reusable UI components.
  - `home/`: Homepage specific sections (Hero, MoodSelector, SpinWheel, etc.)
  - `range/`: Components related to the product catalog.
- `public/assets`: Brand assets, logos, and textures.
- `public/products`: Mapped packaging assets synced with brand artifacts.
- `public/fonts`: Custom local font files.

## 📦 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Recent Improvements
- **Phased Upgrades Complete**: 
  - **Phase 1**: Navigation overhaul, logo resizing, and custom hover animations.
  - **Phase 2**: Home page restructure with Hero Slider, Category Grid, and full Packaging mapping.
  - **Phase 3**: Cinematic loading sequence with "falling makhana" at midnight.
- Refined Light Mode with *Pale Lavender* palette and improved form styling.
- Integrated subtle brand pattern backgrounds across all major pages.
- Standardized `text-foreground` and `bg-background` usage for theme consistency.
- Updated support contact to `wecare@midnightbinge.com`.

---
&copy; 2026 Midnight Binge. All rights reserved.
