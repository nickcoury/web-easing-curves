# TODO.md: Development Plan for css-easing-curves Web App

This TODO file outlines a step-by-step technical plan to build the "css-easing-curves" web app based on the provided Product Requirements Document (PRD). The plan is structured into phases: an MVP phase for core functionality, followed by enhancement phases for additional features. Each task is designed as a checkbox for easy tracking and completion by an AI LLM or developer—mark as - [x] when done.

Architectural choices (resolving ambiguities):
- **Framework**: Use React (with TypeScript for maintainability) since Shadcn/UI is React-based. This keeps the app component-oriented, simple, and scalable without overcomplicating vanilla JS for interactive elements.
- **Build Tool**: Vite for fast development (HMR included), simple configuration, and static bundling. Outputs a deployable static site (HTML/JS/CSS bundle).
- **Styling**: Tailwind CSS integrated via Vite plugin.
- **UI Components**: Shadcn/UI (installed via CLI; components are copied into the project, minimizing runtime deps).
- **Charting**: Pure SVG for curve graphs to minimize dependencies (no external charting lib like Chart.js unless needed for complexity; implement bezier/linear paths manually).
- **Animations**: Native CSS animations (@keyframes) for previews, controlled via JS for syncing.
- **State Management**: React's useState/useEffect for simplicity; no Redux or Context unless scaling requires it.
- **URL State**: Use URLSearchParams for hash parsing (human-readable format as specified).
- **Testing**: Vitest (included with Vite) for unit/integration tests; focus on key components like curve parsing and animations.
- **Best Practices for Open Source**: Include README.md, LICENSE (MIT for simplicity), .gitignore, basic ESLint/Prettier for code quality, and GitHub Actions for CI/deployment to GitHub Pages. Favor simplicity: no complex monorepo, no server-side, flat folder structure.
- **Deployment**: GitHub Pages via GitHub Actions; app builds to a single-page app (SPA) with Vite's base config.
- **Minimize Dependencies**: Core: React, React-DOM, Tailwind, Shadcn/UI (component-based). Dev: Vite, Vitest, TypeScript, ESLint, Prettier.
- **Project Structure**:
  ```
  css-easing-curves/
  ├── src/
  │   ├── components/     # Shadcn/UI and custom components
  │   ├── utils/          # Helpers (e.g., curve parsers, SVG generators)
  │   ├── App.tsx         # Main app
  │   ├── main.tsx        # Entry
  │   └── index.css       # Tailwind base
  ├── public/             # Static assets
  ├── tests/              # Vitest tests
  ├── vite.config.ts      # Vite config
  ├── tsconfig.json
  ├── package.json
  ├── README.md
  ├── LICENSE
  ├── .gitignore
  ├── .eslintrc.json
  └── .prettierrc
  ```
- **Development Flow**: `npm run dev` for HMR; `npm run build` for static dist/; `npm run test` for tests.

## Phase 1: Project Scaffolding and Setup (MVP Foundation)
- [ ] Initialize the repository: Create a new Git repo named "css-easing-curves" on GitHub. Add a .gitignore for node_modules, dist, etc.
- [ ] Scaffold the project with Vite: Run `npm create vite@latest . -- --template react-ts` in the repo root. This sets up React + TypeScript + Vite.
- [ ] Install core dependencies:
  - Production: `npm install tailwindcss postcss autoprefixer @types/react @types/react-dom`
  - Dev: `npm install -D vite vitest eslint prettier eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser`
  - Initialize Tailwind: `npx tailwindcss init -p`
- [ ] Configure Tailwind: In `tailwind.config.js`, add content paths (`"./index.html", "./src/**/*.{js,ts,jsx,tsx}"`). Update `index.css` with `@tailwind base; @tailwind components; @tailwind utilities;`.
- [ ] Install Shadcn/UI: Run `npx shadcn-ui@latest init` and accept defaults (use Tailwind integration).
- [ ] Set up ESLint and Prettier: Create `.eslintrc.json` with React/TypeScript rules; `.prettierrc` with semi: true, singleQuote: true. Add lint scripts to package.json.
- [ ] Add Vitest config: In `vite.config.ts`, add `test: { environment: 'jsdom' }`. Install `@vitest/ui` for test UI if desired.
- [ ] Create basic App.tsx: Replace default with a simple header ("CSS Easing Curves") and empty main section. Ensure it runs with `npm run dev`.
- [ ] Add GitHub Actions for CI/Deployment: Create `.github/workflows/deploy.yml` to build on push to main and deploy to GitHub Pages (use `actions/deploy-pages`).
- [ ] Write initial README.md: Include project description, setup instructions (`npm install`, `npm run dev`), build/deploy steps, and license.
- [ ] Add LICENSE: MIT license file.
- [ ] Commit initial setup: Git commit with message "Initial project scaffold".

## Phase 2: MVP Core Features Implementation
Focus on core curve management, visualization, previews, and state persistence. Implement in small, testable steps.

### 2.1: Data Models and Utils
- [ ] Define types: In `src/types.ts`, create interfaces for Curve (type: 'named' | 'cubic' | 'linear' | 'spring'; params: object; id: string).
- [ ] Implement curve parsers/utils in `src/utils/curves.ts`:
  - Function to generate CSS timing-function string from Curve.
  - For spring: Simple approximation to linear() points (e.g., using a basic overshoot formula; hardcode 10-20 points).
  - SVG path generator for graph: Function that takes Curve and returns SVG <path> d attribute (e.g., for cubic: `M0,1 C${x1},${1-y1} ${x2},${1-y2} 1,0`).
- [ ] Write tests: In `tests/curves.test.ts`, test parsing and SVG generation for each curve type.

### 2.2: UI Components
- [ ] Install needed Shadcn components: `npx shadcn-ui@latest add button card slider input select tooltip dialog` (for modals).
- [ ] Create CurveCard component in `src/components/CurveCard.tsx`: Includes SVG graph, param tweaks (sliders/inputs based on type), preview rectangle div.
- [ ] Create AnimationControls component: Toolbar with play/pause/stop buttons, autoplay toggle, duration/delay sliders, animation type select (options: slide, scale, rotate, opacity).
- [ ] Create AddCurveButton: Dialog for selecting/adding curve type with initial params.
- [ ] Empty state component: Simple message with add button.

### 2.3: App Logic
- [ ] In App.tsx: Use useState for curves array, settings (animType, duration, delay, autoplay).
- [ ] Implement add/remove curves: Generate unique IDs (e.g., uuid or counter).
- [ ] Animation handling: Use useEffect to apply CSS animations to preview elements; sync play across all via a global state (e.g., isPlaying boolean).
  - Define @keyframes in a global CSS or inline style based on animType.
  - Use animation-timing-function from curve.
- [ ] Graph animation: Animate a <circle> along the SVG path using CSS or JS (e.g., animateMotion).
- [ ] Real-time tweaks: On param change, update curve and re-render graph/preview.

### 2.4: State Persistence
- [ ] Implement URL hash utils in `src/utils/url.ts`: Serialize curves/settings to hash (e.g., #curves=named(ease)|cubic(0.25,0.1,0.25,1)&anim=slide&dur=2&delay=0&auto=false).
- [ ] Use useEffect to parse hash on load and update on changes with history.replaceState.
- [ ] Handle invalid hash gracefully (fallback to defaults).

### 2.5: Responsiveness and Polish
- [ ] Apply Tailwind responsive classes: Grid layout adjusts columns based on screen size.
- [ ] Add tooltips (Shadcn) for params and curves.
- [ ] Accessibility: Add ARIA labels to interactive elements; respect prefers-reduced-motion.
- [ ] Write integration tests: Test adding a curve, tweaking params, URL updates.

### 2.6: MVP Testing and Build
- [ ] Run all tests: Ensure 80%+ coverage for utils and components.
- [ ] Build and preview: `npm run build && npm run preview`. Verify static output works.
- [ ] Commit MVP: "Implement MVP features".

## Phase 3: Enhancement Phases
Build on MVP; each sub-phase can be a separate branch/PR for modularity.

### 3.1: Additional Animation Types and Exports (Post-MVP)
- [ ] Add more anim types: e.g., bounce (translateY), color change (background-color).
- [ ] Add export button per curve: Copy CSS timing-function to clipboard.
- [ ] Tests and commit: "Add post-MVP animations and exports".

### 3.2: Performance and Advanced Tweaks
- [ ] Optimize animations for 60fps: Use requestAnimationFrame if needed for syncing.
- [ ] Add spring physics simulator: Improve approximation with a small JS function (no deps).
- [ ] Tests and commit: "Enhance performance and spring handling".

### 3.3: Open Source Polish
- [ ] Add contributing guidelines to README.
- [ ] Set up GitHub Issues templates.
- [ ] Add badges to README (e.g., build status).
- [ ] Final deployment: Push to main, verify GitHub Pages live site.
- [ ] Commit: "Final polish and deployment setup".

Track progress by checking off tasks. If issues arise, reference PRD or add subtasks. Aim for small commits.