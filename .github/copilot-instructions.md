# Arriva Soft Frontend - AI Coding Agent Instructions

## Project Overview
Next.js 14 (App Router) + TypeScript + Tailwind CSS static site showcasing Arriva Soft's multi-industry software development services. Single-file data architecture with auto-rotating hero carousels and industry-specific dashboards.

**Critical**: This is a **Next.js static export** (`output: 'export'` in `next.config.js`), not a Vite SPA. All components use `'use client'` directive due to state/effects.

## Critical Architecture Patterns

### Single Source of Truth: `data.ts` (root level)
**All content lives in one file.** Never hardcode content in components—always import from `@/data`:
- `NAV_LINKS` - Header navigation with mega-menu structure
- `HERO_SLIDES` - 5 industry-specific hero slides (auto-rotate every 8s in page.tsx)
- `EVENT_BANNERS` - Conditional banners (filtered by `isActive` in page.tsx)
- `servicesData`, `industriesData`, `techStackData` - Section content
- `fintechDashboardData`, `healthcareDashboardData`, etc. - Dashboard variants (auto-rotate every 5s in DashboardCarousel)

**Example**: To add a new service, modify `servicesData` array in `data.ts`—never edit ServicesGrid.tsx.

### Type-First Development: `types.ts` (root level)
All interfaces are centralized. When adding features:
1. Define the interface in `types.ts` (e.g., `Service`, `DashboardData`)
2. Add data to `data.ts` conforming to the interface
3. Components consume typed data via props

**Key interfaces**: `NavLink` (nested subLinks), `DashboardData` (dynamic metrics/timeline), `HeroContent` (carousel slides)

### Next.js App Router Structure
```
app/
├── layout.tsx (root layout, metadata, no client state)
├── page.tsx (Home component - client component with state)
└── globals.css (Tailwind directives + custom scrollbar)

components/ (all client components)
├── Header.tsx ('use client' - has useState for menu)
├── DashboardCarousel.tsx ('use client' - has auto-rotation state)
└── [other components].tsx (stateless, but bundled as client)

data.ts (root) - All content arrays
types.ts (root) - All TypeScript interfaces
```

**Import pattern**: Use `@/` alias (e.g., `import { HERO_SLIDES } from "@/data"`, `import Header from "@/components/Header"`)

### Component Composition Hierarchy
```
page.tsx (Home - state owner, 'use client')
├── EventBannerComponent (filtered by isActive)
├── Header (mega-menu with DropdownItem children)
├── Hero (receives slide via props, uses DashboardCarousel)
│   └── DashboardCarousel (auto-rotates 4 dashboard datasets)
│       └── ProjectOrderDashboard (receives dynamic DashboardData)
├── ServicesGrid (maps servicesData)
├── IndustriesSection (maps industriesData + stats)
├── TechStack (maps techStackData categories)
└── Footer (maps FOOTER_LINKS)
```

**State management**: `currentSlideIndex` (hero carousel) lives in `page.tsx` and passes down to Hero via `onSlideChange` callback. Dashboard carousel state is self-contained in DashboardCarousel.tsx.

## Critical Developer Workflows

### Development Commands
```powershell
npm run dev          # Next.js dev server at localhost:3000 with Fast Refresh
npm run build        # Next.js static export (generates /out folder)
npm run start        # Serves production build (not applicable for static export)
npm run lint         # Next.js ESLint with TypeScript rules
```

**Build process**: Runs `next build` which compiles TypeScript and generates static HTML/CSS/JS in `/out`. TypeScript errors block builds—check `tsconfig.json` for strict mode settings.

**Static Export**: Site builds to static files (no server required). Deploy `/out` folder to any static host.

**CI/CD Pipeline**: Automated deployment to GitHub Pages via GitHub Actions. Triggered on push to `main` or manual dispatch. See `.github/workflows/deploy.yml`.

### Adding New Content (Most Common Task)
1. **New hero slide**: Add to `HERO_SLIDES` in `data.ts` → auto-appears in carousel
2. **New service/industry**: Add to respective array in `data.ts` → grid updates automatically
3. **Toggle event banner**: Set `isActive: true/false` in `EVENT_BANNERS`
4. **New dashboard variant**: Create `DashboardData` object in `data.ts`, add to `dashboards` array in `DashboardCarousel.tsx`
5. **Update metadata**: Edit `app/layout.tsx` (title, description, keywords)

### Modifying Components
- **Never** hardcode colors—use Tailwind classes (see `tailwind.config.js` for custom animations)
- Icon imports: Use `lucide-react` (already imported in data.ts: `Code, Users, Heart, DollarSign`, etc.)
- Responsive breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px), `2xl:` (1536px)
- **Client components**: Add `'use client'` directive only if component uses hooks (useState, useEffect) or browser APIs

## Project-Specific Conventions

### Styling Patterns
- **Mobile-first**: Base styles for mobile, add `md:`, `lg:` for larger screens
- **Hover effects**: `group` parent with `group-hover:` children (see Header.tsx mega-menu)
- **Transitions**: Always use `transition-all duration-300` for smooth animations
- **Spacing**: Section padding `py-16 md:py-24`, card gaps `gap-6 lg:gap-8`

### Component Patterns
1. **Auto-rotating carousels**: Use `useEffect` with `setInterval` + cleanup (see page.tsx line 16, DashboardCarousel.tsx line 22)
2. **Conditional rendering**: `{EVENT_BANNERS.filter(b => b.isActive).map(...)}` (page.tsx line 34)
3. **Prop callbacks**: `onSlideChange` pattern for parent-child state sync (Hero.tsx receives, page.tsx owns)
4. **Dynamic data rendering**: `ProjectOrderDashboard` accepts `DashboardData` prop to render different industry dashboards

### File Organization
- **Components**: One per file in `components/`, default export, typed with `React.FC`
- **Data**: All in `data.ts` (root level), exported as named constants (UPPERCASE_WITH_UNDERSCORES)
- **Types**: All in `types.ts` (root level), exported interfaces (PascalCase)
- **Global styles**: `app/globals.css` (Tailwind directives + custom scrollbar)

## Integration Points

### External Dependencies
- **Lucide React** (`^0.294.0`): Icon library—import icons from `lucide-react` in data.ts, pass as `ElementType` via types
- **Recharts** (`^3.5.0`): Chart library for ProjectOrderDashboard donut charts (see `<PieChart>` usage)
- **Tailwind CSS** (`^3.4.0`): No custom CSS files—all styling via utility classes

### Asset Management
- Logo: `/app-icon.svg` (referenced in Header.tsx line 48)
- No image optimization setup—uses native `<img>` tags with `loading="lazy"`

## Common Pitfalls

1. **Carousel timing conflicts**: Hero rotates every 8s, dashboards every 5s—don't sync them (intentional UX design)
2. **TypeScript strictness**: `tsconfig.json` has strict mode—all props must be typed, no implicit `any`
3. **Build size**: Currently 456.73 kB gzipped—avoid adding heavy libraries without discussion
4. **Mobile menu state**: `isOpen` and `mobileSubMenu` are separate states in Header.tsx—closing menu doesn't reset submenu
5. **Data.ts imports**: Components import specific data (e.g., `import { servicesData } from '../data'`)—never import entire file

## Quick Reference

**Most edited files** (in order of frequency):
1. `data.ts` - Content updates
2. `components/*.tsx` - UI tweaks
3. `tailwind.config.js` - Design token changes
4. `types.ts` - New data structures

**Key files for understanding architecture**:
- `ARCHITECTURE.md` - Complete component hierarchy and data flow diagrams
- `TRANSFORMATION_SUMMARY.md` - Recent changes from fintech-only to multi-industry site
- `README.md` - Installation and feature documentation
- `DEPLOYMENT.md` - Complete GitHub Pages deployment guide with custom domain setup
- `.github/DEPLOYMENT_CHECKLIST.md` - Step-by-step deployment checklist

**Key deployment files**:
- `public/CNAME` - Custom domain configuration (edit with your domain)
- `public/.nojekyll` - Prevents Jekyll processing on GitHub Pages
- `.github/workflows/deploy.yml` - CI/CD pipeline configuration
- `next.config.js` - Next.js build and export settings

**Never modify**: `package-lock.json`, `out/` folder, `node_modules/`, `.next/` folder
