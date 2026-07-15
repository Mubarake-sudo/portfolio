import type { Project, Experience, Education, Certification, Service, Skill, TechStack, NavItem, SocialLink, Stat } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/Mubarake-sudo', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/mubarake-aderemou', icon: 'linkedin' },
  { platform: 'Email', url: 'mailto:mubarake.aderemou@epitech.eu', icon: 'mail' },
];

export const STATS: Stat[] = [
  { label: 'Projets livrés', value: '20', suffix: '+' },
  { label: 'Technologies', value: '35', suffix: '+' },
  { label: 'Années d\'XP', value: '3', suffix: '+' },
  { label: 'Clients satisfaits', value: '15', suffix: '+' },
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 92, category: 'Frontend' },
  { name: 'TypeScript', level: 88, category: 'Frontend' },
  { name: 'Node.js / NestJS', level: 85, category: 'Backend' },
  { name: 'Python / Flask', level: 80, category: 'Backend' },
  { name: 'PHP / Laravel', level: 78, category: 'Backend' },
  { name: 'PostgreSQL / MySQL', level: 82, category: 'Database' },
  { name: 'MongoDB', level: 80, category: 'Database' },
  { name: 'Docker / DevOps', level: 75, category: 'DevOps' },
  { name: 'Framer Motion', level: 88, category: 'Frontend' },
  { name: 'Three.js / R3F', level: 72, category: 'Frontend' },
  { name: 'TailwindCSS', level: 95, category: 'Frontend' },
  { name: 'React Native', level: 76, category: 'Mobile' },
  { name: 'Flutter', level: 78, category: 'Mobile' }
];

export const TECH_STACK: TechStack[] = [
  { name: 'Next.js', icon: 'nextjs', category: 'Frontend' },
  { name: 'React', icon: 'react', category: 'Frontend' },
  { name: 'TypeScript', icon: 'typescript', category: 'Frontend' },
  { name: 'JavaScript', icon: 'javascript', category: 'Frontend' },
  { name: 'TailwindCSS', icon: 'tailwindcss', category: 'Frontend' },
  { name: 'HTML5', icon: 'html5', category: 'Frontend' },
  { name: 'CSS3', icon: 'css3', category: 'Frontend' },
  { name: 'Sass', icon: 'sass', category: 'Frontend' },
  { name: 'Bootstrap', icon: 'bootstrap', category: 'Frontend' },
  { name: 'Vue.js', icon: 'vuejs', category: 'Frontend' },
  { name: 'Nuxt.js', icon: 'nuxtjs', category: 'Frontend' },
  { name: 'React Native', icon: 'react', category: 'Mobile' },
  { name: 'flutter', icon: 'flutter', category: 'Mobile' },
  { name: 'Node.js', icon: 'nodejs', category: 'Backend' },
  { name: 'NestJS', icon: 'nestjs', category: 'Backend' },
  { name: 'Express', icon: 'express', category: 'Backend' },
  { name: 'PHP', icon: 'php', category: 'Backend' },
  { name: 'Laravel', icon: 'laravel', category: 'Backend' },
  { name: 'Python', icon: 'python', category: 'Backend' },
  { name: 'Flask', icon: 'flask', category: 'Backend' },
  { name: 'C', icon: 'c', category: 'Backend' },
  { name: 'PostgreSQL', icon: 'postgresql', category: 'Database' },
  { name: 'MySQL', icon: 'mysql', category: 'Database' },
  { name: 'MongoDB', icon: 'mongodb', category: 'Database' },
  { name: 'SQLite', icon: 'sqlite', category: 'Database' },
  { name: 'Redis', icon: 'redis', category: 'Database' },
  { name: 'Docker', icon: 'docker', category: 'DevOps' },
  { name: 'Git', icon: 'git', category: 'DevOps' },
  { name: 'Linux', icon: 'linux', category: 'DevOps' },
  { name: 'Vercel', icon: 'vercel', category: 'DevOps' },
  { name: 'Heroku', icon: 'heroku', category: 'DevOps' },
  { name: 'Chart.js', icon: 'chartjs', category: 'Library' },
  { name: 'Jest', icon: 'jest', category: 'Testing' },
  { name: 'Redux', icon: 'redux', category: 'Library' },
  { name: 'Figma', icon: 'figma', category: 'Design' },
  { name: 'Photoshop', icon: 'photoshop', category: 'Design' },
  { name: 'Postman', icon: 'postman', category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 'yowl',
    title: 'YOWL – Social URL Platform',
    description: 'Plateforme sociale permettant de commenter et partager des URLs. Architecture Full Stack avec authentification, feed temps réel et dashboard admin.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind'],
    image: '/images/projects/yowl.jpg',
    github: 'https://github.com/Mubarake-sudo/yowl',
    featured: true,
    year: 2025,
  },
  {
    id: 'freeads',
    title: 'FreeAds – Marketplace',
    description: 'Marketplace d\'annonces classées avec CRUD complet, gestion d\'images, authentification sécurisée et interface moderne responsive.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    image: '/images/projects/freeads.jpg',
    github: 'https://github.com/Mubarake-sudo/freeAds',
    featured: true,
    year: 2025,
  },
  {
    id: 'concert-booking',
    title: 'Concert Booking Platform',
    description: 'Application de réservation de concerts avec gestion des billets, authentification, favoris et analytics. Backend NestJS, frontend moderne.',
    technologies: ['NestJS', 'MongoDB', 'TypeScript', 'HTML/CSS'],
    image: '/images/projects/concert.jpg',
    github: 'https://github.com/Mubarake-sudo',
    featured: true,
    year: 2025,
  },
  {
    id: 'dashboard',
    title: 'Admin Dashboard',
    description: 'Tableau de bord d\'administration avec Docker Compose, visualisations de données en temps réel et interface glassmorphism.',
    technologies: ['React', 'Docker', 'Chart.js', 'NestJS'],
    image: '/images/projects/dashboard.jpg',
    github: 'https://github.com/Mubarake-sudo',
    featured: false,
    year: 2025,
  },
  {
    id: 'transfer-app',
    title: 'Transfer On Line',
    description: 'Application mobile de transfert d\'argent avec gestion des opérateurs (Moov, Orange), UI premium et intégration paiement.',
    technologies: ['React Native', 'TypeScript', 'Redux'],
    image: '/images/projects/transfer.jpg',
    github: 'https://github.com/Mubarake-sudo',
    featured: false,
    year: 2025,
  },
  {
    id: 'jb-creation',
    title: 'JB CRÉATION – Portfolio Agence',
    description: 'Portfolio immersif pour agence de communication ivoirienne avec animations cinématiques, glassmorphism et animations Framer Motion.',
    technologies: ['Next.js', 'Framer Motion', 'TailwindCSS', 'Three.js'],
    image: '/images/projects/jb.jpg',
    github: 'https://github.com/Mubarake-sudo',
    demo: '#',
    featured: true,
    year: 2025,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'mubadev',
    company: 'MUBADEV',
    role: 'Fondateur & Digital Builder',
    period: '2023 – Présent',
    description: [
      'Création et livraison d\'applications web et mobiles pour des clients en Afrique et en Europe.',
      'Développement de solutions Full Stack sur mesure avec Next.js, React, Node.js et Laravel.',
      'Conception UI/UX premium et intégration d\'animations avancées (Framer Motion, Three.js).',
      'Gestion de projets end-to-end : de la conception au déploiement sur Vercel/Heroku.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Laravel', 'PostgreSQL'],
    current: true,
  },
  {
    id: 'moobicom',
    company: 'MOOBICOM',
    role: 'Digital Communication Specialist',
    period: '2025 – 2026',
    description: [
      'Community Management multi-plateformes (Instagram, LinkedIn, TikTok, Facebook).',
      'Création et montage de vidéos IA pour campagnes digitales (Runway, Sora, CapCut).',
      'Prospection à froid et qualification de leads B2B via LinkedIn Sales Navigator.',
      'Emailing partenaires et suivi CRM avec segmentation et automatisation.',
      'Communication digitale et développement de la notoriété de marque.',
    ],
    technologies: ['Figma', 'Photoshop', 'CapCut', 'Canva', 'HubSpot'],
    current: false,
  },
];

export const EDUCATION: Education[] = [
  {
    id: 'epitech',
    institution: 'EPITECH Technology',
    degree: 'Expert en Technologies de l\'Information (BAC+5)',
    period: '2022 – 2027',
    description: 'Formation intensive en développement logiciel, architecture système, gestion de projet agile et innovation technologique. Projets concrets en équipe avec méthodologie professionnelle.',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'Full Stack Web Development',
    issuer: 'FreeCodeCamp',
    date: '2024',
    url: '#',
  },
  {
    id: 'cert-2',
    title: 'React & Next.js Advanced',
    issuer: 'Udemy',
    date: '2024',
    url: '#',
  },
  {
    id: 'cert-3',
    title: 'Docker & DevOps Fundamentals',
    issuer: 'Udemy',
    date: '2025',
    url: '#',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Développement Web Full Stack',
    description: 'Applications web modernes, performantes et scalables avec les dernières technologies.',
    icon: 'code',
    features: ['Next.js / React', 'API REST & GraphQL', 'Base de données', 'Déploiement Vercel'],
  },
  {
    id: 'mobile',
    title: 'Application Mobile',
    description: 'Applications mobiles cross-platform natives avec React Native pour iOS et Android.',
    icon: 'smartphone',
    features: ['React Native', 'Expo', 'Navigation', 'Push Notifications'],
  },
  {
    id: 'ui-ux',
    title: 'Design UI/UX Premium',
    description: 'Interfaces élégantes et expériences utilisateur qui convertissent et impressionnent.',
    icon: 'palette',
    features: ['Prototypage Figma', 'Design System', 'Animations', 'Responsive'],
  },
  {
    id: 'devops',
    title: 'DevOps & Déploiement',
    description: 'Infrastructure cloud, containerisation et CI/CD pour une mise en production sans friction.',
    icon: 'server',
    features: ['Docker', 'CI/CD', 'Vercel / Heroku', 'Monitoring'],
  },
  {
    id: 'consulting',
    title: 'Consulting Digital',
    description: 'Audit technique, architecture logicielle et accompagnement stratégique pour vos projets.',
    icon: 'briefcase',
    features: ['Audit code', 'Architecture', 'Migration', 'Formation'],
  },
  {
    id: 'community',
    title: 'Community Management',
    description: 'Gestion de vos réseaux sociaux, création de contenu IA et stratégie digitale complète.',
    icon: 'megaphone',
    features: ['Réseaux sociaux', 'Vidéos IA', 'Emailing', 'Analytics'],
  },
];
