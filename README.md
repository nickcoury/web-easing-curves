# css-easing-curves

[![Build Status](https://github.com/nickcoury/css-easing-curves/actions/workflows/deploy.yml/badge.svg)](https://github.com/nickcoury/css-easing-curves/actions)  
![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

A free, interactive web app for visualizing, tweaking, and comparing CSS easing curves. Inspired by tools like cubic-bezier.com, but with support for multiple curve types (named, cubic-bezier, linear, spring approximations), side-by-side comparisons, customizable animations, and shareable URLs.

Built with React, TypeScript, Tailwind CSS, and Shadcn/UI for a modern, responsive experience. Deployable as a static site.

## Features

- **Curve Management**: Add, remove, and compare multiple easing curves (default named, custom cubic-bezier, linear, or spring translated to linear).
- **Interactive Tweaking**: Adjust parameters via sliders/inputs for custom curves, with real-time updates.
- **Visualizations**: Per-curve graphs (SVG-based) and animated previews on rounded rectangles.
- **Animation Options**: Choose from slide, scale, rotate, opacity (more in enhancements); control play/autoplay, duration, and delay.
- **State Sharing**: All settings saved in URL hash for easy sharing and restoration.
- **Responsive Design**: Mobile-friendly with Tailwind; accessible (ARIA, reduced motion support).
- **MVP Focus**: Simple, focused UI without bloat.

## Installation

No installation required for users—just visit the live site (once deployed, e.g., on GitHub Pages).

For development:

1. Clone the repo:
   ```
   git clone https://github.com/nickcoury/css-easing-curves.git
   cd css-easing-curves
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

- Run locally: `npm run dev` (opens at http://localhost:5173 with hot module reloading).
- Build for production: `npm run build` (outputs to `dist/`).
- Preview build: `npm run preview`.
- Test: `npm run test` (using Vitest).

Deploy to GitHub Pages automatically via GitHub Actions on push to main.

### Example Workflow
1. Open the app.
2. Click "Add Curve" and select a type (e.g., cubic-bezier).
3. Tweak parameters and see real-time graph/preview updates.
4. Add more curves for comparison.
5. Adjust global animation settings.
6. Share the URL to preserve your setup.

## Development

Follow the [TODO.md](./TODO.md) for phased implementation.

- **Stack**: React + TypeScript, Vite, Tailwind, Shadcn/UI.
- **Linting/Formatting**: ESLint + Prettier (`npm run lint`).
- **Testing**: Vitest for unit/integration tests.
- **Best Practices**: Small commits, CI via GitHub Actions.

## Contributing

Contributions welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines (create if not present: fork, branch, PR).

- Report issues via GitHub Issues.
- For major changes, open an issue first.

## License

MIT License. See [LICENSE](./LICENSE) for details.

---

Built by Nick Coury as an AI coding exercise, 2025.