import { ElementType } from "react";

// Define the structure for a single sub-link within a dropdown
export interface SubLink {
  label: string;
  href: string;
  description: string;
  icon?: ElementType;
}

// Define the structure for the navigation links
export interface NavLink {
  label: string;
  href: string;
  isButton?: boolean;
  subLinks?: SubLink[];
}

// Define the structure for the Hero Section content (different slides)
export interface HeroContent {
  id: number;
  headline: string;
  subtext: string;
  ctaText: string;
  ctaHref: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  imageUrl: string;
  imageAlt: string;
}

// Define the structure for the conditionally displayed Event Banners
export interface EventBanner {
  id: number;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  isActive: boolean;
}

// Define the structure for a Service Card
export interface ServiceCard {
  icon: ElementType;
  title: string;
  description: string;
  href: string;
}

// Define the structure for Project Order Statistics
export interface OrderStats {
  total: number;
  completed: number;
  inProgress: number;
  pending: number;
  onHold: number;
}

// Define the structure for Project Metrics
export interface ProjectMetric {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: string;
}

// Define the structure for Timeline Periods
export interface TimelinePeriod {
  period: string;
  progress: number;
}

// Define the structure for Dashboard Data
export interface DashboardData {
  title: string;
  stats: {
    total: number;
    [key: string]: number;
  };
  metrics: ProjectMetric[];
  timeline: TimelinePeriod[];
  colors: {
    [key: string]: string;
  };
}

// Define the structure for Service
export interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
}

// Define the structure for Industry
export interface Industry {
  name: string;
  description: string;
  icon: string;
  bgColor: string;
  textColor: string;
  projects: string;
  caseStudy: string;
}

// Define the structure for Tech Stack Category
export interface TechCategory {
  name: string;
  technologies: string[];
}

// Define the structure for Footer Links
export interface FooterLinks {
  services: string[];
  industries: string[];
  company: string[];
}
