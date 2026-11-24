import type { Project, Service, Skill, NavItem, SocialLink } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Expertise", href: "/expertise" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/", icon: "Github", color: "text-white" },
  { label: "LinkedIn", url: "https://linkedin.com/", icon: "Linkedin", color: "text-primary" },
  { label: "Twitter", url: "https://twitter.com/", icon: "X", color: "text-cyan" },
  { label: "Email", url: "mailto:hello@borgtech.dev", icon: "Mail", color: "text-muted" },
];

export const SERVICES: Service[] = [
  {
    id: "website-development",
    title: "Website Development",
    description:
      "Professional, high-performance websites built for businesses of all sizes. From business websites to e-commerce platforms, hotel and restaurant sites, portfolios, landing pages, and custom web applications.",
    shortDescription:
      "Business websites, e-commerce, hotel sites, restaurant sites, portfolios, landing pages, custom web apps.",
    items: [
      "Business websites",
      "E-commerce websites",
      "Hotel websites",
      "Restaurant websites",
      "Portfolio websites",
      "Landing pages",
      "Custom web applications",
    ],
    ctaLabel: "Explore Website Development",
    ctaHref: "/contact?service=website-development",
    icon: "Globe",
    color: "text-primary",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description:
      "Intelligent digital solutions that solve real business problems. AI assistants, business tools, integrations, workflow automation, and AI prototypes.",
    shortDescription:
      "AI assistants, intelligent business tools, AI integrations, workflow automation, AI prototypes.",
    items: [
      "AI assistants",
      "Intelligent business tools",
      "AI integrations",
      "Workflow automation",
      "AI prototypes",
    ],
    ctaLabel: "Explore AI Solutions",
    ctaHref: "/contact?service=ai-solutions",
    icon: "Brain",
    color: "text-cyan",
  },
  {
    id: "seo-digital-visibility",
    title: "SEO & Digital Visibility",
    description:
      "Technical SEO, on-page optimization, website performance, and search visibility strategies that help your business get found online.",
    shortDescription:
      "Technical SEO, on-page optimization, website performance, search visibility.",
    items: [
      "Technical SEO",
      "On-page optimization",
      "Website performance",
      "Search visibility",
    ],
    ctaLabel: "Explore SEO Services",
    ctaHref: "/contact?service=seo-digital-visibility",
    icon: "Search",
    color: "text-white",
  },
  {
    id: "digital-design",
    title: "Digital Design",
    description:
      "Interface design, digital branding, business flyers, and promotional graphics crafted with intention and precision.",
    shortDescription:
      "Business flyers, promotional graphics, interface design, digital branding.",
    items: [
      "Business flyers",
      "Promotional graphics",
      "Interface design",
      "Digital branding",
    ],
    ctaLabel: "Explore Digital Design",
    ctaHref: "/contact?service=digital-design",
    icon: "Palette",
    color: "text-primary",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description:
      "Business dashboards, booking applications, customer portals, and management systems built to streamline your operations.",
    shortDescription:
      "Business dashboards, booking applications, customer portals, management systems.",
    items: [
      "Business dashboards",
      "Booking applications",
      "Customer portals",
      "Management systems",
    ],
    ctaLabel: "Explore Custom Software",
    ctaHref: "/contact?service=custom-software",
    icon: "Layers",
    color: "text-cyan",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "linkedinn-car-rental",
    title: "LinkedInn Car Rental",
    shortDescription:
      "A premium car-rental website concept designed to showcase vehicles, communicate rental services and simplify booking enquiries.",
    description:
      "LinkedInn Car Rental is a premium car-rental website concept designed to showcase vehicles, communicate rental services, and simplify booking enquiries. The platform features a comprehensive vehicle catalogue, an intuitive booking experience, WhatsApp integration for direct communication, and a digital concierge service. Built with a premium interface that emphasizes vehicle imagery and seamless user flow.",
    category: "website-development",
    categoryLabel: "Website Development",
    status: "completed",
    statusLabel: "Live Project",
    coverImage: "/projects/linkedinn-car-rental/cover.jpg",
    galleryImages: [
      "/projects/linkedinn-car-rental/gallery-1.jpg",
      "/projects/linkedinn-car-rental/gallery-2.jpg",
      "/projects/linkedinn-car-rental/gallery-3.jpg",
    ],
    liveUrl: "https://borngreat-nine.vercel.app/",
    githubUrl: undefined,
    featured: true,
    technologies: ["React", "Tailwind CSS", "JavaScript", "WhatsApp API"],
    challenges: [
      "Creating a premium vehicle showcase experience",
      "Simplifying the booking enquiry flow",
      "Integrating WhatsApp for direct customer communication",
    ],
    approach:
      "User-centred design focused on vehicle discovery and booking simplicity, with direct communication channels for enquiries.",
    functionality: [
      "Vehicle catalogue with filtering",
      "Booking enquiry system",
      "WhatsApp integration",
      "Digital concierge",
      "Premium interface design",
    ],
    createdAt: "2024-01-15",
    updatedAt: "2024-03-20",
    published: true,
  },
  {
    id: "borgsense-global",
    title: "BorgSense Global",
    shortDescription:
      "An AI-powered food market intelligence concept for tracking prices, trends, and supply-demand dynamics.",
    description:
      "BorgSense Global is an AI-powered food market intelligence concept that provides food price analytics, market trend visualization, supply and demand intelligence, and AI-driven insights for stakeholders in the food industry.",
    category: "ai-solutions",
    categoryLabel: "AI Solutions",
    status: "concept",
    statusLabel: "Concept Prototype",
    coverImage: "/projects/borgsense-global/cover.jpg",
    galleryImages: [
      "/projects/borgsense-global/gallery-1.jpg",
      "/projects/borgsense-global/gallery-2.jpg",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
    technologies: ["Python", "React", "AI/ML", "Data Visualization"],
    challenges: [
      "Processing and visualizing complex market data",
      "Delivering actionable AI insights",
      "Real-time supply-demand tracking",
    ],
    approach:
      "Data-first architecture with AI models that analyze market patterns and generate predictive insights for food market stakeholders.",
    functionality: [
      "Food price analytics",
      "Market trend visualization",
      "Supply & demand intelligence",
      "AI-generated insights",
      "Interactive data dashboards",
    ],
    createdAt: "2024-05-10",
    updatedAt: "2024-07-05",
    published: true,
  },
  {
    id: "autopilot",
    title: "Autopilot",
    shortDescription:
      "An AI-powered business operations platform concept for dashboards, workflow automation, and financial administration.",
    description:
      "Autopilot is an AI-powered business operations platform concept featuring business dashboards, workflow automation, financial administration concepts, and intelligent assistance for modern businesses.",
    category: "custom-software",
    categoryLabel: "Custom Software",
    status: "prototype",
    statusLabel: "Prototype",
    coverImage: "/projects/autopilot/cover.jpg",
    galleryImages: [
      "/projects/autopilot/gallery-1.jpg",
      "/projects/autopilot/gallery-2.jpg",
      "/projects/autopilot/gallery-3.jpg",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
    technologies: ["Next.js", "Supabase", "TypeScript", "AI Integrations"],
    challenges: [
      "Unifying business operations in one platform",
      "Automating complex workflows",
      "Real-time financial administration",
    ],
    approach:
      "Modular platform architecture with AI-driven automation at its core, enabling businesses to operate more efficiently.",
    functionality: [
      "Business dashboard",
      "Workflow automation",
      "Financial administration",
      "Intelligent assistance",
      "Operations management",
    ],
    createdAt: "2024-08-01",
    updatedAt: "2024-10-15",
    published: true,
  },
];

export const SKILLS: Skill[] = [
  { name: "HTML", category: "frontend", level: "comfortable" },
  { name: "CSS", category: "frontend", level: "comfortable" },
  { name: "JavaScript", category: "frontend", level: "comfortable" },
  { name: "TypeScript", category: "frontend", level: "comfortable" },
  { name: "React", category: "frontend", level: "comfortable" },
  { name: "Next.js", category: "frontend", level: "comfortable" },
  { name: "Tailwind CSS", category: "frontend", level: "comfortable" },
  { name: "Node.js", category: "backend", level: "comfortable" },
  { name: "Supabase", category: "backend", level: "comfortable" },
  { name: "PostgreSQL", category: "backend", level: "developing" },
  { name: "REST APIs", category: "backend", level: "comfortable" },
  { name: "Git", category: "tools", level: "comfortable" },
  { name: "GitHub", category: "tools", level: "comfortable" },
  { name: "Vercel", category: "tools", level: "comfortable" },
  { name: "VS Code", category: "tools", level: "comfortable" },
  { name: "AI Integrations", category: "ai", level: "developing" },
  { name: "Automation", category: "ai", level: "developing" },
  { name: "Prompt Engineering", category: "ai", level: "exploring" },
  { name: "Intelligent Applications", category: "ai", level: "developing" },
];

export const BIO = {
  name: "Borngreat Opoku",
  brand: "BorgTech",
  slogan: "Build • Innovate • Grow.",
  tagline: "Independent Developer & Technology Builder",
  headline: "Turning Ideas Into Exceptional Digital Experiences.",
  subheadline:
    "I'm Borngreat Opoku. I build sophisticated websites, intelligent digital solutions and innovative products that help businesses move forward.",
  biography:
    "I'm Borngreat Opoku, an independent developer passionate about technology, digital innovation and building meaningful solutions.\n\nI enjoy transforming ideas into functional digital experiences, from professional business websites to intelligent applications.\n\nMy interests span web development, artificial intelligence, automation and digital entrepreneurship.\n\nI believe great technology should not only look impressive but solve real problems.",
  positioning: [
    "Independent Web Developer",
    "AI Solutions Builder",
    "Digital Product Developer",
    "Creative Technologist",
    "Technology Entrepreneur",
  ],
  values: [
    "Intelligent",
    "Innovative",
    "Professional",
    "Ambitious",
    "Minimalist",
    "Forward-thinking",
    "Detail-oriented",
  ],
  interests: [
    "Web Development",
    "Artificial Intelligence",
    "Automation",
    "Digital Entrepreneurship",
  ],
  processHeading: "Great Products Are Built With Intention.",
  processSteps: [
    {
      step: "01",
      title: "Discover",
      description: "Understand the problem and business objectives.",
    },
    {
      step: "02",
      title: "Design",
      description: "Develop the visual experience and architecture.",
    },
    {
      step: "03",
      title: "Build",
      description: "Engineer the working solution.",
    },
    {
      step: "04",
      title: "Launch",
      description: "Test, optimize and deploy.",
    },
  ],
  contactHeading: "Let's Build Something Meaningful.",
  contactSubheading:
    "Have an idea, a business challenge or a digital product in mind? Let's explore how technology can bring it to life.",
  fallbackMessage:
    "Built With Curiosity. Driven By Possibility.",
};

export const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "borngreat";
