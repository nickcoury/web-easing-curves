# CSS Easing Curves: Product Requirements Document (PRD)

## 1. Introduction

### 1.1 Purpose
This Product Requirements Document (PRD) outlines the specifications for "css-easing-curves," a free web application designed to help developers, designers, and educators visualize, tweak, and compare CSS easing curves in an interactive manner. The app extends the functionality of similar tools like cubic-bezier.com by supporting multiple curve types (including linear() and spring() approximations), simultaneous comparisons, customizable animations, and shareable states via URL. The goal is to create a focused, elegant tool that prioritizes usability without overwhelming the user with unnecessary features.

As an experienced product manager and UX researcher, I've emphasized a minimalist design: clean interfaces, intuitive interactions, and mobile responsiveness to ensure it's accessible on any device. The app should feel like a precise instrument—simple to pick up, powerful for exploration, and delightful to use.

### 1.2 Scope
- **In Scope**: Core features for adding/comparing curves, parameter tweaking, animation previews, and URL state persistence.
- **Out of Scope**: User accounts, backend services, monetization, advanced export options (e.g., code snippets beyond basic copy-paste), or integration with external tools.
- **Assumptions**: Users are familiar with basic CSS concepts; no onboarding tutorials needed beyond tooltips for clarity.
- **Success Metrics**: High user retention through simplicity (e.g., low bounce rate), positive feedback on ease of comparison, and organic sharing via URLs.

### 1.3 Target Audience
- Primary: Front-end developers and UI/UX designers experimenting with CSS animations/transitions.
- Secondary: Educators teaching web animation principles; hobbyists building personal projects.
- User Needs: Quick visualization of how easing affects animations; easy comparison of multiple curves; shareable configurations for collaboration or debugging.

## 2. Technical Stack
- **Frontend Framework**: Vanilla JavaScript with HTML5 and CSS3 for core structure and animations.
- **UI Library**: Shadcn/UI components for reusable elements (e.g., buttons, sliders, dropdowns) to ensure consistency and accessibility.
- **Styling**: Tailwind CSS for rapid, responsive design with a focus on utility classes.
- **Charting**: Use a lightweight library like Chart.js or pure CSS/SVG for easing curve graphs to keep bundle size minimal.
- **Deployment**: Static site hosted on a platform like Vercel or GitHub Pages; no server-side logic required.
- **Browser Compatibility**: Modern browsers (Chrome, Firefox, Safari, Edge) with progressive enhancement for older ones.

## 3. Key Features

### 3.1 Curve Management
- Users can add, remove, and compare 0 or more easing curves.
- **Add Curve**: A prominent "Add Curve" button opens a modal or dropdown to select the curve type:
  - Default CSS named curves (e.g., ease, ease-in, ease-out, ease-in-out, linear).
  - Custom cubic-bezier() with parameters (x1, y1, x2, y2).
  - Custom linear() with points (e.g., linear(0, 0.5 50%, 1)).
  - Custom spring() approximated as linear() points (e.g., via a physics-based simulator; provide presets like spring(1, 100, 10, 0) translated to linear() equivalents).
- **Remove Curve**: Each curve card has a delete icon; confirm deletion if more than one curve exists.
- **Comparison Mode**: Curves are displayed in a grid (1-2 per row on mobile, 3-4 on desktop) for side-by-side viewing. Start with an empty state prompting to add a curve.

### 3.2 Curve Visualization and Tweaking
- **Chart per Curve**: Each curve has a compact SVG-based graph (e.g., 200x200px) showing the easing function as a line (bezier curve or linear segments).
  - For custom types (cubic-bezier, linear, spring): Interactive sliders or input fields to tweak parameters in real-time.
    - cubic-bezier: Four sliders (0-1 range) for control points; validate to prevent invalid beziers.
    - linear: Input for comma-separated points (e.g., "0, 0.2 20%, 0.8 80%, 1"); add/remove points via buttons.
    - spring: Sliders for mass, stiffness, damping, velocity; auto-translate to linear() approximation using a simple formula (e.g., based on common libraries like react-spring).
  - Default named curves are read-only but display their equivalent cubic-bezier/linear values as tooltips.
- **Graph Animation**: A small dot or marker animates along the curve graph, synchronized with the preview animation (see below). Duration matches global settings.

### 3.3 Animation Previews
- **Preview Element**: Each curve has an inline rounded rectangle (e.g., 100x50px div with border-radius) that demonstrates the easing.
- **Simultaneous Playback**: All previews animate together when played.
- **Animation Types**: Global dropdown to select the animation applied to all rectangles. Brainstormed list (focused on common, demonstrative CSS properties):
  - Slide: TranslateX from 0 to 100% width.
  - Scale: Transform scale from 1 to 2.
  - Rotate: Rotate from 0deg to 360deg.
  - Opacity: From 0 to 1 (fade in).
  - These were selected for their universality in CSS animations and ability to highlight easing differences (e.g., overshoot in springs, smoothness in beziers).
- **Controls**:
  - Play/Pause button: Triggers all animations once.
  - Autoplay toggle: Loops animations continuously.
  - Stop button: Resets all animations to start state.
  - Duration slider: 0.5s to 5s (default 2s).
  - Delay slider: 0s to 2s (default 0s).
  - All controls are global (top toolbar) for simplicity.

### 3.4 State Persistence
- **URL Hash**: Save all settings in a human-readable, compact hash param (e.g., #curves=ease|cubic(0.25,0.1,0.25,1)|linear(0,0.5%2050%,1)|spring(1,100,10,0)&anim=slide&dur=2&delay=0&auto=true).
  - Format: Key-value pairs separated by '&'; curves as pipe-separated list with type(params).
  - Update on every change using history.replaceState() to avoid cluttering history.
  - Restore on page load: Parse hash and apply state; fallback to defaults if invalid.
- **Defaults**: Empty curves, anim=slide, dur=2s, delay=0s, auto=false.

## 4. UX/UI Guidelines
- **Design Principles**: Minimalist and focused—use whitespace generously, neutral color palette (blues/grays for curves, accents for interactive elements). Prioritize touch-friendly elements (large tap targets) for mobile.
- **Layout**:
  - Header: App title, brief tagline ("Compare CSS Easing Curves"), add curve button.
  - Main: Scrollable grid of curve cards (each with chart, tweaks, preview rectangle).
  - Footer/Toolbar: Animation controls and type selector.
- **Responsiveness**: Use Tailwind's responsive utilities; stack vertically on mobile, grid on larger screens.
- **Interactions**:
  - Real-time updates: Changes to parameters/settings instantly reflect in charts and previews.
  - Tooltips: For all inputs/controls explaining CSS equivalents (e.g., "cubic-bezier(0.25, 0.1, 0.25, 1) is ease-in-out").
  - Accessibility: ARIA labels, keyboard navigation, high contrast; ensure animations can be paused for motion sensitivity.
- **Empty State**: Friendly illustration/message: "Add a curve to start comparing!"
- **Error Handling**: Graceful validation (e.g., "Invalid bezier points") with non-intrusive toasts.

## 5. Non-Functional Requirements
- **Performance**: Lightweight bundle (<500KB); animations should run smoothly at 60fps on mid-range devices.
- **Accessibility**: WCAG 2.1 AA compliant (e.g., alt text for charts, reduced motion support).
- **Security**: No user data stored; static site, so minimal risks.
- **Testing**: Unit tests for state parsing; manual UX testing on mobile/desktop.
- **Analytics**: Optional basic tracking (e.g., via Plausible) for usage insights, but privacy-focused.

## 6. Prioritization and Roadmap
- **MVP**: Core curve addition/tweaking, basic previews (slide only), URL state.
- **Post-MVP**: Add more animation types, spring approximations, export CSS code button per curve.
- **Dependencies**: None external; leverage browser APIs for animations (CSS @keyframes).

This PRD serves as a blueprint for AI-assisted coding. Iterations should maintain the focus on simplicity while ensuring the app feels polished and intuitive. If clarifications are needed, reference this document.