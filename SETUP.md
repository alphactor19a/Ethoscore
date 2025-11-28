# Setup Instructions

## Quick Start

1. **Navigate to the project directory:**
   ```bash
   cd "/Users/arusharora/agora xyz/ethoscore-landing-page"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
ethoscore-landing-page/
├── public/
│   ├── index.html
│   ├── windmill_no_reeds.png
│   ├── tree1.png
│   ├── Decorative Tree.png
│   ├── Governance Chart.png
│   └── garden.png
├── src/
│   ├── App.js           # Main landing page component
│   ├── App.css          # CSS variables and global styles
│   └── index.js         # React entry point
├── package.json
└── README.md
```

## Design Specifications

- **Page Dimensions:** 1304 x 6926 px
- **Fonts:** SF Pro Text, Inter, Menlo
- **Color Palette:**
  - Grey-98: #FAFAF9 (background)
  - Grey-32: #57534E (secondary text)
  - Grey-15: #292524 (primary text)
  - Grey-10: #1C1917 (dark text/buttons)
  
## Features Implemented

✅ Responsive header with navigation
✅ Hero section with CTA
✅ Custom illustrations properly integrated
✅ Protocol showcase grid
✅ Testimonial carousel
✅ Governor statistics section
✅ Feature cards with images
✅ Capabilities grid (12 items)
✅ Open source section
✅ Product tiers comparison
✅ Final CTA section
✅ Footer with links

## Image Replacements

All placeholder images have been replaced with actual assets:
- `/windmill_no_reeds.png` - Hero section windmill
- `/tree1.png` - Hero section tree
- `/Decorative Tree.png` - Hero section decorative tree
- `/Governance Chart.png` - Governor statistics chart
- `/garden.png` - Open source section

## Build for Production

To create an optimized production build:

```bash
npm run build
```

The build folder will contain the production-ready files.

## API Configuration

The frontend connects to the EthoScore backend API for article analysis. Configure the API URL using environment variables:

### Local Development
Create a `.env` file in the project root:
```
REACT_APP_ETHOSCORE_API_URL=http://localhost:8000
```

### Production (Vercel/Other Platforms)
Set the environment variable in your deployment platform:
- **Vercel**: Go to Project Settings → Environment Variables
- Add: `REACT_APP_ETHOSCORE_API_URL` = `https://ethoscore-extension.onrender.com`

The frontend will automatically use this URL to call the backend API endpoints:
- `/analyze/url` - Analyze articles from URLs
- `/analyze/text` - Analyze articles from text input
- `/explore/topic` - Search and explore topics

**Note**: The backend must have models loaded (see backend `RENDER_SETUP.md`) for these endpoints to work.

## Deployment

The built files can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- etc.

**Important**: Remember to set the `REACT_APP_ETHOSCORE_API_URL` environment variable in your deployment platform!

## Figma Design Reference

Original design: https://www.figma.com/design/HXni68pRvTTUrVxjLIPse8/ethoscore?node-id=1-397&m=dev

