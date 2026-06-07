export type ProjectStatus = "completed" | "in-progress" | "planned";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  status: ProjectStatus;
  github?: string;
  demo?: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Application de gestion budgétaire scolaire",
    description:
      "Backend d'une application permettant d'élaborer et gérer le budget des établissements scolaires.",
    longDescription:
      "Mission freelance réalisée entre septembre et décembre 2025. Développement du backend complet avec Java Spring Boot, conception de l'API REST, gestion des entités budgétaires et intégration avec une base de données relationnelle.",
    tech: ["Java", "Spring Boot", "MySQL", "REST API"],
    status: "completed",
    date: "09/2025 – 12/2025",
  },
  {
    id: 2,
    title: "Application de gestion des employés",
    description:
      "Application web développée lors d'un hackathon, permettant la gestion complète des employés d'une organisation.",
    longDescription:
      "Projet réalisé dans le cadre de hackathons & coding challenges (02/2026 – 04/2026). Mise en place d'une application web de gestion des employés avec focus sur la rapidité de conception et le travail en équipe sous contrainte de temps.",
    tech: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
    status: "completed",
    date: "02/2026 – 04/2026",
  },
  {
    id: 3,
    title: "Portfolio personnel",
    description:
      "Ce portfolio — conçu avec Next.js, TypeScript et Tailwind CSS pour présenter mon profil et mes compétences.",
    longDescription:
      "Projet en cours de développement. Objectif : créer un portfolio moderne, responsive et optimisé SEO pour présenter mon profil, mes compétences techniques et mon parcours à des recruteurs et managers techniques.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "in-progress",
    date: "2026",
    github: "https://github.com/yvan-djassah",
  },
  {
    id: 4,
    title: "Gestionnaire de tâches full stack",
    description:
      "Application full stack de gestion de tâches avec authentification, filtres et recherche — en cours de planification.",
    longDescription:
      "Projet planifié pour approfondir mes compétences en développement full stack : React pour le frontend, Node.js + Express pour le backend, MongoDB pour la persistance. Fonctionnalités prévues : CRUD complet, authentification JWT, filtres et recherche.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    status: "planned",
    date: "À venir",
  },
];
