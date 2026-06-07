import { Github, Linkedin, Mail, Heart, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-mono font-semibold text-blue-500 text-lg">YD.</p>
          <p className="text-sm text-gray-500 mt-1">
            Développeur d'applications · IAI TOGO
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/yvanow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/yvan-djassah-a843b0339"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:djassahyvan@gmail.com"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://maps.google.com/?q=Togo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 hover:drop-shadow-lg hover:drop-shadow-blue-500/50 transition-all duration-300"
            aria-label="Location"
          >
            <MapPin size={18} />
          </a>
        </div>

        <p className="text-sm text-gray-400 flex items-center gap-1">
          Fait avec <Heart size={12} className="text-red-400" /> par Yvan DJASSAH · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
