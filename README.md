# web-easing-curves

Web app for creating and tuning web easing curves.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```

## Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by the GitHub Actions workflow in `.github/workflows/deploy.yml`.

To deploy manually, you can run:
```bash
npm run build
```

And then push the changes to the `main` branch.

## Project Structure

- The site is published from the dist/ directory via GitHub Actions. The live URL is typically:

https://nickcoury.github.io/web-easing-curves/

If you want to customize the domain, set a CNAME and update Pages settings accordingly.

### Quick Start (copy-paste)

- Install: `npm install`
- Build: `npm run build`
- Serve locally: `npm run dev:static` (port 5173) or `npx live-server dist` (default port)
- Smoke test: `npm run smoke` (builds and verifies dist/main.js exists)
- Deploy: push to main; GitHub Actions will publish dist to Pages

## Project Structure

- The site is published from dist/ via GitHub Actions.

- `src/` - Source files
  - `index.html` - Main HTML file
  - `main.ts` - Main TypeScript file
  - `styles/` - CSS files
- `dist/` - Built files (generated)
- `package.json` - Project configuration and dependencies
- `tsconfig.json` - TypeScript configuration
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow
