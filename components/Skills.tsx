"use client";

import { useState } from "react";
import { skills } from "@/data/skills";

const categories = [
  { key: "backend", label: "Backend", color: "bg-blue-500" },
  { key: "frontend", label: "Frontend", color: "bg-purple-500" },
  { key: "database", label: "Bases de données", color: "bg-green-500" },
  { key: "devops", label: "DevOps & Outils", color: "bg-orange-500" },
  { key: "languages", label: "Langages", color: "bg-pink-500" },
  { key: "network", label: "Réseaux", color: "bg-teal-500" },
];

export default function Skills() {
  const [active, setActive] = useState("backend");

  const current = categories.find((c) => c.key === active)!;
  const skillList = skills[active as keyof typeof skills];

  return (
    <section id="competences" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-500 font-mono text-sm mb-2">// compétences</p>
          <h2 className="text-4xl font-bold">Stack technique</h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === cat.key
                  ? "bg-blue-500 text-white"
                  : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-blue-500 dark:hover:border-blue-500"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills bars */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillList.map((skill, i) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm">{skill.name}</span>
                <span className="text-sm text-gray-500 font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${current.color} rounded-full transition-all duration-700`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold mb-6 text-gray-500 dark:text-gray-400">
            Toutes les technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Java", "Spring Boot", "Python", "PHP", "Django",
              "C / C++", "C#", "HTML", "CSS", "React",
              "MySQL",
              "Git", "GitHub", "GitLab", "Linux",
              "Cisco CCNA", "IPv4 / IPv6", "VLANs", "OSPF",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
