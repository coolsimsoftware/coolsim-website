# CoolSim Website

A modern, responsive website for CoolSim Next built with Hugo and TailwindCSS.

## Quick Start

### Prerequisites

- Hugo (extended version) - [Install Guide](https://gohugo.io/installation/)
- Node.js and npm - [Install Guide](https://nodejs.org/)

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   hugo server --buildDrafts
   ```
4. Open http://localhost:1313 in your browser

## Development

### Project Structure

```
coolsim-website/
├── assets/css/          # TailwindCSS source files
├── content/             # Markdown content
│   ├── blog/           # Blog posts
│   ├── _index.md       # Homepage content
│   ├── about.md        # About page
│   └── pricing.md      # Pricing page
├── layouts/             # Hugo templates
│   ├── _default/       # Default templates
│   ├── partials/       # Reusable components
│   ├── blog/          # Blog-specific templates
│   └── page/          # Page-specific templates
├── static/             # Static assets (images, icons)
├── hugo.toml          # Hugo configuration
├── tailwind.config.js # TailwindCSS configuration
└── postcss.config.js  # PostCSS configuration
```

### Building for Production

```bash
# Build the site
hugo --minify

# The built site will be in the public/ directory
```

### CSS Development

This project uses TailwindCSS with PostCSS processing. The main CSS file is `assets/css/main.css`.

To add new styles:
1. Use Tailwind utility classes in your HTML templates
2. Add custom component styles in the `@layer components` section of `main.css`
3. The build process will automatically purge unused styles in production

### Content Management

#### Adding Blog Posts

Create a new markdown file in `content/blog/`:

```bash
hugo new blog/my-new-post.md
```

#### Adding Pages

Create a new markdown file in `content/`:

```bash
hugo new my-new-page.md
```

### Design System

#### Colors

The site uses a dark theme with the following color palette:

- Primary Background: `#0f0f1a` (deep navy)
- Secondary Background: `#1a1a2e`
- Accent: `#4fc3f7` (bright cyan)
- Accent Hover: `#29b6f6`
- Text Primary: `#e0e0e8`
- Text Muted: `#8888a8`

#### Typography

- **Body Text**: Inter (Google Fonts)
- **Code/Mono**: JetBrains Mono (Google Fonts)
- **Logo**: Thermal gradient effect using CSS

#### Components

The design system includes several reusable CSS classes:

- `.btn-primary` - Primary action buttons
- `.btn-outline` - Secondary buttons
- `.card` - Content cards
- `.feature-card` - Enhanced cards with hover effects
- `.hero-bg` - Hero section gradient background

## Deployment

### Using Netlify

1. Connect your repository to Netlify
2. Set build command: `hugo --minify`
3. Set publish directory: `public`
4. Deploy!

### Using Vercel

1. Connect your repository to Vercel
2. Framework preset: Hugo
3. Deploy!

### Manual Deployment

1. Run `hugo --minify`
2. Upload the contents of the `public/` directory to your web server

## Configuration

### Site Settings

Edit `hugo.toml` to customize:

- Site title and description
- Base URL
- Navigation menu items
- Social media links
- Google Analytics ID

### TailwindCSS

Edit `tailwind.config.js` to customize:

- Color palette
- Font families
- Custom utilities
- Component styles

## Performance

This site is optimized for performance:

- **TailwindCSS**: Automatically purges unused styles
- **Hugo**: Fast static site generation
- **Images**: Optimize images before adding to `static/images/`
- **Fonts**: Google Fonts with preconnect for faster loading

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement for older browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

Copyright 2026 Applied Math Modeling, Inc. All rights reserved.