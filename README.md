# Neural Class - AI in Education Magazine

A modern, production-ready React magazine website for educators, featuring cutting-edge AI tools, strategies, and insights for the classroom.

## Features

- **12+ Seed Articles** - Full-featured articles on AI in education
- **20+ AI Tools Directory** - Comprehensive tool database with ratings and pricing
- **8 Education Categories** - Organized content by topic
- **Newsletter Archives** - Past issues and subscription management
- **Admin Panel** - Create, edit, and manage content via password-protected interface
- **Responsive Design** - Mobile-first, fully responsive across all devices
- **Smooth Animations** - Framer Motion integration for engaging interactions
- **LocalStorage Persistence** - All data saved locally, no backend required
- **Dark Forest Green + Cream** - Beautiful, professional color scheme
- **Production Ready** - Docker, Nginx, deployment scripts included

## Tech Stack

- **React 18** - UI framework
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **Vite** - Fast build tool
- **Docker** - Containerization

## Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

## Development

### Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── navigation/      # Navbar, Footer, MobileMenu
│   ├── home/            # Homepage sections
│   ├── articles/        # Article components
│   ├── tools/           # Tools directory components
│   └── admin/           # Admin interface
├── pages/               # Full page components
├── layouts/             # Layout wrappers
├── context/             # React Context for admin
├── hooks/               # Custom hooks
├── data/                # Seed data and defaults
└── App.jsx              # Main routes
```

### Adding Content

#### Add Articles

Visit `/admin` (password: `admin123`) and create new articles. Articles are stored in localStorage and persist across sessions.

#### Add Tools

Use the admin panel to add new AI tools to the directory. Each tool includes:
- Name and category
- Description and website
- Price model, rating, tags
- Featured status

### Customization

#### Change Admin Password

Edit `.env`:
```
VITE_ADMIN_PASSWORD=your_new_password
```

#### Modify Colors

Edit `tailwind.config.js` to customize the forest green and cream colors.

#### Add Categories

Edit `src/data/categories.js` to add new education categories.

## Deployment

### Docker

```bash
# Build Docker image
npm run docker:build

# Run Docker container
npm run docker:run

# Or use docker-compose
npm run docker:compose
```

### VPS Deployment

```bash
./deploy.sh your-vps-ip root
```

This will:
1. Build the production bundle
2. Upload to VPS
3. Create Docker container
4. Start the service

### Manual Deployment

```bash
# Build production bundle
npm run build

# Output is in ./dist directory
# Copy to your web server
```

## Admin Panel

Access at `/admin/login`

Default password: `admin123`

Features:
- View all articles and tools
- Create new content
- Edit existing content
- Delete content
- Real-time updates

## Performance

- Lazy loading images
- Code splitting with Vite
- Optimized bundle size
- Gzip compression via Nginx

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Data Storage

All content stored in:
- **Articles**: `localStorage['nc_articles']`
- **Tools**: `localStorage['nc_tools']`

Seed data is merged with any custom data added via admin panel.

## Environment Variables

```
VITE_ADMIN_PASSWORD=admin123
```

## File Sizes

- Main bundle: ~150KB (gzipped)
- Seed data: ~50KB
- Total: ~200KB initial load

## License

MIT

## Support

For issues or questions, refer to the documentation or check the code comments.

## Version

1.0.0 - Initial Release
