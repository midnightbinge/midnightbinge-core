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
- **Accents**: Nobel Teal (`#045866`), Coral Candy (`#ffe4d9`), Clinker (`#381c07`)
- **Typography**: 
  - Display: `Elsie` (Serif)
  - Body: `Poppins` (Sans-serif)
  - Accent: `Borel` (Cursive)
- **Iconography**: Official **White Curved TM** icon integrated as the primary site favicon.

## 🛠 Technical Architecture

### Theme System
The project implements a custom dual-theme system (Dark/Light) using CSS variables and a `ThemeProvider`.
- **Default**: Light Mode (`.day-mode` class on `html`).
- **Persistence**: Theme preference is saved in `localStorage`.
- **CSS Variables**: Colors, spacing, and transitions are defined in `src/app/globals.css`.

### Global Animations & UI Features
- **Atmospheric Entrance**: A snappy, one-time-per-session sequence featuring a digital clock reveal and high-fidelity focus elements.
- **Hero Slider**: Auto-rotating slider featuring lifestyle "emotion" shots and high-fidelity product mockups.
- **Category Grid**: Interactive category-based exploration (Roasted, Raw, Cripso) with deep-linking to the Range.
- **Mood Selector**: Immersive "What's your Midnight?" experience with hover-reveal product pairings.
- **Brand Patterns**: Subtle, repeating brand patterns (`.brand-pattern-bg`) integrated into section backgrounds.

### Data Layer
- **Centralized Store**: All product data, flavors, and ingredients are managed in `src/data/products.ts`.
- **Image Optimization**: All brand and product assets utilize the `next/image` component for performance.

### Folder Structure
- `src/app`: Routes and page-level components.
- `src/components`: Reusable UI components.
  - `home/`: Homepage specific sections.
  - `range/`: Product catalog components.
- `src/data`: Centralized data files and TypeScript interfaces.
- `public/assets`: Synchronized brand patterns and logos.
- `public/products`: Mapped packaging assets (FOP/BOP).

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

---
&copy; 2026 Midnight Binge. All rights reserved.
