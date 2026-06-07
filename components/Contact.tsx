"use client";

import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Contact() {

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-500 font-mono text-sm mb-2">// contact</p>
          <h2 className="text-4xl font-bold">Me contacter</h2>
        </div>

        <div className="flex justify-center">
          {/* Centered - info */}
          <div className="space-y-8 max-w-md">
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Disponible pour des stages, missions freelance ou opportunités
              en développement. N'hésitez pas à me contacter !
            </p>

            <div className="space-y-4">
            <div
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 flex items-center justify-center transition-colors">
                <Mail size={18} className="text-blue-500 group-hover:text-blue-600 transition-colors" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Email</p>
                <p className="font-medium group-hover:text-blue-500 transition-colors">
                  djassahyvan@gmail.com
                </p>
              </div>
            </div>

              <a
                href="tel:+22893011652"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 group-hover:bg-blue-500/10 flex items-center justify-center transition-colors">
                  <Phone size={18} className="text-green-500 group-hover:text-blue-500 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Téléphone</p>
                  <p className="font-medium group-hover:text-blue-500 transition-colors">
                    +228 93 01 16 52
                  </p>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/Légbasitto,+Lomé,+Togo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 group-hover:bg-blue-500/10 flex items-center justify-center transition-colors">
                  <MapPin size={18} className="text-orange-500 group-hover:text-blue-500 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Localisation</p>
                  <p className="font-medium group-hover:text-blue-500 transition-colors">Lomé, Légbasitto</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/yvan-djassah-a843b0339/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 group-hover:bg-blue-500/10 flex items-center justify-center transition-colors">
                  <Linkedin size={18} className="text-blue-600 group-hover:text-blue-500 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">LinkedIn</p>
                  <p className="font-medium group-hover:text-blue-500 transition-colors">
                    Yvan DJASSAH
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
