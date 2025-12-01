# Arriva Soft - Digital Transformation Platform

A modern, responsive website for Arriva Soft built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Fully responsive design with Tailwind CSS
- **Hero Carousel**: Auto-rotating hero section with 3 different slides
- **Mega Menu**: Desktop dropdown navigation with icons and descriptions
- **Mobile Optimized**: Collapsible mobile menu with smooth animations
- **Event Banners**: Conditional event banner system
- **Service Showcase**: 8 key services displayed in a responsive grid
- **Type-Safe**: Full TypeScript implementation for better code quality

## 📦 Project Structure

```
Arriva-App-Frontend-Typescript/
├── app/                      # Next.js App Router (pages and layout)
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page component
├── components/               # React components
│   ├── ArrivaLogo.tsx
│   ├── DashboardCarousel.tsx
│   ├── DropdownItem.tsx
│   ├── EventBanner.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── IndustriesSection.tsx
│   ├── PrimaryButton.tsx
│   ├── ProjectOrderDashboard.tsx
│   ├── ServicesGrid.tsx
│   └── StatBox.tsx
├── data.ts                   # Application data and content
├── types.ts                  # TypeScript type definitions
├── .eslintrc.json            # ESLint configuration
├── .gitignore                # Git ignore patterns
├── next-env.d.ts             # Next.js environment type definitions
├── next.config.js            # Next.js configuration
├── package-lock.json         # Package lock file
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── src/
    └── App.tsx               # (Likely unused/vestigial from previous setup)
```

## 🛠️ Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**

   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📋 Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production (outputs to `/out` folder)
- `npm run start` - Start production server (not used for static export)
- `npm run lint` - Run ESLint

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages with custom domain support.

### Quick Deployment Steps

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Configure Custom Domain:**
   - Edit `public/CNAME` with your domain
   - Configure DNS in Namecheap (see `DEPLOYMENT.md`)

3. **Enable GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Set source to **GitHub Actions**

📖 **Full deployment guide:** See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for complete instructions.

### Deployment Status

Check deployment status: [GitHub Actions](https://github.com/ya-shuvo30/arriva-app-nextjs/actions)

## 🎨 Key Components

### Header

- Fixed navigation bar with logo
- Desktop mega-menu with service/industry dropdowns
- Mobile hamburger menu with accordion submenus

### Hero Section

- Auto-rotating carousel (8-second intervals)
- Three different hero slides targeting different audiences
- Manual slide controls with indicators
- Project Order Analysis dashboard with interactive charts
- Statistics display
- Call-to-action buttons

### Project Order Dashboard

- Interactive donut chart showing order distribution
- Real-time metrics with trend indicators
- Quarterly progress timeline
- Responsive design with Recharts visualization library
- Color-coded status indicators (Completed, In Progress, Pending, On Hold)

### Services Grid

- 8 service cards in responsive grid
- Icon-based visual design
- Hover animations and effects

### Footer

- Multi-column layout
- Social media links
- Service, industry, and company links

## 🔧 Customization

### Updating Content

All content is centralized in `src/data.ts`:

- **Navigation**: Edit `NAV_LINKS`
- **Hero Slides**: Edit `HERO_SLIDES`
- **Event Banners**: Edit `EVENT_BANNERS`
- **Services**: Edit `SERVICES_DATA`
- **Footer Links**: Edit `FOOTER_LINKS`

### Styling

The project uses Tailwind CSS for styling. Customize the theme in `tailwind.config.js`.

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a proprietary project for Arriva Soft.

## 📄 License

Copyright © 2001-2025 Arriva Soft. All rights reserved.
