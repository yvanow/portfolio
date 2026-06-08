"use client";

import { GraduationCap, Briefcase, Award, MapPin } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "Licence Pro – Développeur d'Applications",
    org: "IAI TOGO (Institut Africain de l'Informatique)",
    date: "09/2024 – en cours",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Award,
    title: "Certification CCNA – Switching, Routing & Wireless",
    org: "Cisco Networking Academy",
    date: "04/2026",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Briefcase,
    title: "Développeur web ",
    org: "Backend de gestion budgétaire scolaire (Java Spring )",
    date: "09/2025 – 12/2025",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: GraduationCap,
    title: "Baccalauréat Scientifique",
    org: "Lomé – TOGO",
    date: "07/2024",
    color: "text-gray-500",
    bg: "bg-gray-500/10",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-blue-500 font-mono text-sm mb-2">// à propos</p>
          <h2 className="text-4xl font-bold">Qui suis-je ?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left - text */}
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Je suis <strong className="text-gray-900 dark:text-white">Yvan DJASSAH</strong>,
              19 ans, étudiant en informatique à l'IAI TOGO.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Je maîtrise la programmation orientée objet (Java, Python, C/C++),
              les structures de données et les algorithmes, ainsi que le
              développement web backend avec Java Spring Boot. Certifié CCNA,
              j'ai également de solides bases en réseaux Cisco.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Curieux, rigoureux et doté d'une forte capacité d'adaptation,
              j'apprends rapidement de nouveaux outils et technologies, et
              j'évolue aisément dans des environnements techniques et collaboratifs.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <p className="text-sm text-gray-500 mb-1">Localisation</p>
                <p className="font-medium flex items-center gap-1">
                  <MapPin size={14} className="text-blue-500" /> Lomé, TOGO
                </p>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <p className="text-sm text-gray-500 mb-1">Langues</p>
                <p className="font-medium">Français · Anglais · Ewé</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <p className="text-sm text-gray-500 mb-1">Statut</p>
                <p className="font-medium text-green-500">Disponible</p>
              </div>
            </div>
          </div>

          {/* Right - timeline */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Parcours</h3>
            {timeline.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-colors group"
                >
                  <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className={item.color} />
                  </div>
                  <div>
                    <p className="font-medium text-sm group-hover:text-blue-500 transition-colors">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.org}</p>
                    <p className="text-xs text-gray-400 mt-1 font-mono">{item.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
