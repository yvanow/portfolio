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
