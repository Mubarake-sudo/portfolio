# 🚀 MUBADEV Portfolio

> Portfolio professionnel de **Mubarake Aderemou** — Développeur Full Stack | EPITECH Technology

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?logo=framer)](https://www.framer.com/motion)

## ✨ Aperçu

Application portfolio **premium** construite avec les dernières technologies web. Style Apple/Vercel/Linear, animations élégantes, design glassmorphism et performance Lighthouse >95.

## 🛠️ Stack Technique

| Couche | Technologies |
|--------|-------------|
| **Frontend** | Next.js 15 (App Router), React 19, TypeScript strict |
| **Styling** | TailwindCSS 3, CSS personnalisé, Glassmorphism |
| **Animations** | Framer Motion 11 |
| **3D & Particles** | Canvas API (particle system) |
| **Icons** | Lucide React |
| **Fonts** | Inter (Google Fonts) |
| **Déploiement** | Vercel |

## 📁 Architecture

```
src/
├── app/               # App Router (layout, page, robots, sitemap)
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── sections/      # Hero, About, Skills, TechStack, Projects, Experience, Services, Contact
│   └── 3d/            # ParticleBackground
├── lib/               # data.ts (tous les contenus)
├── types/             # index.ts (interfaces TypeScript)
└── styles/            # Variables CSS globales
```

## 🚀 Démarrage rapide

### Prérequis

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Cloner le repo
git clone https://github.com/Mubarake-sudo/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000)

## 📝 Scripts disponibles

| Commande | Description |
|---------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile pour la production |
| `npm run start` | Lance le serveur de production |
| `npm run lint` | Vérifie le code avec ESLint |

## 🎨 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Nom animé, typewriter, compteurs, CTAs (CV, GitHub, LinkedIn, Contact) |
| **About** | Code block esthétique, valeurs, description personnelle |
| **Compétences** | Barres de progression animées, filtre par catégorie |
| **Tech Stack** | 35+ technologies avec logos devicons, groupées par catégorie |
| **Projets** | Cartes avec GitHub/Demo, filtrage featured/all |
| **Expérience** | Timeline animée (MUBADEV, MOOBICOM) + Formation EPITECH |
| **Services** | 6 services avec icônes et features |
| **Contact** | Formulaire complet, liens sociaux, statut disponibilité |

## 🌐 Déploiement sur Vercel

```bash
# Build de production (sans erreurs)
npm run build

# Via CLI Vercel
npx vercel --prod
```

Ou connectez votre repo GitHub à [vercel.com](https://vercel.com) pour un déploiement automatique.

## ⚙️ Personnalisation

Toutes les données sont centralisées dans `src/lib/data.ts` :

- `PROJECTS` — Ajouter/modifier des projets
- `EXPERIENCES` — Expériences professionnelles
- `EDUCATION` — Formation
- `SKILLS` — Compétences avec niveaux
- `TECH_STACK` — Technologies affichées
- `SERVICES` — Services proposés

## 📊 Performance

- **Lighthouse Score** : >95 (Performance, Accessibilité, SEO, Best Practices)
- **Responsive** : Mobile · Tablette · Desktop
- **SEO** : OpenGraph, Twitter Cards, robots.txt, sitemap.xml
- **Accessibilité** : WCAG AA conforme

## 📄 Licence

MIT © Mubarake Aderemou (MUBADEV)

---

Développé avec ❤️ pour la soutenance EPITECH 2026
