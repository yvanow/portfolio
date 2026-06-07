"use client";

import { ExternalLink, Github, Clock, CheckCircle, Lightbulb } from "lucide-react";
import { projects, type ProjectStatus } from "@/data/projects";

const statusConfig: Record<ProjectStatus, { label: string; icon: typeof Clock; color: string }> = {
  completed: { label: "Réalisé", icon: CheckCircle, color: "text-green-500 bg-green-500/10" },
  "in-progress": { label: "En cours", icon: Clock, color: "text-blue-500 bg-blue-500/10" },
  planned: { label: "Prévu", icon: Lightbulb, color: "text-orange-500 bg-orange-500/10" },
};

export default function Projects() {
  return (
    <section id="projets" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <p className="text-blue-500 font-mono text-sm mb-2">// projets</p>
          <h2 className="text-4xl font-bold">Mes réalisations</h2>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mb-16 max-w-xl">
          Deux projets réels réalisés, un portfolio en cours de construction,
          et un projet full stack en préparation.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const status = statusConfig[project.status];
            const StatusIcon = status.icon;

            return (
              <article
                key={project.id}
                className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${status.color}`}
                  >
                    <StatusIcon size={12} />
                    {status.label}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">{project.date}</span>
                </div>

                {/* Title & description */}
                <h3 className="font-bold text-lg mb-3 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {project.longDescription}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-md font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-500 transition-colors"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sm text-gray-300 dark:text-gray-600 cursor-default">
                      <Github size={14} /> Non publié
                    </span>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-500 transition-colors"
                    >
                      <ExternalLink size={14} /> Démo
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
