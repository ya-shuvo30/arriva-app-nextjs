import {
  Code,
  Users,
  Zap,
  Cpu,
  Layout,
  TrendingUp,
  DollarSign,
  Heart,
  Building,
  GraduationCap,
  Truck,
  Home,
  Briefcase,
  Cloud,
  PenTool,
} from "lucide-react";
import type {
  NavLink,
  HeroContent,
  EventBanner,
  ServiceCard,
  FooterLinks,
} from "./types";

// Navigation Data
export const NAV_LINKS: NavLink[] = [
  {
    label: "Services",
    href: "#",
    subLinks: [
      {
        label: "Custom Software",
        href: "#",
        description: "Build bespoke, scalable, and secure applications.",
        icon: Code,
      },
      {
        label: "Dedicated Team & Hiring",
        href: "#",
        description:
          "Scale your team with top remote talent & talent acquisition.",
        icon: Users,
      },
      {
        label: "Technology Consulting",
        href: "#",
        description: "Strategic R&D and future-proofing your technology stack.",
        icon: Zap,
      },
      {
        label: "AI & Data Science",
        href: "#",
        description:
          "Implement machine learning models for predictive insights.",
        icon: Cpu,
      },
      {
        label: "UX/UI Design",
        href: "#",
        description:
          "Create intuitive and high-converting product experiences.",
        icon: Layout,
      },
      {
        label: "Cloud & DevOps",
        href: "#",
        description:
          "Achieve faster deployment and robust cloud infrastructure.",
        icon: TrendingUp,
      },
    ],
  },
  {
    label: "Industries",
    href: "#",
    subLinks: [
      {
        label: "Fintech",
        href: "#",
        description: "Solutions for banking, payments, and wealth management.",
        icon: DollarSign,
      },
      {
        label: "Healthcare",
        href: "#",
        description: "Digital tools for patient care, records, and compliance.",
        icon: Heart,
      },
      {
        label: "eCommerce",
        href: "#",
        description: "High-volume, engaging platforms and market places.",
        icon: Building,
      },
      {
        label: "EdTech",
        href: "#",
        description: "Learning platforms and educational content management.",
        icon: GraduationCap,
      },
      {
        label: "Logistics",
        href: "#",
        description: "Tracking, routing, and supply chain optimization.",
        icon: Truck,
      },
      {
        label: "Real Estate",
        href: "#",
        description: "Property management and sales platforms.",
        icon: Home,
      },
    ],
  },
  { label: "Products", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Global Offices", href: "#" },
  { label: "Schedule a Call", href: "#", isButton: true },
];

// Dynamic Hero Content Data
export const HERO_SLIDES: HeroContent[] = [
  // 0: General Software Development
  {
    id: 0,
    headline: "Custom Software Solutions That Transform Your Business",
    subtext:
      "From fintech to healthcare, e-commerce to enterprise—we build scalable, production-ready solutions with ISO-certified teams.",
    ctaText: "Book A Demo",
    ctaHref: "https://calendly.com/meeting-brainstation-23/30min",
    stat1Value: "6",
    stat1Label: "Global Offices",
    stat2Value: "ISO 27001",
    stat2Label: "Certified Teams",
    imageUrl:
      "https://placehold.co/400x300/F0F9FF/0B69FF?text=Software+Solutions",
    imageAlt: "Custom software development solutions showcase",
  },
  // 1: Fintech Focus
  {
    id: 1,
    headline: "Launch Fintech Solutions in 90 Days",
    subtext:
      "Payment gateways, wallets & banking apps—compliant and scalable for modern financial services.",
    ctaText: "Book A Demo",
    ctaHref: "https://calendly.com/meeting-brainstation-23/30min",
    stat1Value: "45+",
    stat1Label: "Fintech Projects",
    stat2Value: "ISO 27001",
    stat2Label: "Certified",
    imageUrl:
      "https://placehold.co/400x300/F0F9FF/0B69FF?text=Fintech+Dashboard",
    imageAlt: "Fintech payment dashboard",
  },
  // 2: Healthcare Focus
  {
    id: 2,
    headline: "Healthcare Software That Saves Lives",
    subtext:
      "Patient management, telemedicine & health analytics solutions built for modern healthcare providers.",
    ctaText: "Schedule a Call",
    ctaHref: "#schedule",
    stat1Value: "32+",
    stat1Label: "Healthcare Projects",
    stat2Value: "HIPAA",
    stat2Label: "Compliant",
    imageUrl:
      "https://placehold.co/400x300/E0F2FE/0EA5E9?text=Healthcare+Platform",
    imageAlt: "Healthcare management platform",
  },
  // 3: E-commerce Focus
  {
    id: 3,
    headline: "E-commerce Platforms That Convert",
    subtext:
      "Custom online stores, marketplaces & shopping experiences that drive revenue and customer loyalty.",
    ctaText: "View Case Studies",
    ctaHref: "#case-studies",
    stat1Value: "58+",
    stat1Label: "E-commerce Projects",
    stat2Value: "99.9%",
    stat2Label: "Uptime",
    imageUrl:
      "https://placehold.co/400x300/FEF3C7/F59E0B?text=E-commerce+Store",
    imageAlt: "E-commerce platform showcase",
  },
  // 4: Enterprise Focus
  {
    id: 4,
    headline: "Enterprise Solutions That Scale",
    subtext:
      "CRM, ERP & business automation for modern companies looking to streamline operations and boost productivity.",
    ctaText: "Hire Your Team",
    ctaHref: "#hire",
    stat1Value: "67+",
    stat1Label: "Enterprise Projects",
    stat2Value: "850+",
    stat2Label: "Developers",
    imageUrl:
      "https://placehold.co/400x300/EDE9FE/8B5CF6?text=Enterprise+Platform",
    imageAlt: "Enterprise management system",
  },
];

// Event Banner Data
export const EVENT_BANNERS: EventBanner[] = [
  {
    id: 100,
    title: "Meet us at GITEX GLOBAL 2025!",
    description:
      "Experience the future of technology firsthand! Visit our booth to see our latest innovations in digital transformation.",
    ctaText: "Visit us",
    ctaHref: "#gitex",
    isActive: true,
  },
];

// Services Grid Data (UPDATED to include Technology and Hiring options)
export const SERVICES_DATA: ServiceCard[] = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Design and build customized, scalable, and secure software applications from scratch.",
    href: "#",
  },
  {
    icon: Zap,
    title: "Technology & R&D Consulting",
    description:
      "Strategic roadmap planning, architecture review, and next-generation technology adoption.",
    href: "#",
  },
  {
    icon: Users,
    title: "Dedicated Development Team",
    description:
      "Scale your in-house team with our dedicated offshore/nearshore engineering talents quickly.",
    href: "#",
  },
  {
    icon: Briefcase,
    title: "Talent Acquisition & Hiring",
    description:
      "Find, vet, and onboard top-tier tech professionals for direct, full-time employment.",
    href: "#",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Accelerate deployment, optimize performance, and ensure reliability with robust cloud infrastructure.",
    href: "#",
  },
  {
    icon: Cpu,
    title: "AI & Data Science",
    description:
      "Harness the power of data through machine learning, predictive analytics, and business intelligence.",
    href: "#",
  },
  {
    icon: PenTool,
    title: "UX/UI & Product Design",
    description:
      "Create intuitive, high-converting, and delightful user experiences through human-centered design.",
    href: "#",
  },
  {
    icon: TrendingUp,
    title: "Enterprise Solutions (ERP/CRM)",
    description:
      "Implement and customize powerful enterprise resource planning and customer relationship management systems.",
    href: "#",
  },
];

// Footer Links Data
export const FOOTER_LINKS: FooterLinks = {
  services: [
    "Custom Software",
    "Technology Consulting",
    "Dedicated Team",
    "Talent Acquisition & Hiring",
    "Cloud & DevOps",
    "AI & Data Science",
    "UX/UI Design",
    "Enterprise Solutions",
  ],
  industries: [
    "Fintech",
    "eCommerce",
    "Healthcare",
    "EdTech",
    "Logistics",
    "Real Estate",
  ],
  company: [
    "About Us",
    "Case Studies",
    "Global Offices",
    "Careers",
    "Contact",
    "Blog",
  ],
};

// Project Order Dashboard Data
export const projectOrderData = {
  stats: {
    total: 324,
    completed: 40,
    inProgress: 35,
    pending: 15,
    onHold: 10,
  },
  metrics: [
    {
      label: "Average Order Value",
      value: "$18,542",
      change: "8.2",
      trend: "up" as const,
      icon: "dollar",
    },
    {
      label: "Active Projects",
      value: "127",
      change: "15.3",
      trend: "up" as const,
      icon: "check",
    },
    {
      label: "Completion Rate",
      value: "92.5%",
      change: "3.1",
      trend: "up" as const,
      icon: "clock",
    },
  ],
  timeline: [
    { quarter: "Q1", progress: 80 },
    { quarter: "Q2", progress: 90 },
    { quarter: "Q3", progress: 70 },
  ],
};

// Dashboard Data - Fintech
export const fintechDashboardData = {
  title: "Project Order Analysis",
  stats: {
    total: 324,
    completed: 40,
    inProgress: 35,
    pending: 15,
    onHold: 10,
  },
  metrics: [
    {
      label: "Average Order Value",
      value: "$18,542",
      change: "8.2",
      trend: "up" as const,
      icon: "dollar",
    },
    {
      label: "Active Projects",
      value: "127",
      change: "15.3",
      trend: "up" as const,
      icon: "check",
    },
    {
      label: "Completion Rate",
      value: "92.5%",
      change: "3.1",
      trend: "up" as const,
      icon: "clock",
    },
  ],
  timeline: [
    { period: "Q1", progress: 80 },
    { period: "Q2", progress: 90 },
    { period: "Q3", progress: 70 },
  ],
  colors: {
    completed: "#10b981",
    inProgress: "#3b82f6",
    pending: "#f59e0b",
    onHold: "#8b5cf6",
  },
};

// Dashboard Data - Healthcare
export const healthcareDashboardData = {
  title: "Patient Care Analytics",
  stats: {
    total: 1847,
    active: 45,
    completed: 38,
    scheduled: 12,
    cancelled: 5,
  },
  metrics: [
    {
      label: "Patient Satisfaction",
      value: "94.8%",
      change: "5.2",
      trend: "up" as const,
      icon: "heart",
    },
    {
      label: "Active Appointments",
      value: "342",
      change: "12.7",
      trend: "up" as const,
      icon: "calendar",
    },
    {
      label: "Treatment Completion",
      value: "89.3%",
      change: "3.8",
      trend: "up" as const,
      icon: "check",
    },
  ],
  timeline: [
    { period: "Week 1", progress: 85 },
    { period: "Week 2", progress: 92 },
    { period: "Week 3", progress: 88 },
  ],
  colors: {
    active: "#0ea5e9",
    completed: "#10b981",
    scheduled: "#14b8a6",
    cancelled: "#8b5cf6",
  },
};

// Dashboard Data - E-commerce
export const ecommerceDashboardData = {
  title: "Sales Performance Dashboard",
  stats: {
    total: 5420,
    completed: 48,
    processing: 32,
    pending: 15,
    cancelled: 5,
  },
  metrics: [
    {
      label: "Total Revenue",
      value: "$284.5K",
      change: "18.4",
      trend: "up" as const,
      icon: "dollar",
    },
    {
      label: "Active Orders",
      value: "1,734",
      change: "22.1",
      trend: "up" as const,
      icon: "shopping",
    },
    {
      label: "Conversion Rate",
      value: "3.8%",
      change: "0.8",
      trend: "up" as const,
      icon: "trending",
    },
  ],
  timeline: [
    { period: "Jan", progress: 75 },
    { period: "Feb", progress: 88 },
    { period: "Mar", progress: 92 },
  ],
  colors: {
    completed: "#3b82f6",
    processing: "#10b981",
    pending: "#f59e0b",
    cancelled: "#ef4444",
  },
};

// Dashboard Data - Enterprise
export const enterpriseDashboardData = {
  title: "Team Productivity Analytics",
  stats: {
    total: 156,
    inProgress: 42,
    completed: 38,
    review: 18,
    blocked: 8,
  },
  metrics: [
    {
      label: "Team Efficiency",
      value: "87.2%",
      change: "6.5",
      trend: "up" as const,
      icon: "users",
    },
    {
      label: "Active Sprints",
      value: "24",
      change: "9.1",
      trend: "up" as const,
      icon: "zap",
    },
    {
      label: "On-Time Delivery",
      value: "91.5%",
      change: "4.2",
      trend: "up" as const,
      icon: "clock",
    },
  ],
  timeline: [
    { period: "Sprint 1", progress: 82 },
    { period: "Sprint 2", progress: 95 },
    { period: "Sprint 3", progress: 87 },
  ],
  colors: {
    inProgress: "#3b82f6",
    completed: "#10b981",
    review: "#eab308",
    blocked: "#64748b",
  },
};

// Services Data
export const servicesData = [
  {
    icon: "💻",
    title: "Web Application Development",
    description:
      "Custom web apps built with React, Next.js, Vue, and Angular for modern businesses.",
    link: "/services/web-development",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Native iOS, Android, and cross-platform apps using React Native and Flutter.",
    link: "/services/mobile-development",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps Solutions",
    description:
      "AWS, Azure, GCP infrastructure setup, CI/CD pipelines, and cloud migration.",
    link: "/services/cloud-devops",
  },
  {
    icon: "🔗",
    title: "API & Integration Services",
    description:
      "RESTful APIs, GraphQL, microservices architecture, and third-party integrations.",
    link: "/services/api-integration",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "User-centered design, wireframing, prototyping, and design system development.",
    link: "/services/ui-ux-design",
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions with ML models, NLP, computer vision, and AI automation.",
    link: "/services/ai-ml",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity & Compliance",
    description:
      "ISO 27001 certified security audits, penetration testing, and compliance solutions.",
    link: "/services/security",
  },
  {
    icon: "🧪",
    title: "QA & Testing Services",
    description:
      "Automated testing, manual QA, performance testing, and quality assurance.",
    link: "/services/qa-testing",
  },
];

// Industries Data
export const industriesData = [
  {
    name: "Fintech & Banking",
    description:
      "Payment gateways, digital wallets, banking apps, and compliance solutions.",
    icon: "💳",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    projects: "45+ projects",
    caseStudy: "/case-studies/fintech",
  },
  {
    name: "Healthcare & Medical",
    description:
      "Telemedicine platforms, patient management systems, and health analytics.",
    icon: "🏥",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    projects: "32+ projects",
    caseStudy: "/case-studies/healthcare",
  },
  {
    name: "E-commerce & Retail",
    description:
      "Online stores, marketplaces, inventory management, and customer analytics.",
    icon: "🛍️",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    projects: "58+ projects",
    caseStudy: "/case-studies/ecommerce",
  },
  {
    name: "Enterprise & SaaS",
    description:
      "CRM, ERP, project management tools, and business automation platforms.",
    icon: "🏢",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    projects: "67+ projects",
    caseStudy: "/case-studies/enterprise",
  },
];

// Tech Stack Data
export const techStackData = {
  frontend: [
    "React",
    "Next.js",
    "Vue",
    "Angular",
    "TypeScript",
    "Tailwind CSS",
  ],
  backend: ["Node.js", "Python", "Java", "PHP", ".NET", "Go"],
  mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
  cloud: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "DynamoDB"],
  tools: ["Git", "Jenkins", "Jira", "Figma", "Postman"],
};
