# TODO_MVP.md - Web Easing Curves Development Plan

## Phase 1: Project Setup & Foundation (Days 1-2)

### 1.1 Initialize Project
- [x] Run `npm create vite@latest web-easing-curves -- --template vanilla`
- [x] Install dependencies: `npm install bezier-easing canvas-sketch-util file-saver lz-string`
- [x] Setup development environment and folder structure

### 1.2 Basic File Structure
- [x] Create `src/` directory with core JS files
- [x] Create `styles/` directory for CSS organization
- [x] Create `curves/presets.json` with standard easing presets
- [x] Setup basic HTML structure in `index.html`
- [x] Create placeholder functions in main modules

### 1.3 Development Tooling
- [x] Configure ESLint and Prettier
- [ ] Configure GitHub Pages deployment
- [ ] Create basic GitHub Actions workflow for auto-deployment

## Phase 2: Core Canvas Editor (Days 3-5)

### 2.1 Canvas Foundation
- [x] Create `CurveEditor` class in `curve-editor.js`
- [x] Setup HTML5 Canvas with proper sizing and DPI handling
- [x] Implement basic coordinate system and grid rendering
- [x] Add mouse/touch event handlers for canvas interaction

### 2.2 Cubic Bezier Visualization
- [x] Render cubic bezier curves on canvas
- [x] Draw control points as draggable handles
- [x] Implement curve sampling for smooth rendering
- [x] Add visual feedback for hover/selection states

### 2.3 Interactive Controls
- [x] Make control points draggable with mouse/touch
- [x] Implement constraint logic (P0 at 0,0 and P3 at 1,1)
- [ ] Add keyboard shortcuts for precise adjustments
- [ ] Implement undo/redo functionality for curve edits

### 2.4 Real-time Preview
- [x] Create animation preview dot that follows curve
- [x] Add play/pause/loop controls
- [x] Implement adjustable animation duration
- [x] Show curve values in real-time as user drags

## Phase 3: Multi-Curve System (Days 6-8)

### 3.1 Curve Data Structure
- [x] Design curve data model (type, parameters, name, etc.)
- [x] Create `CurveManager` class for handling multiple curves
- [x] Implement add/remove curve functionality
- [ ] Add curve reordering with drag-and-drop

### 3.2 UI Components
- [x] Create collapsible curve cards in HTML/CSS
- [ ] Implement curve type selector (dropdown)
- [x] Add individual curve controls and preview
- [x] Create clean, scalable list interface

### 3.3 Curve Types Implementation
- [x] Implement standard easing presets (ease, ease-in, etc.)
- [x] Add cubic bezier curve type with visual editor
- [ ] Create spring physics curve type with parameter sliders
- [ ] Implement auto-conversion between compatible types

## Phase 4: Physics & Advanced Curves (Days 9-11)

### 4.1 Spring Physics Engine
- [ ] Implement spring physics calculations in `physics.js`
- [ ] Create tension, friction, and mass parameter controls
- [ ] Generate curve points from physics simulation
- [ ] Add real-time physics preview with adjustable parameters

### 4.2 Curve Analysis
- [ ] Calculate velocity and acceleration from curves
- [ ] Implement curve quality scoring (smoothness, accessibility)
- [ ] Add visual indicators for curve characteristics
- [ ] Create performance warnings for complex curves

### 4.3 Advanced Export Features
- [x] Generate CSS linear() function with configurable steps
- [ ] Create CSS @keyframes export for complex animations
- [x] Implement JavaScript array export for frameworks
- [x] Add JSON export for curve data interchange

## Phase 5: Export System (Days 12-13)

### 5.1 Export Formats
- [x] Implement CSS cubic-bezier() generation
- [x] Create CSS linear() function generator
- [ ] Build @keyframes animation generator
- [ ] Add framework-specific code snippets (React, Vue, GSAP)

### 5.2 Copy & Share Functionality
- [x] Add one-click copy buttons for each export format
- [x] Implement copy-all functionality for entire workspace
- [x] Create export notifications and success feedback
- [ ] Add keyboard shortcuts for common export actions

### 5.3 File Export Options
- [ ] Implement JSON workspace export (Removed)
- [ ] Create CSS file download functionality (Removed)
- [ ] Add curve collection export for sharing (Removed)
- [ ] Implement batch export for all curves (Removed)

## Phase 6: URL State Management (Days 14-15)

### 6.1 State Serialization
- [x] Implement workspace state serialization in `url-state.js`
- [ ] Handle browser URL length limitations
- [ ] Add backwards compatibility for shared URLs

### 6.2 Browser Integration
- [x] Update URL hash on workspace changes
- [x] Restore workspace state from URL on load
- [ ] Implement browser back/forward navigation
- [ ] Add bookmarking support for specific configurations

### 6.3 Share Functionality
- [x] Create shareable URL generation
- [x] Implement copy-to-clipboard for sharing

## Phase 7: Community Features (Days 16-17)

### 7.1 Curve Library System
- [x] Load built-in presets from `curves/presets.json`

## Phase 8: Polish & UX (Days 18-19)

### 8.1 Responsive Design
- [ ] Optimize layout for mobile devices
- [x] Implement touch-friendly controls and gestures
- [x] Add responsive canvas sizing
- [ ] Test and refine mobile user experience

### 8.2 Accessibility
- [ ] Add ARIA labels and semantic HTML
- [ ] Implement keyboard navigation for all features
- [ ] Add high contrast mode support
- [ ] Test with screen readers and accessibility tools

### 8.3 Performance Optimization
- [ ] Optimize canvas rendering performance
- [ ] Implement efficient redraw strategies
- [ ] Add performance monitoring and optimization
- [ ] Minimize bundle size and load times

## Phase 9: Testing & Documentation (Days 20-21)

### 9.1 Cross-Browser Testing
- [ ] Test in Chrome, Firefox, Safari, Edge
- [ ] Verify mobile browser compatibility
- [ ] Test touch interactions on tablets
- [ ] Fix browser-specific issues

### 9.2 Feature Testing
- [ ] Test all curve types and conversions
- [ ] Verify export formats work correctly
- [ ] Test URL sharing and state restoration
- [ ] Validate community integration features

### 9.3 Documentation
- [x] Write comprehensive README.md
- [ ] Create user guide and tutorials
- [ ] Document API and code structure
- [ ] Add contribution guidelines

## Phase 10: Launch Preparation (Days 22-23)

### 10.1 Production Build
- [ ] Configure production build optimizations
- [ ] Setup GitHub Pages deployment
- [ ] Configure custom domain (optional)
- [ ] Test production deployment

### 10.2 Launch Materials
- [ ] Create project screenshots and demos
- [ ] Write launch blog post or announcement
- [ ] Prepare social media content
- [ ] Set up analytics (privacy-friendly)

### 10.3 Community Setup
- [ ] Create GitHub issue templates
- [ ] Setup contributor guidelines
- [ ] Initialize community curve repository
- [ ] Prepare initial curve collection

## Post-MVP Enhancements (Future Phases)

### Educational Features
- [ ] Interactive tutorials for easing principles
- [ ] Best practice recommendations
- [ ] Curve comparison and analysis tools
- [ ] Motion design learning resources

### Advanced Tools
- [ ] Curve morphing and blending
- [ ] Batch curve operations
- [ ] Advanced physics simulations (bounce, elastic)
- [ ] Performance profiling tools

### Integrations
- [ ] Browser extension for inspecting curves
- [ ] Figma plugin for design tool integration
- [ ] CLI tool for build process integration
- [ ] API for programmatic access

## Success Criteria

### Technical
- [ ] 60fps animation performance
- [ ] <100ms initial load time
- [ ] Mobile-responsive design
- [ ] Cross-browser compatibility
- [ ] Accessibility compliance

### User Experience  
- [ ] Intuitive curve editing
- [ ] Seamless multi-curve workflow
- [ ] Reliable URL sharing
- [ ] Clear export functionality
- [ ] Educational value

## Timeline Summary
- **Days 1-2**: Project setup and foundation
- **Days 3-8**: Core editor and multi-curve system
- **Days 9-13**: Physics engine and export system  
- **Days 14-17**: State management and community features
- **Days 18-21**: Polish, testing, and documentation
- **Days 22-23**: Launch preparation

**Total Estimated Timeline: 23 days for full MVP**

## Risk Mitigation
- Start with simplest features first (cubic bezier editor)
- Test early and often on mobile devices
- Keep fallbacks for all network-dependent features
- Maintain backwards compatibility for shared URLs
- Focus on core value before adding advanced features
