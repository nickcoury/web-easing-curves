# web-easing-curves
Web app for creating and tuning web easing curves.
# AGENTS.md - Project Context for AI Code Agent

## Project Overview
**Web Easing Curves** - A modern, free, open-source tool for creating and fine-tuning CSS easing curves. Built as a static frontend application to replace/improve upon cubic-bezier.com with enhanced features and better user experience.

## Core Vision
- **Always free and open source** - No monetization, community-focused
- **Multi-curve workspace** - Handle multiple curves simultaneously 
- **Modern CSS output** - cubic-bezier(), linear(), and @keyframes export
- **Spring physics support** - Beyond just cubic bezier curves
- **Static site architecture** - No backend, state management via URL
- **GitHub-based community** - Curve sharing through GitHub repos

## Target Users
- Frontend developers creating smooth animations
- UI/UX designers working on micro-interactions
- Teams standardizing motion design systems
- Developers learning easing curve principles

## Key Differentiators from cubic-bezier.com
1. **Multiple curves** - Work with unlimited curves in one workspace
2. **Spring physics** - Generate curves from physics parameters
3. **Modern CSS output** - linear() function and keyframe generation
4. **URL state sharing** - Shareable links with full workspace state
5. **Educational focus** - Curve analysis and best practices
6. **Community library** - GitHub-based curve collections
7. **Mobile-optimized** - Touch-friendly interface

## Tech Stack
- **Build Tool**: Vite (vanilla JavaScript template)
- **Core Libraries**:
  - `bezier-easing` - Curve calculations and sampling
  - `canvas-sketch-util/math` - Math utilities (clamp, lerp)
  - `file-saver` - File download functionality
  - `lz-string` - URL state compression
- **Deployment**: GitHub Pages with GitHub Actions
- **No Framework**: Pure vanilla JS for simplicity and performance

## Architecture Principles
- **Static site** - Everything runs client-side
- **URL as database** - All state encoded in URL hash
- **Canvas-based editor** - Smooth, responsive curve manipulation
- **Component-based structure** - Modular JS without framework overhead
- **Performance first** - 60fps animations, efficient rendering
- **Mobile responsive** - Touch-optimized controls

## Core Features (MVP)
1. **Multi-Curve Workspace**
   - Add/remove curves dynamically
   - Collapsible curve cards
   - Drag-to-reorder functionality
   - Individual curve naming

2. **Curve Types**
   - Standard easing presets (ease, ease-in, etc.)
   - Cubic bezier with visual editor
   - Spring physics (tension, friction, mass)
   - Auto-conversion between types

3. **Visual Editor**
   - Canvas-based curve manipulation
   - Draggable control points
   - Real-time preview animations
   - Grid and measurement guides

4. **Export Formats**
   - CSS cubic-bezier() function
   - CSS linear() function (with configurable steps)
   - CSS @keyframes for complex animations
   - JSON for curve data interchange

5. **State Management**
   - URL hash contains all workspace data
   - Shareable links restore exact state
   - Browser history integration
   - No data persistence needed

6. **Community Integration**
   - Import curve collections from GitHub
   - Export workspace as JSON
   - One-click GitHub PR submission
   - Curated preset libraries

## File Structure
```
/
├── index.html              # Main application entry
├── src/
│   ├── main.js            # App initialization
│   ├── curve-editor.js    # Canvas-based curve editor
│   ├── physics.js         # Spring physics calculations
│   ├── export.js          # CSS/JSON generation
│   ├── url-state.js       # URL hash state management
│   ├── ui.js              # DOM manipulation utilities
│   └── utils.js           # General utilities
├── styles/
│   ├── main.css           # Core application styles
│   ├── curve-editor.css   # Canvas editor specific styles
│   └── components.css     # UI component styles
├── curves/
│   └── presets.json       # Built-in curve library
├── docs/                  # Documentation
└── README.md              # Project documentation
```

## Key Technical Considerations
- **Performance**: Use requestAnimationFrame for smooth animations
- **Accessibility**: Support keyboard navigation and screen readers
- **Mobile**: Touch events for curve manipulation
- **URL Limits**: Compress state data to avoid URL length limits
- **Browser Support**: Modern browsers (ES6+ features)
- **Canvas Optimization**: Efficient redrawing and event handling

## Development Workflow
1. **Setup**: `npm create vite@latest web-easing-curves --template vanilla`
2. **Dependencies**: Install core libraries
3. **Development**: `npm run dev` for hot reloading
4. **Build**: `npm run build` generates production files
5. **Deploy**: GitHub Pages automatic deployment
6. **Community**: Accept curve contributions via GitHub PRs

## Quality Standards
- **Code Quality**: ESLint + Prettier configuration
- **Performance**: 60fps animations, minimal bundle size
- **Accessibility**: WCAG 2.1 AA compliance
- **Browser Testing**: Chrome, Firefox, Safari, Edge
- **Mobile Testing**: iOS Safari, Chrome Mobile
- **Documentation**: Clear code comments and README

## Success Metrics (Non-Monetary)
- GitHub stars and community engagement
- Developer adoption and bookmarking
- Curve library contributions
- Educational impact on motion design
- Tool integration by other projects

## Community Guidelines
- Open source MIT license
- Contributor-friendly codebase
- Clear documentation and examples
- Responsive to community feedback
- Educational content and tutorials

## Future Enhancements (Post-MVP)
- Advanced curve analysis tools
- More physics simulation types
- Design tool integrations (Figma plugins)
- Curve morphing and blending
- Accessibility optimization tools
- Performance profiling features

## Important Notes for Development
- Keep the bundle size minimal for fast loading
- Prioritize user experience over feature complexity
- Maintain backward compatibility for shared URLs
- Design for both novice and expert users
- Focus on educational value alongside utility
