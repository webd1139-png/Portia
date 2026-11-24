export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  categoryLabel: string;
  status: "completed" | "prototype" | "concept";
  statusLabel: string;
  coverImage: string;
  galleryImages: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  technologies: string[];
  challenges: string[];
  approach: string;
  functionality: string[];
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
  icon: string;
  color: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "ai";
  level: "comfortable" | "developing" | "exploring";
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
