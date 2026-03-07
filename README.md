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
- **Iconography**: Official **White Curved TM** icon integrated as the primary site favicon.

## 🛠 Technical Architecture

### Theme System
The project implements a custom dual-theme system (Dark/Light) using CSS variables and a `ThemeProvider`.
- **Default**: Light Mode (`.day-mode` class on `html`).
- **Persistence**: Theme preference is saved in `localStorage`.
- **CSS Variables**: Colors, spacing, and transitions are defined in `src/app/globals.css`.

### Global Animations & UI Features
- **Cinematic Entrance**: A high-fidelity loading sequence featuring a digital clock, brand-compliant typography, and a hardware-accelerated "makhana rain" effect.
- **Hero Slider**: Auto-rotating slider featuring lifestyle "emotion" shots and high-fidelity product mockups.
- **Category Grid**: Interactive category-based exploration (Roasted, Raw, Cripso) with deep-linking to the Range.
- **Mood Selector**: Enhanced "What's your Midnight?" experience with hover-reveal product pairings.
- **Spin the Wheel**: Integrated reward system providing discount codes (MIDNIGHT10, CRUNCH15, etc.) located on the Range page.
- **Brand Patterns**: Subtle, repeating brand patterns (`.brand-pattern-bg`) are integrated into section backgrounds across the site.

### Folder Structure
- `src/app`: Routes and page-level components.
- `src/components`: Reusable UI components.
  - `home/`: Homepage specific sections (Hero, MoodSelector, SpinWheel, etc.)
  - `range/`: Components related to the product catalog.
- `public/assets`: Synchronized brand assets, patterns, and logos.
- `public/products`: Mapped packaging assets (FOP/BOP) synced with high-HDR brand artifacts.
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
  - **Navigation**: Cleaned up layout, removed Search/Sound for space, and increased logo prominence.
  - **Rewards**: Replaced Range survey with a **Spin the Wheel** discount system.
  - **Loading**: Optimized entrance animation for extreme snappiness and removed jitter.
  - **Hero**: Optimized CTA buttons for visibility across all themes.
- **Asset Sync**: Fully synchronized all public assets with the latest named brand identity guidelines.
- **Favicon**: Updated to the more aesthetic **White Curved TM** variant.
- Updated support contact to `wecare@midnightbinge.com` and added phone support at `+91 9217020447`.

---
&copy; 2026 Midnight Binge. All rights reserved.
