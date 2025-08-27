# Web Easing Curves 🎨

A modern, free, and open-source tool for creating and fine-tuning CSS easing curves. Featuring a multi-curve workspace, spring physics, and modern CSS output formats.

[**✨ Live Demo**](https://nickcoury.github.io/web-easing-curves) | [**📖 Documentation**](./docs) | [**🤝 Contributing**](./CONTRIBUTING.md)

![Web Easing Curves Preview](./docs/preview.png)

## ✨ Features

### 🚀 **Multi-Curve Workspace**
- Work with unlimited curves simultaneously
- Clean, scalable interface from one to many curves
- Drag-to-reorder and collapsible curve cards
- Individual curve naming and organization

### 🎯 **Multiple Curve Types**
- **Standard Easing**: ease, ease-in, ease-out, ease-in-out
- **Cubic Bezier**: Visual editor with draggable control points
- **Spring Physics**: Generate curves from tension, friction, and mass
- **Auto-conversion**: Switch between compatible curve types

### 📤 **Modern CSS Output**
- `cubic-bezier()` - Traditional CSS timing functions
- `linear()` - New CSS linear timing function with configurable steps
- `@keyframes` - Complete animation keyframes for complex curves
- **Framework snippets** - React, Vue, GSAP, and more

### 🔗 **Shareable Workspaces**
- Complete workspace state encoded in URL
- Bookmark and share exact configurations
- No account required, no data stored
- Instant loading from shared links

### 🎓 **Educational Focus**
- Real-time curve analysis and feedback
- Velocity and acceleration visualization  
- Best practice recommendations
- Motion design learning resources

### 🌍 **Community-Driven**
- GitHub-based curve library system
- Curated collections of curves
- One-click community contributions
- Import/export curve collections

## 🚀 Quick Start

### Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/web-easing-curves.git
cd web-easing-curves

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎨 How It Works

### Curve Types

**Standard Easing**
```css
/* Quick presets */
transition: all 0.3s ease-out;
```

**Cubic Bezier**
```css
/* Visual editor output */
transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

**Spring Physics**
```css
/* Generated from physics parameters */
transition: all 0.3s linear(0, 0.009, 0.035, 0.078, 0.135, 0.206, 0.287, 0.375, 0.478, 0.58, 0.683, 0.786, 0.888, 0.984, 1.016, 1.021, 1.016, 0.984, 0.981, 1);
```

**Keyframes**
```css
/* For complex animations */
@keyframes smooth-entrance {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
```

### URL State Management
Your entire workspace is encoded in the URL:
```
https://web-easing-curves.dev/#curves=N4IgdghgLgpiBcIQBoQBcBOBDAXgAgBQCGANgKYDmAFAMYgDukA9nklQKoAOAFgJYBGAA0QACAoGM
```
Share this URL and others get your exact setup instantly.

## 🏗️ Architecture

### Tech Stack
- **Vite** - Fast build tool and dev server
- **Vanilla JavaScript** - No framework dependencies
- **HTML5 Canvas** - Smooth curve visualization and interaction
- **CSS3** - Modern styling and animations
- **GitHub Pages** - Free, reliable hosting

### Key Libraries
```json
{
  "bezier-easing": "^2.1.0",      // Curve calculations
  "canvas-sketch-util": "^1.10.0", // Math utilities  
  "file-saver": "^2.0.5",         // File downloads
  "lz-string": "^1.4.4"           // URL compression
}
```

### File Structure
```
web-easing-curves/
├── src/
│   ├── main.js              # App initialization
│   ├── curve-editor.js      # Canvas-based curve editor
│   ├── physics.js           # Spring physics engine
│   ├── export.js            # CSS/JSON generation
│   ├── url-state.js         # URL hash management
│   ├── ui.js                # DOM manipulation utilities
│   ├── utils.js             # Utilities
│   └── curve.js             # Curve class
│   └── curve-manager.js     # Curve manager class
├── styles/
│   ├── main.css            # Core styles
│   ├── curve-editor.css    # Canvas editor specific styles
│   └── components.css      # UI components
├── curves/
│   └── presets.json        # Built-in curve library
└── docs/                   # Documentation
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 **Report Issues**
Found a bug or have a feature request? [Open an issue](https://github.com/yourusername/web-easing-curves/issues).

### 🎨 **Submit Curves**
Share your curves with the community:
1. Export your curve as JSON
2. Fork the [curve library repo](https://github.com/yourusername/bezier-curves)
3. Add your curve to the appropriate category
4. Submit a pull request

### 💻 **Code Contributions**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Submit a pull request

### 🧪 **Testing**
We test on:
- **Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Devices**: Desktop, tablet, mobile

## 📚 Documentation

- [**User Guide**](./docs/user-guide.md) - How to use all features
- [**API Reference**](./docs/api.md) - Code structure and APIs
- [**Contributing Guide**](./CONTRIBUTING.md) - Development setup and guidelines
- [**Curve Library**](./docs/curve-library.md) - Community curve collections
- [**Export Formats**](./docs/export-formats.md) - All output options explained

## 🎯 Roadmap

### Current Version: MVP
- ✅ Multi-curve workspace
- ✅ Cubic bezier and spring physics
- ✅ Modern CSS export formats
- ✅ URL state sharing
- ✅ Community curve library

### Next Version: Enhanced
- [ ] Advanced curve analysis tools
- [ ] Curve morphing and blending
- [ ] Browser extension
- [ ] Figma plugin integration
- [ ] CLI tool for build processes

### Future: Ecosystem
- [ ] Design system integration
- [ ] Animation performance profiler
- [ ] Motion accessibility tools
- [ ] Educational tutorials and courses

## 🏆 Why Web Easing Curves?

### vs. cubic-bezier.com
- ✅ **Multiple curves** instead of single curve editing
- ✅ **Spring physics** beyond just cubic bezier
- ✅ **Modern CSS output** including linear() function
- ✅ **Mobile optimized** with touch controls
- ✅ **Community features** for sharing and discovery

### vs. Other Tools
- ✅ **Free and open source** - Always will be
- ✅ **No signup required** - Work immediately
- ✅ **Lightweight and fast** - Pure web standards
- ✅ **Developer focused** - Built by devs, for devs
- ✅ **Educational** - Learn motion design principles

## 🌟 Community

- **GitHub Discussions**: Share curves and get help

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

Built with ❤️ by developers who care about smooth animations.

---

## 🙏 Acknowledgments

- Inspired by [cubic-bezier.com](https://cubic-bezier.com) by Lea Verou

---

**[⭐ Star this repo](https://github.com/nickcoury/web-easing-curves)** if you find it useful!