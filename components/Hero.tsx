"use client";

import { useEffect, useState } from "react";
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const titles = [
  "Développeur d'applications",
  "Étudiant IAI TOGO",
  "Java Spring Boot",
  "Passionné de cybersécurité",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  return (
    <section
      id="accueil"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Disponible pour des opportunités
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
          Yvan{" "}
          <span className="text-blue-500">DJASSAH</span>
        </h1>

        {/* Typing effect */}
        <div className="h-10 flex items-center justify-center mb-6 animate-slide-up animate-delay-100">
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-mono">
            {displayed}
            <span className="animate-pulse text-blue-500">|</span>
          </p>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed animate-slide-up animate-delay-200">
          Étudiant en informatique à l'<strong className="text-gray-800 dark:text-gray-200">IAI TOGO</strong>,
          spécialisé en systèmes d'information et cybersécurité. Curieux,
          rigoureux et passionné par la conception de solutions techniques efficaces.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up animate-delay-300">
          <a
            href="#projets"
            className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-200 hover:scale-105"
          >
            Voir mes projets
          </a>
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 font-medium transition-all duration-200 hover:scale-105"
          >
            <Download size={16} />
            Télécharger mon CV
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5 animate-slide-up animate-delay-400">
          <a
            href="https://github.com/yvan-djassah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/yvan-djassah-a843b0339/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:djassahyvan@gmail.com"
            className="text-gray-500 hover:text-blue-500 transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
