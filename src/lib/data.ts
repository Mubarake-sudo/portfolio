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
  { name: 'React Native', category: 'Mobile' }, { name: 'Docker', category: 'Frontend' },
  { name: 'Git', category: 'Outils' }, { name: 'GitHub', category: 'Outils' },
];

export const TECH_STACK: TechStack[] = [
  { name: 'HTML', icon: 'html5', category: 'Frontend' }, { name: 'CSS', icon: 'css3', category: 'Frontend' },
  { name: 'JavaScript', icon: 'javascript', category: 'Frontend' }, { name: 'TypeScript', icon: 'typescript', category: 'Frontend' },
  { name: 'React', icon: 'react', category: 'Frontend' }, { name: 'Vue.js', icon: 'vuejs', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', category: 'Frontend' }, { name: 'Bootstrap', icon: 'bootstrap', category: 'Frontend' },
  { name: 'Flutter', icon: 'flutter', category: 'Mobile' }, { name: 'Dart', icon: 'dart', category: 'Mobile' },
  { name: 'React Native', icon: 'react-native', category: 'Mobile' }, { name: 'Docker', icon: 'docker', category: 'Frontend' },
  { name: 'PHP', icon: 'php', category: 'Backend' }, { name: 'Laravel', icon: 'laravel', category: 'Backend' },
  { name: 'Python', icon: 'python', category: 'Backend' }, { name: 'Django', icon: 'django', category: 'Backend' },
  { name: 'Flask', icon: 'flask', category: 'Backend' }, { name: 'Node.js', icon: 'nodejs', category: 'Backend' },
  { name: 'NestJS', icon: 'nestjs', category: 'Backend' }, { name: 'MySQL', icon: 'mysql', category: 'Database' },
  { name: 'MongoDB', icon: 'mongodb', category: 'Database' }, { name: 'PostgreSQL', icon: 'postgresql', category: 'Database' },
  { name: 'Git', icon: 'git', category: 'Outils' }, { name: 'GitHub', icon: 'github', category: 'Outils' },
];

export const PROJECTS: Project[] = [
  {
    id: 'mycontacts',
    title: 'MyContacts',
    description: "MyContacts est une application web développée avec Vue.js 3 permettant de gérer un carnet de contacts. Les données sont persistées via une API REST (JSON Server).",
    technologies: ['Vue.js 3', 'Vite', 'Vue Router', 'Tailwind CSS', 'Bootstrap', 'JSON Server', 'REST API'],
    demo: 'https://contact-api-mubadev.vercel.app/contacts',
    image: '/Contact api.png',
    featured: true,
  },
  {
    id: 'post-it',
    title: 'Post-it App',
    description: 'Application web permettant de créer, consulter, modifier et supprimer des notes / Post-it.',
    technologies: ['Vue.js', 'TypeScript', 'REST API', 'Tailwind CSS'],
    demo: 'https://positproject.vercel.app/',
    image: '/post It.png',
    featured: true,
  },
  {
    id: 'furniture-shop',
    title: 'Furniture Shop',
    description: "Furniture Shop est une boutique e-commerce responsive développée uniquement avec HTML, CSS et JavaScript.",
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Algolia Search'],
    demo: 'https://boutique-e-commerce-statique.vercel.app/',
    image: '/Furniture Shop.png',
    featured: true,
  },
  {
    id: 'linkora',
    title: 'Linkora',
    description: "Plateforme sociale permettant aux utilisateurs de partager des URLs, d'interagir avec les publications et de découvrir du contenu partagé.",
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
    image: '/Linkora — Social URL Platform.png',
    featured: false,
  },
  {
    id: 'vortexads',
    title: 'VortexADS',
    description: 'Marketplace d\u2019annonces permettant aux utilisateurs de publier et consulter des annonces à travers une interface web responsive.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    image: '/VortexADS au lieu de FreeADS.png',
    featured: false,
  },
  {
    id: 'concert-booking',
    title: 'Concert Booking Platform',
    description: 'Application de réservation de concerts avec gestion des billets, authentification, favoris et fonctionnalités d\u2019analyse.',
    technologies: ['NestJS', 'MongoDB', 'TypeScript', 'HTML/CSS'],
    featured: false,
  },
];

export const EXPERIENCES: Experience[] = [];

export const EDUCATION: Education[] = [
  { id: 'bac', institution: 'Baccalauréat D', degree: 'Baccalauréat D', period: '2022' },
  { id: 'bts', institution: 'Formation en informatique — diplôme validé en 2025', degree: 'BTS en Informatique – Développeur d’Applications', period: '2025' },
  { id: 'wecode', institution: 'WeCode by Epitech', degree: 'Formation Fullstack — WeCode by Epitech', period: 'Janvier 2026 – Juillet 2026' },
];