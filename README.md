# Portfolio – Yvan DJASSAH

Portfolio personnel développé avec Next.js 15, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Lancer le projet

```bash
# Installer les dépendances
npm install

# Démarrer en développement
npm run dev

# Build pour la production
npm run build
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## 📁 Structure

```
portfolio/
├── app/              → Pages Next.js (App Router)
├── components/       → Composants React
├── data/             → Données (compétences, projets)
├── lib/              → Utilitaires
└── styles/           → CSS global
```

## ⚙️ Configuration

### Formulaire de contact (Formspree)
1. Créer un compte sur [formspree.io](https://formspree.io)
2. Créer un nouveau formulaire
3. Remplacer `YOUR_FORM_ID` dans `components/Contact.tsx` par votre ID

### CV téléchargeable
Placer votre fichier CV en PDF dans `public/cv.pdf`

### Photo de profil
Placer votre photo dans `public/profile.jpg`

## 🚀 Déploiement sur Vercel

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/votre-username/portfolio.git
git push -u origin main
```

Ensuite connecter le dépôt à [vercel.com](https://vercel.com).

## 🛠 Stack

- **Framework** : Next.js 15
- **Langage** : TypeScript
- **Style** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Thème** : next-themes (dark/light)
- **Formulaire** : Formspree
- **Déploiement** : Vercel
