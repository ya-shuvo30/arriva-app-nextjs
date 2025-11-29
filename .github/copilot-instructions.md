# Arriva Soft Frontend - AI Coding Agent Instructions

## Project Overview
React 18 + TypeScript + Vite SPA showcasing Arriva Soft's multi-industry software development services. Single-file data architecture with auto-rotating hero carousels and industry-specific dashboards.

## Critical Architecture Patterns

### Single Source of Truth: `src/data.ts`
**All content lives in one file.** Never hardcode content in components—always import from `data.ts`:
- `NAV_LINKS` - Header navigation with mega-menu structure
- `HERO_SLIDES` - 5 industry-specific hero slides (auto-rotate every 8s in App.tsx)
- `EVENT_BANNERS` - Conditional banners (filtered by `isActive` in App.tsx)
- `servicesData`, `industriesData`, `techStackData` - Section content
- `fintechDashboardData`, `healthcareDashboardData`, etc. - Dashboard variants (auto-rotate every 5s in DashboardCarousel)

**Example**: To add a new service, modify `servicesData` array in `data.ts`—never edit ServicesGrid.tsx.

### Type-First Development: `src/types.ts`
All interfaces are centralized. When adding features:
1. Define the interface in `types.ts` (e.g., `Service`, `DashboardData`)
2. Add data to `data.ts` conforming to the interface
3. Components consume typed data via props

**Key interfaces**: `NavLink` (nested subLinks), `DashboardData` (dynamic metrics/timeline), `HeroContent` (carousel slides)

### Component Composition Hierarchy
```
App.tsx (state owner)
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

**State management**: `currentSlideIndex` (hero carousel) lives in App.tsx and passes down to Hero via `onSlideChange` callback. Dashboard carousel state is self-contained in DashboardCarousel.tsx.

## Critical Developer Workflows

### Development Commands
```powershell
npm run dev          # Vite dev server at localhost:5173 with HMR
npm run build        # TypeScript compilation (tsc) + Vite production build
npm run preview      # Preview production build locally
npm run lint         # ESLint with TypeScript rules
```

**Build process**: Always runs `tsc && vite build`. TypeScript errors block builds—check `tsconfig.json` for strict mode settings.

### Adding New Content (Most Common Task)
1. **New hero slide**: Add to `HERO_SLIDES` in `data.ts` → auto-appears in carousel
2. **New service/industry**: Add to respective array in `data.ts` → grid updates automatically
3. **Toggle event banner**: Set `isActive: true/false` in `EVENT_BANNERS`
4. **New dashboard variant**: Create `DashboardData` object in `data.ts`, add to `dashboards` array in DashboardCarousel.tsx

### Modifying Components
- **Never** hardcode colors—use Tailwind classes (see `tailwind.config.js` for custom animations)
- Icon imports: Use `lucide-react` (already imported in data.ts: `Code, Users, Heart, DollarSign`, etc.)
- Responsive breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px), `2xl:` (1536px)

## Project-Specific Conventions

### Styling Patterns
- **Mobile-first**: Base styles for mobile, add `md:`, `lg:` for larger screens
- **Hover effects**: `group` parent with `group-hover:` children (see Header.tsx mega-menu)
- **Transitions**: Always use `transition-all duration-300` for smooth animations
- **Spacing**: Section padding `py-16 md:py-24`, card gaps `gap-6 lg:gap-8`

### Component Patterns
1. **Auto-rotating carousels**: Use `useEffect` with `setInterval` + cleanup (see Hero.tsx line 14, DashboardCarousel.tsx line 18)
2. **Conditional rendering**: `{EVENT_BANNERS.filter(b => b.isActive).map(...)}` (App.tsx line 28)
3. **Prop callbacks**: `onSlideChange` pattern for parent-child state sync (Hero.tsx receives, App.tsx owns)
4. **Dynamic data rendering**: `ProjectOrderDashboard` accepts `DashboardData` prop to render different industry dashboards

### File Organization
- **Components**: One per file in `src/components/`, default export, typed with `React.FC`
- **Data**: All in `src/data.ts`, exported as named constants (UPPERCASE_WITH_UNDERSCORES)
- **Types**: All in `src/types.ts`, exported interfaces (PascalCase)
- **Global styles**: `src/index.css` (Tailwind directives + custom scrollbar in lines 13-28)

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
1. `src/data.ts` - Content updates
2. `src/components/*.tsx` - UI tweaks
3. `tailwind.config.js` - Design token changes
4. `src/types.ts` - New data structures

**Key files for understanding architecture**:
- `ARCHITECTURE.md` - Complete component hierarchy and data flow diagrams
- `TRANSFORMATION_SUMMARY.md` - Recent changes from fintech-only to multi-industry site
- `README.md` - Installation and feature documentation

**Never modify**: `package-lock.json`, `dist/` folder, `node_modules/`
