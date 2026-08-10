import type { Project, Experience, Education, Skill, TechStack, NavItem, SocialLink } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Parcours', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/Mubarake-sudo', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/mubarake-aderemou-25a05a417/', icon: 'linkedin' },
  { platform: 'Email', url: 'mailto:mubarake.aderemou@epitech.eu', icon: 'mail' },
];

export const SKILLS: Skill[] = [
  { name: 'HTML', category: 'Frontend' }, { name: 'CSS', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' }, { name: 'TypeScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' }, { name: 'Vue.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' }, { name: 'Bootstrap', category: 'Frontend' },
  { name: 'PHP', category: 'Backend' }, { name: 'Laravel', category: 'Backend' },
  { name: 'Python', category: 'Backend' }, { name: 'Django', category: 'Backend' },
  { name: 'Flask', category: 'Backend' }, { name: 'Node.js', category: 'Backend' },
  { name: 'NestJS', category: 'Backend' }, { name: 'Flutter', category: 'Mobile' },
  { name: 'Dart', category: 'Mobile' }, { name: 'MySQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' }, { name: 'PostgreSQL', category: 'Database' },
  { name: 'Git', category: 'Outils' }, { name: 'GitHub', category: 'Outils' },
];

export const TECH_STACK: TechStack[] = [
  { name: 'HTML', icon: 'html5', category: 'Frontend' }, { name: 'CSS', icon: 'css3', category: 'Frontend' },
  { name: 'JavaScript', icon: 'javascript', category: 'Frontend' }, { name: 'TypeScript', icon: 'typescript', category: 'Frontend' },
  { name: 'React', icon: 'react', category: 'Frontend' }, { name: 'Vue.js', icon: 'vuejs', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', category: 'Frontend' }, { name: 'Bootstrap', icon: 'bootstrap', category: 'Frontend' },
  { name: 'Flutter', icon: 'flutter', category: 'Mobile' }, { name: 'Dart', icon: 'dart', category: 'Mobile' },
  { name: 'PHP', icon: 'php', category: 'Backend' }, { name: 'Laravel', icon: 'laravel', category: 'Backend' },
  { name: 'Python', icon: 'python', category: 'Backend' }, { name: 'Django', icon: 'django', category: 'Backend' },
  { name: 'Flask', icon: 'flask', category: 'Backend' }, { name: 'Node.js', icon: 'nodejs', category: 'Backend' },
  { name: 'NestJS', icon: 'nestjs', category: 'Backend' }, { name: 'MySQL', icon: 'mysql', category: 'Database' },
  { name: 'MongoDB', icon: 'mongodb', category: 'Database' }, { name: 'PostgreSQL', icon: 'postgresql', category: 'Database' },
  { name: 'Git', icon: 'git', category: 'Outils' }, { name: 'GitHub', icon: 'github', category: 'Outils' },
];

export const PROJECTS: Project[] = [
  {
    id: 'yowl', title: 'YOWL – Social URL Platform',
    description: 'Plateforme sociale permettant de commenter et partager des URLs, avec authentification, feed et dashboard administrateur.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'], featured: true,
  },
  {
    id: 'freeads', title: 'FreeAds – Marketplace',
    description: 'Marketplace d’annonces classées avec CRUD, gestion d’images, authentification et interface responsive.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'], featured: true,
  },
  {
    id: 'concert-booking', title: 'Concert Booking Platform',
    description: 'Application de réservation de concerts avec gestion des billets, authentification, favoris et analytics.',
    technologies: ['NestJS', 'MongoDB', 'TypeScript', 'HTML/CSS'], featured: true,
  },
  {
    id: 'post-it', title: 'Post-It App',
    description: 'Projet académique réalisé dans le cadre de la formation Fullstack WeCode by Epitech.',
    technologies: ['Vue.js', 'TypeScript', 'API REST', 'Tailwind CSS'], featured: true,
  },
];

export const EXPERIENCES: Experience[] = [
  { id: 'moobicom', company: 'MOOBICOM', role: 'Expérience professionnelle', period: '2025 – 2026', description: [], current: false },
];

export const EDUCATION: Education[] = [
  { id: 'bts', institution: 'Formation en informatique', degree: 'BTS en Informatique – Développeur d’Applications', period: 'Date non précisée' },
  { id: 'bac', institution: 'Baccalauréat D', degree: 'Baccalauréat D', period: '2022' },
  { id: 'wecode', institution: 'WeCode by Epitech', degree: 'Formation Fullstack', period: 'Janvier 2026 – Juillet 2026' },
];