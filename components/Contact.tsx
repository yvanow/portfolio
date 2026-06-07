"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Initialiser EmailJS avec votre clé publique
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); // À remplacer avec votre clé
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send("service_1234567890", "template_1234567890", {
        to_email: "djassahyvan@gmail.com",
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      });

      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000); // Reset après 5 secondes
    } catch (err) {
      setError("Erreur lors de l'envoi. Veuillez réessayer.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-500 font-mono text-sm mb-2">// contact</p>
          <h2 className="text-4xl font-bold">Me contacter</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left - info */}
          <div className="space-y-8">
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Disponible pour des stages, missions freelance ou opportunités
              en développement. N'hésitez pas à me contacter !
            </p>

            <div className="space-y-4">
              <a
                href="mailto:djassahyvan@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-colors group"
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
              </a>

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
                href="https://www.linkedin.com/in/yvan-djassah-a843b0339"
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
                    yvan-djassah-a843b0339
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center p-8 rounded-2xl border border-green-500/30 bg-green-500/5">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Send size={28} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold">Message envoyé !</h3>
                <p className="text-gray-500">Je vous répondrai dans les plus brefs délais.</p>
                <button
                  onClick={() => setSent(false)}
                  className="text-sm text-blue-500 hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 text-sm">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Votre message..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Envoi..." : (<><Send size={16} /> Envoyer le message</>)}
                </button>
                <p className="text-xs text-gray-400 text-center">
                  * Configurez EmailJS : remplacez YOUR_EMAILJS_PUBLIC_KEY dans Contact.tsx
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
